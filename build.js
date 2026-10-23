import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

// Clean previous dist output
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy static files and directories required for GitHub Pages hosting
const entriesToCopy = ['index.html', '.nojekyll', 'assets', 'js'];

for (const entry of entriesToCopy) {
    const srcPath = path.join(__dirname, entry);
    const destPath = path.join(distDir, entry);
    if (!fs.existsSync(srcPath)) {
        throw new Error(`Missing required build entry: ${entry}`);
    }
    fs.cpSync(srcPath, destPath, { recursive: true });
}

console.log('Static site built successfully into ./dist for GitHub Pages');
