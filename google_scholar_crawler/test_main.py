import copy
import json
import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from google_scholar_crawler.main import build_snapshot, main


AUTHOR_ID = "I0V2KAEAAAAJ"
AUTHOR = {
    "scholar_id": AUTHOR_ID,
    "citedby": 8,
    "publications": [
        {"author_pub_id": f"{AUTHOR_ID}:paper_a", "bib": {"title": "Paper A"}, "num_citations": 8, "cites_id": ["123", "456"]},
        {"author_pub_id": f"{AUTHOR_ID}:paper_b", "bib": {"title": "Paper B"}, "num_citations": 0},
    ],
}


class ScholarSnapshotTests(unittest.TestCase):
    def test_zero_citations_and_merged_scholar_records_are_preserved(self):
        snapshot = build_snapshot(AUTHOR, AUTHOR_ID)
        self.assertEqual(snapshot["message"], "8")
        self.assertEqual(snapshot["publications"][0]["citesIds"], ["123", "456"])
        self.assertEqual(snapshot["publications"][1]["citations"], 0)
        self.assertEqual(snapshot["publications"][1]["citesIds"], [])

    def test_incomplete_and_wrong_author_responses_are_rejected(self):
        cases = [
            {**AUTHOR, "scholar_id": "another_author"},
            {**AUTHOR, "citedby": None},
            {**AUTHOR, "publications": []},
        ]
        for field, value in (("num_citations", None), ("num_citations", -1), ("num_citations", True), ("author_pub_id", "someone_else:paper"), ("cites_id", ["not-a-citation-id"])):
            author = copy.deepcopy(AUTHOR)
            author["publications"][0][field] = value
            cases.append(author)
        for author in cases:
            with self.subTest(author=author), self.assertRaises(ValueError):
                build_snapshot(author, AUTHOR_ID)

    def test_fetch_failure_keeps_last_counts_and_timestamp(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "gs_data_shieldsio.json"
            original = json.dumps({"message": "8", "updated": "2026-09-01T00:00:00Z"})
            output.write_text(original)
            with patch.dict(os.environ, {"SCHOLAR_OUTPUT_DIR": directory, "GOOGLE_SCHOLAR_ID": AUTHOR_ID}), patch("google_scholar_crawler.main.fetch_author", side_effect=RuntimeError("HTTP 429")):
                with self.assertRaises(RuntimeError):
                    main()
            self.assertEqual(output.read_text(), original)

    def test_success_replaces_the_snapshot_without_temporary_files(self):
        with tempfile.TemporaryDirectory() as directory:
            with patch.dict(os.environ, {"SCHOLAR_OUTPUT_DIR": directory, "GOOGLE_SCHOLAR_ID": AUTHOR_ID}), patch("google_scholar_crawler.main.fetch_author", return_value=AUTHOR):
                main()
            output = Path(directory) / "gs_data_shieldsio.json"
            self.assertEqual(json.loads(output.read_text())["publications"][1]["citations"], 0)
            self.assertFalse(output.with_suffix(".json.tmp").exists())


if __name__ == "__main__":
    unittest.main()
