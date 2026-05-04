import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Список страниц для проверки
const pagesToCheck = [
  { path: '/', file: 'index.html' },
  { path: '/prices', file: 'prices.html' },
  { path: '/faq', file: 'faq.html' },
  { path: '/ege/math', file: 'ege/math.html' },
  { path: '/oge/russian', file: 'oge/russian.html' },
];

function checkSEO() {
  const distPath = join(__dirname, '..', 'dist');
  
  console.log('🔍 Проверка SEO мета-тегов...\n');
  
  let allGood = true;
  
  pagesToCheck.forEach(page => {
    const filePath = join(distPath, page.file);
    
    if (!existsSync(filePath)) {
      console.log(`❌ ${page.file} - файл не найден`);
      console.log(`   Запустите: npm run build:prerender\n`);
      allGood = false;
      return;
    }
    
    const html = readFileSync(filePath, 'utf-8');
    
    // Проверяем наличие мета-тегов
    const hasTitle = /<title>.*?<\/title>/.test(html);
    const hasDescription = /<meta\s+name=["']description["'].*?>/.test(html);
    const hasKeywords = /<meta\s+name=["']keywords["'].*?>/.test(html);
    const hasCanonical = /<link\s+rel=["']canonical["'].*?>/.test(html);
    const hasRobots = /<meta\s+name=["']robots["'].*?>/.test(html);
    const hasOgTitle = /<meta\s+property=["']og:title["'].*?>/.test(html);
    
    // Извлекаем значения
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/);
    const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/);
    
    const title = titleMatch ? titleMatch[1] : 'НЕ НАЙДЕН';
    const description = descMatch ? descMatch[1] : 'НЕ НАЙДЕН';
    const canonical = canonicalMatch ? canonicalMatch[1] : 'НЕ НАЙДЕН';
    
    console.log(`📄 ${page.file} (${page.path})`);
    console.log(`   Title: ${title.substring(0, 60)}${title.length > 60 ? '...' : ''}`);
    console.log(`   Description: ${description.substring(0, 60)}${description.length > 60 ? '...' : ''}`);
    console.log(`   Canonical: ${canonical}`);
    
    // Проверка наличия всех тегов
    const checks = [
      { name: 'Title', ok: hasTitle },
      { name: 'Description', ok: hasDescription },
      { name: 'Keywords', ok: hasKeywords },
      { name: 'Canonical', ok: hasCanonical },
      { name: 'Robots', ok: hasRobots },
      { name: 'OG Title', ok: hasOgTitle },
    ];
    
    const missing = checks.filter(c => !c.ok).map(c => c.name);
    
    if (missing.length > 0) {
      console.log(`   ⚠️  Отсутствуют: ${missing.join(', ')}`);
      allGood = false;
    } else {
      console.log(`   ✅ Все мета-теги на месте`);
    }
    
    // Проверка уникальности title
    if (page.path !== '/' && title.includes('Эрудит - Образовательный центр | Подготовка к ОГЭ/ЕГЭ')) {
      console.log(`   ⚠️  Title не уникален (используется дефолтный)`);
      allGood = false;
    }
    
    console.log('');
  });
  
  if (allGood) {
    console.log('✅ Все проверки пройдены! SEO мета-теги настроены правильно.');
  } else {
    console.log('❌ Обнаружены проблемы. Исправьте их перед деплоем.');
  }
  
  console.log('\n📋 Дополнительные способы проверки:');
  console.log('1. Откройте файлы в браузере и проверьте через "Просмотр исходного кода"');
  console.log('2. Используйте инструменты:');
  console.log('   - https://search.google.com/test/rich-results');
  console.log('   - https://validator.w3.org/');
  console.log('   - https://www.opengraph.xyz/');
  console.log('3. Проверьте в Google Search Console и Яндекс.Вебмастер');
}

checkSEO();

