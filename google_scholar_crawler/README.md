# Google Scholar citation counts

The homepage reads `public/gs_data_shieldsio.json` when it loads. It checks that
the snapshot belongs to the linked Scholar profile and shows its sync date. An
individual paper uses the snapshot count when its title matches a single Scholar
record. The saved counts in `src/data/profile.ts` cover missing snapshots and
unmatched papers.

The GitHub Pages workflow attempts a refresh every six hours and on manual runs.
If Scholar declines the request, the workflow reuses the last successful snapshot
from its cache. If there is no cached snapshot yet, the site shows the saved
counts and date.

To refresh a local checkout and rebuild the static preview:

```sh
python -m pip install -r google_scholar_crawler/requirements.txt
python -m google_scholar_crawler.main
npm run build
```

The crawler validates the author and all counts before atomically replacing the
snapshot.
