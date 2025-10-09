import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, '../src/pages/institute');
const heroImages = [
  '@/assets/Herosection/home.png',
  '@/assets/Herosection/home2.png',
  '@/assets/Herosection/home3.png'
];

const pages = [
  'EC20232025.tsx',
  'EC20252027.tsx',
  'FormerChairmen.tsx',
  'FormerPresidents.tsx'
];

// Function to fix imports in a single page
function fixImports(page) {
  const filePath = path.join(pagesDir, page);
  const randomHeroImage = heroImages[Math.floor(Math.random() * heroImages.length)];
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if imports are already there
    if (content.includes('import InstituteHero')) {
      console.log(`✅ ${page} already has the correct imports`);
      return;
    }
    
    // Add imports at the top of the file
    const importStatement = `import InstituteHero from "@/components/InstituteHero";\nimport heroImage from "${randomHeroImage}";\n\n`;
    
    // Insert imports after any existing imports or at the start of the file
    if (content.startsWith('import')) {
      // Find the end of the import section
      const importEndIndex = content.indexOf('\n\n');
      if (importEndIndex !== -1) {
        content = content.substring(0, importEndIndex) + '\n' + importStatement + content.substring(importEndIndex);
      } else {
        // If there's no double newline, add the imports at the start
        content = importStatement + content;
      }
    } else {
      // No imports at all, add at the start
      content = importStatement + content;
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated imports in ${page}`);
  } catch (err) {
    console.error(`❌ Error updating ${page}:`, err.message);
  }
}

// Fix imports in all pages
console.log('Fixing imports in institute pages...');
pages.forEach(fixImports);
console.log('All pages updated successfully!');
