<<<<<<< HEAD
# tar-ang-2004.github.io
=======
# Tarang's Portfolio

This is a modern static portfolio site that lists public repositories from https://github.com/tar-ang-2004 and is ready to publish via GitHub Pages using the repository name `tar-ang-2004.github.io`.

What you'll find:
 - `index.html` — single-page site and layout
 - `css/styles.css` — responsive theme with dark/light support
 - `js/scripts.js` — fetches repositories using the GitHub REST API and renders them into project cards

Publish steps (recommended):
1. Create a repository named `tar-ang-2004.github.io` under your GitHub account.
2. Copy the contents of this folder into the repository root (or push this folder as the repository).
3. Commit and push; GitHub Pages will serve content at https://tar-ang-2004.github.io within a few minutes.

PowerShell example (one-liner):

```powershell
cd C:\path\to\workspace\gihub.io; git init; git add .; git commit -m "Initial portfolio site"; git branch -M main; git remote add origin https://github.com/tar-ang-2004/tar-ang-2004.github.io.git; git push -u origin main
```

Troubleshooting & tips

- 404 after push: ensure the repo name is exactly `tar-ang-2004.github.io` and you pushed to `main`.
- Empty site: make sure `index.html` is in the repository root (not inside a subfolder).
- API rate limits: The site uses the public GitHub API. If you have many repos or the site runs into rate limits, create a personal access token and add a small header in `js/scripts.js` when calling fetch. Do NOT commit personal tokens to a public repo.

Example token usage (browser-side — for development only):

```js
// WARNING: committing a token is insecure. Prefer server-side proxy for production.
const TOKEN = '';
fetch(url, { headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {} });
```

Next steps I can help with:
- Add an About/Resume section with downloadable PDF
- Add a contact form (serverless or Formspree)
- Add custom featured project sections with images and tags

If you want, I can push these files to the `tar-ang-2004.github.io` repository for you — I just need push access or you can run the PowerShell commands above.

Publish steps (recommended):
1. Create a repository named `tar-ang-2004.github.io` under your GitHub account.
2. Copy the contents of this folder into the repository root (or push this folder as the repository).
3. Commit and push; GitHub Pages will serve content at https://tar-ang-2004.github.io within a few minutes.

PowerShell example (one-liner):

```powershell
cd C:\path\to\workspace\gihub.io; git init; git add .; git commit -m "Initial portfolio site"; git branch -M main; git remote add origin https://github.com/tar-ang-2004/tar-ang-2004.github.io.git; git push -u origin main
```

Troubleshooting & tips

- 404 after push: ensure the repo name is exactly `tar-ang-2004.github.io` and you pushed to `main`.
- Empty site: make sure `index.html` is in the repository root (not inside a subfolder).
- API rate limits: The site uses the public GitHub API. If you have many repos or the site runs into rate limits, create a personal access token and add a small header in `js/scripts.js` when calling fetch. Do NOT commit personal tokens to a public repo.

Example token usage (browser-side — for development only):

```js
// WARNING: committing a token is insecure. Prefer server-side proxy for production.
const TOKEN = '';
fetch(url, { headers: TOKEN ? { Authorization: `token ${TOKEN}` } : {} });
```

Next steps I can help with:
- Add an About/Resume section with downloadable PDF
- Add a contact form (serverless or Formspree)
- Add custom featured project sections with images and tags

If you want, I can push these files to the `tar-ang-2004.github.io` repository for you — I just need push access or you can run the PowerShell commands above.
>>>>>>> f26f768 (Initial portfolio site)
