---
name: gh-pages-articles
description: Automates the creation and management of articles for a MkDocs personal site. Use this when the user wants to create a new post or organize the docs/articles directory.
---

# gh-pages-articles (MkDocs version)

This skill helps maintain a consistent workflow for publishing articles in a MkDocs project.

## Workflow: Creating a New Article

When asked to create a new article:
1.  **Extract Details:** Identify the title and any tags.
2.  **Generate Filename:** Convert the title to a URL-friendly slug (lowercase, hyphens).
3.  **Create File:** Place the file in `docs/articles/`.
4.  **Apply Template:** Use the template from `assets/article_template.md`.

## Resources
- **Template:** `assets/article_template.md`
- **Script:** `scripts/create_article.cjs` (Updated for MkDocs)
