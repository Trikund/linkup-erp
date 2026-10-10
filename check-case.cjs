const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') checkDir(full);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        const match = line.match(/from\s+['"](.*)['"]/);
        if (match) {
          const importPath = match[1];
          if (importPath.startsWith('.')) {
            const dirOfFile = path.dirname(full);
            let target = path.resolve(dirOfFile, importPath);
            const exts = ['', '.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx'];
            let found = false;
            for (const ext of exts) {
              const testPath = target + ext;
              if (fs.existsSync(testPath)) {
                // Check exact casing on disk
                const parts = path.relative(path.resolve('.'), testPath).split(path.sep);
                let current = path.resolve('.');
                for (const part of parts) {
                  if (!part || part === '.') continue;
                  const entries = fs.readdirSync(current);
                  if (!entries.includes(part)) {
                    const actual = entries.find(e => e.toLowerCase() === part.toLowerCase());
                    console.log(`CASE MISMATCH in ${path.relative('.', full)}:${idx+1} -> imported '${part}', actual on disk is '${actual}'`);
                  }
                  current = path.join(current, part);
                }
                found = true;
                break;
              }
            }
            if (!found) {
              console.log(`FILE NOT FOUND in ${path.relative('.', full)}:${idx+1} -> '${importPath}'`);
            }
          }
        }
      });
    }
  }
}

checkDir(path.resolve('.'));
console.log('Case check finished.');
