# Project Instructions: Minimalist Markdown Website (MkDocs)

This repository is a minimalist personal site that combines the ease of **Markdown** with the aesthetic of **sjmielke.com**. It uses **MkDocs** as the engine with a custom CSS theme.

## Project Overview
- **Purpose:** Public personal site, portfolio, and blog.
- **Technology:** MkDocs (Material theme) with heavy CSS overrides.
- **Design Principles:**
    - Centered "elevated card" layout on a dark background.
    - High-quality serif typography.
    - Minimalist header inside the content card.
- **Structure:**
    - `mkdocs.yml`: Configuration.
    - `docs/`: Content in Markdown.
    - `docs/stylesheets/extra.css`: The custom sjmielke-style theme.
    - `docs/articles/`: Articles in `.md`.

## Article Workflow

### 1. Creating an Article
Use the `gh-pages-articles` skill to generate a new `.md` file in `docs/articles/`.

### 2. Local Preview
Run the MkDocs development server:
```bash
mkdocs serve
```

### 3. Build for Production
To generate the static files in the `dist/` folder (the same way GitHub does before publishing):
```bash
mkdocs build
```
This will create a `dist/` directory with all your HTML, CSS, and assets ready for deployment.

### 4. Publishing
The site is typically deployed to GitHub Pages. You can use:
```bash
mkdocs gh-deploy
```
or push the `dist/` folder content to your `gh-pages` branch.
- **gh-pages-articles skill:** Automates article scaffolding for the `docs/articles/` directory in Markdown format.
    - **Installation:** `gemini skills install gh-pages-articles.skill --scope workspace`
    - **Reload:** After installation, run `/skills reload`.



