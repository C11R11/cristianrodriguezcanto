---
name: gh-pages-articles
description: Automates the creation and management of Jekyll-style articles for GitHub Pages. Use this when the user wants to create a new blog post, update front matter, or organize the _posts directory.
---

# gh-pages-articles

This skill helps maintain a consistent workflow for publishing articles on a GitHub Pages site.

## Workflow: Creating a New Article

When asked to create a new article:
1.  **Extract Details:** Identify the title and any categories/tags.
2.  **Generate Slug:** Convert the title to a URL-friendly slug (lowercase, hyphens instead of spaces).
3.  **Set Date:** Use the current date in `YYYY-MM-DD` format for the filename and `YYYY-MM-DD HH:MM:SS +/-TTTT` for the front matter.
4.  **Create File:** Use the `scripts/create_article.cjs` script or manually create a file in `_posts/` following the format `YYYY-MM-DD-slug.md`.
5.  **Apply Template:** Use the template from `assets/article_template.md`.

## Workflow: Managing Categories

- Ensure categories are listed as a YAML array.
- Standardize category names (e.g., prefer "machine-learning" over "ML").

## Resources
- **Template:** `assets/article_template.md`
- **Script:** `scripts/create_article.cjs` (Automates file creation)
- **Reference:** `references/jekyll_cheatsheet.md` (Common Jekyll tags)
