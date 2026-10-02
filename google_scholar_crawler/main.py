from __future__ import annotations

import json
import os
import re
from datetime import datetime, timezone
from pathlib import Path


def citation_count(value: object) -> int:
    if type(value) is not int or value < 0:
        raise ValueError("Missing or invalid Google Scholar citation count")
    return value


def build_snapshot(author: dict, scholar_id: str) -> dict:
    if author.get("scholar_id") != scholar_id:
        raise ValueError("Google Scholar returned a different author")
    publications = author.get("publications")
    if not isinstance(publications, list) or not publications:
        raise ValueError("Google Scholar did not return the publication list")

    papers = []
    for publication in publications:
        paper_id = publication.get("author_pub_id", "")
        title = publication.get("bib", {}).get("title", "")
        if not isinstance(paper_id, str) or not re.fullmatch(re.escape(scholar_id) + r":[\w-]+", paper_id):
            raise ValueError("Missing or invalid Google Scholar publication ID")
        if not isinstance(title, str) or not title.strip():
            raise ValueError("Missing Google Scholar publication title")
        cites_ids = publication.get("cites_id", [])
        if not isinstance(cites_ids, list) or any(not isinstance(value, str) or not re.fullmatch(r"[0-9]+", value) for value in cites_ids):
            raise ValueError("Invalid Google Scholar citing-articles ID")
        papers.append({
            "id": paper_id,
            "title": title.strip(),
            "citations": citation_count(publication.get("num_citations")),
            "citesIds": cites_ids,
        })

    return {
        "schemaVersion": 1,
        "authorId": scholar_id,
        "label": "citations",
        "message": str(citation_count(author.get("citedby"))),
        "updated": datetime.now(timezone.utc).isoformat(),
        "publications": papers,
    }


def fetch_author(scholar_id: str) -> dict:
    from scholarly import scholarly

    scholarly.set_timeout(20)
    scholarly.set_retries(1)
    author = scholarly.search_author_id(scholar_id)
    return scholarly.fill(author, sections=["basics", "indices", "publications"])


def main() -> None:
    scholar_id = os.environ.get("GOOGLE_SCHOLAR_ID", "I0V2KAEAAAAJ")
    out_dir = Path(os.environ.get("SCHOLAR_OUTPUT_DIR", "public"))
    # Fetch and validate everything before touching the last successful snapshot.
    payload = build_snapshot(fetch_author(scholar_id), scholar_id)
    out_dir.mkdir(parents=True, exist_ok=True)
    output = out_dir / "gs_data_shieldsio.json"
    temporary = output.with_suffix(".json.tmp")
    try:
        temporary.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        os.replace(temporary, output)
    finally:
        temporary.unlink(missing_ok=True)
    print(f"Synced {len(payload['publications'])} publications from Google Scholar at {payload['updated']}")


if __name__ == "__main__":
    main()
