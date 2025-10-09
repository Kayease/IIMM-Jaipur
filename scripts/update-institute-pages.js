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
  {
    file: 'EC20232025.tsx',
    title: 'EC 2023-2025',
    subtitle: 'Executive Committee 2023-2025'
  },
  {
    file: 'EC20252027.tsx',
    title: 'EC 2025-2027',
    subtitle: 'Executive Committee 2025-2027'
  },
  {
    file: 'Ethics.tsx',
    title: 'Code of Ethics',
    subtitle: 'Professional Standards and Ethical Guidelines'
  },
  {
    file: 'FormerChairmen.tsx',
    title: 'Former Chairmen',
    subtitle: 'Honoring Our Past Leaders'
  },
  {
    file: 'FormerPresidents.tsx',
    title: 'Former Presidents',
    subtitle: 'Celebrating Our Legacy'
  }
];

// Function to update a single page
function updatePage(page) {
  const filePath = path.join(pagesDir, page.file);
  const randomHeroImage = heroImages[Math.floor(Math.random() * heroImages.length)];
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add imports if they don't exist
    if (!content.includes('import InstituteHero')) {
      content = content.replace(
        /import \{.*\} from "react";/,
        `import { ReactNode } from "react";\nimport InstituteHero from "@/components/InstituteHero";\nimport heroImage from "${randomHeroImage}";`
      );
    }
    
    // Replace the hero section
    content = content.replace(
      /<section className="bg-primary-dark text-primary-foreground py-16 md:py-24">\s*<div className="container mx-auto px-4 text-center">\s*<h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">\s*([^<]*)\s*<\/h1>\s*<p className="text-lg text-primary-foreground\/90 max-w-3xl mx-auto">\s*([^<]*)\s*<\/p>\s*<\/div>\s*<\/section>/,
      `<InstituteHero
        title="${page.title}"
        subtitle="${page.subtitle}"
        image={heroImage}
      />`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${page.file}`);
  } catch (err) {
    console.error(`❌ Error updating ${page.file}:`, err.message);
  }
}

// Update all pages
console.log('Updating institute pages with new hero sections...');
pages.forEach(updatePage);
console.log('All pages updated successfully!');
