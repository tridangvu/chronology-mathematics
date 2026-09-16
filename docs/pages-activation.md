# GitHub Pages activation

The workflow `.github/workflows/deploy.yml` builds and deploys with the official Astro action.

**You still need a one-time repo setting:**

1. Open https://github.com/tridangvu/chronology-mathematics/settings/pages
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually under the Actions tab).
4. Site URL: https://tridangvu.github.io/chronology-mathematics/

Astro config already sets:

```js
site: 'https://tridangvu.github.io'
base: '/chronology-mathematics'
```

If you later use a custom domain, update `site`, remove `base`, and follow Astro’s Pages guide.
