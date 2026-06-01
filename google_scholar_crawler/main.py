from __future__ import annotations

import json
import os
from datetime import datetime, timezone
from pathlib import Path

from scholarly import scholarly


def main() -> None:
    scholar_id = os.environ.get("GOOGLE_SCHOLAR_ID", "I0V2KAEAAAAJ")
    out_dir = Path(os.environ.get("SCHOLAR_OUTPUT_DIR", "public"))
    out_dir.mkdir(parents=True, exist_ok=True)

    author = scholarly.search_author_id(scholar_id)
    author = scholarly.fill(author, sections=["basics", "indices", "counts"])
    cited_by = str(author.get("citedby", "--"))

    payload = {
        "schemaVersion": 1,
        "label": "citations",
        "message": cited_by,
        "updated": datetime.now(timezone.utc).isoformat(),
    }

    with (out_dir / "gs_data_shieldsio.json").open("w", encoding="utf-8") as file:
        json.dump(payload, file, ensure_ascii=False, indent=2)


if __name__ == "__main__":
    main()
