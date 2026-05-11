# Project Instructions: Personal GitHub Pages & Blog

This repository is a personal GitHub Pages site used for publishing articles and technical notes.

## Project Overview
- **Purpose:** Public personal site and blog.
- **Technology:** GitHub Pages (Jekyll).
- **Structure:**
    - `_posts/`: Markdown files for articles (format: `YYYY-MM-DD-title.md`).
    - `assets/`: Images, CSS, and other static files.
    - `index.md`: Homepage listing recent articles.
    - `_config.yml`: Jekyll configuration.

## Article Workflow

### 1. Creating an Article
Use the `gh-pages-articles` skill or create a file manually:
- **Filename Format:** `YYYY-MM-DD-slug-title.md`
- **Front Matter:**
  ```yaml
  ---
  layout: post
  title: "Article Title"
  date: YYYY-MM-DD HH:MM:SS +/-TTTT
  categories: [tag1, tag2]
  ---
  ```

### 2. Local Preview
If you have Jekyll installed locally:
```bash
bundle exec jekyll serve
```

### 3. Publishing
Changes pushed to the `main` branch are automatically deployed by GitHub Pages.

## Agent Skills & Automation
- **gh-pages-articles skill:** Automates article scaffolding.
    - **Installation:** `gemini skills install gh-pages-articles.skill --scope workspace`
    - **Reload:** After installation, run `/skills reload`.


