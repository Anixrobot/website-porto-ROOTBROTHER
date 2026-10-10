import fs from 'fs';
import path from 'path';

const REPLACEMENTS = {
  '#051329': '#030B18',
  '#0A192F': '#0E1B32',
  '#0E223D': '#1D2A41',
  '#10B981': '#4EDEA3',
  '#059669': '#3BC28C',
  '#34D399': '#4FDBC8',
  '16,185,129': '78,222,163',
  '#94A3B8': '#BBCABF',
  '#F8FAFC': '#FFFFFF'
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.vue') || file.endsWith('.js') || file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.push('./index.html');

let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [oldVal, newVal] of Object.entries(REPLACEMENTS)) {
    if (content.includes(oldVal)) {
      content = content.split(oldVal).join(newVal);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Replaced colors in ${count} files.`);

