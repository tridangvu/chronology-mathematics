# GitHub Actions workflows (pending push)

The initial `gh` token had `repo` scope but **not** `workflow` scope, so GitHub rejected pushes that create `.github/workflows/*`.

Workflow files are present locally at:

- `.github/workflows/ci.yml`
- `.github/workflows/deploy.yml`

To publish them (one-time):

```bash
# refresh auth with workflow scope, then:
cd /workspace/chronology-mathematics   # or your clone
git add .github/workflows
git commit -m "Add CI and GitHub Pages deploy workflows"
git push origin main
```

Or in the GitHub UI: Settings → Developer settings → tokens → enable `workflow`, then push.
