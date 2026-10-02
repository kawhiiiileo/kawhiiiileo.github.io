# Citation counts

The homepage uses manually maintained counts in `src/data/profile.ts`:
`profile.citations` for the total and each paper's optional `citations` field for
individual counts. Only papers with an explicit count show a citation badge.

The standalone Scholar crawler is retained for reference. It is not run by the
deployment workflow, and the homepage does not fetch its JSON output. Updating
that output will not overwrite the manually maintained citation counts.
