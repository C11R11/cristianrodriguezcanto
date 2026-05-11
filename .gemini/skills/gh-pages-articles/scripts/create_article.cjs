const fs = require('fs');
const path = require('path');

function create_article() {
  const title = process.argv[2];
  const categories = process.argv[3] || '';
  if (!title) {
    console.error('Error: Please provide a title.');
    process.exit(1);
  }

  const slug = title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  const date = new Date();
  const dateStr = date.toISOString().split('T')[0];
  const filename = `${dateStr}-${slug}.md`;
  const fullPath = path.join(process.cwd(), '_posts', filename);

  const templatePath = path.join(__dirname, '..', 'assets', 'article_template.md');
  let content = fs.readFileSync(templatePath, 'utf8');

  content = content.replace(/{{TITLE}}/g, title);
  content = content.replace(/{{DATE}}/g, date.toISOString().replace('T', ' ').split('.')[0] + ' +0000');
  content = content.replace(/{{CATEGORIES}}/g, categories);

  if (!fs.existsSync(path.join(process.cwd(), '_posts'))) {
    fs.mkdirSync(path.join(process.cwd(), '_posts'), { recursive: true });
  }

  fs.writeFileSync(fullPath, content);
  console.log(`Success: Created article at ${fullPath}`);
}

create_article();
