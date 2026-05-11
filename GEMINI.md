# Project Instructions: Personal Website (MkDocs)

This repository is a personal site built with **MkDocs** and the **Material** theme.

## Project Overview
- **Purpose:** Public personal site, portfolio, and blog.
- **Technology:** MkDocs (Material theme).
- **Structure:**
    - `mkdocs.yml`: Main configuration file.
    - `docs/`: All content files.
    - `docs/index.md`: Homepage with banner.
    - `docs/articles/`: Articles and blog posts.
    - `docs/cv.pdf`: Professional CV.

## Article Workflow

### 1. Creating an Article
Place new markdown files in `docs/articles/`.
- **Filename:** `descriptive-title.md`
- **Metadata:** MkDocs uses standard Markdown. You can add meta tags at the top:
  ```yaml
  ---
  title: "Article Title"
  description: "A short summary"
  date: YYYY-MM-DD
  ---
  ```

### 2. Local Preview
Run the MkDocs development server:
```bash
mkdocs serve
```

### 3. Publishing
The site is typically built and deployed to GitHub Pages (often via GitHub Actions or `mkdocs gh-deploy`).

## Agent Skills & Automation
- **gh-pages-articles skill:** Automates article scaffolding for the `docs/articles/` directory.
    - **Installation:** `gemini skills install gh-pages-articles.skill --scope workspace`
    - **Reload:** After installation, run `/skills reload`.



