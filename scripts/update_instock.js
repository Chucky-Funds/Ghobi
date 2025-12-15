const fs = require('fs');
const path = require('path');

const PRODUCTS = path.join(__dirname, '..', 'products.json');
const choices = ['high', 'medium', 'low', 'out'];

function main() {
  const raw = fs.readFileSync(PRODUCTS, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse products.json:', err.message);
    process.exit(1);
  }

  for (const item of data) {
    item.inStock = choices[Math.floor(Math.random() * choices.length)];
  }

  fs.writeFileSync(PRODUCTS, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Updated ${data.length} products in ${PRODUCTS}`);
}

if (require.main === module) main();
