const fs = require('fs');
const path = require('path');

function create_article() {
  const title = process.argv[2];
  if (!title) {
    console.error('Error: Please provide a title.');
    process.exit(1);
  }

  const slug = title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const filename = `${slug}.md`;
  const fullPath = path.join(process.cwd(), 'docs', 'articles', filename);

  const templatePath = path.join(__dirname, '..', 'assets', 'article_template.md');
  let content = fs.readFileSync(templatePath, 'utf8');

  content = content.replace(/{{TITLE}}/g, title);
  const dateStr = new Date().toISOString().split('T')[0];
  content = content.replace(/{{DATE}}/g, dateStr);

  if (!fs.existsSync(path.join(process.cwd(), 'docs', 'articles'))) {
    fs.mkdirSync(path.join(process.cwd(), 'docs', 'articles'), { recursive: true });
  }

  fs.writeFileSync(fullPath, content);
  console.log(`Success: Created article at ${fullPath}`);
}

create_article();
