const fs = require('fs');
const path = require('path');

// Функция для копирования файлов
function copyFile(source, destination) {
  const destDir = path.dirname(destination);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(source, destination);
  console.log(`✓ Скопирован: ${source} → ${destination}`);
}

// Функция для копирования директории
function copyDirectory(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const files = fs.readdirSync(source);
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    
    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      copyFile(sourcePath, destPath);
    }
  });
}

// Основная функция
function prepareForRegru() {
  console.log('🚀 Подготовка файлов для reg.ru...');
  
  const distPath = path.join(__dirname, '..', 'dist');
  const regruPath = path.join(__dirname, '..', 'regru-deploy');
  
  // Очищаем папку regru-deploy если она существует
  if (fs.existsSync(regruPath)) {
    fs.rmSync(regruPath, { recursive: true, force: true });
  }
  
  // Создаем папку regru-deploy
  fs.mkdirSync(regruPath, { recursive: true });
  
  // Копируем все файлы из dist
  copyDirectory(distPath, regruPath);
  
  // Копируем .htaccess в корень
  const htaccessSource = path.join(__dirname, '..', '.htaccess');
  const htaccessDest = path.join(regruPath, '.htaccess');
  copyFile(htaccessSource, htaccessDest);
  
  // Создаем README с инструкциями
  const readmeContent = `# Файлы для загрузки на reg.ru

## Инструкция по загрузке:

1. Загрузите ВСЕ файлы из этой папки в корневую директорию вашего домена на reg.ru
2. Убедитесь, что файл .htaccess загружен в корень сайта
3. Проверьте, что все файлы загружены корректно

## Структура файлов:
- index.html - главная страница
- assets/ - статические файлы (CSS, JS, изображения)
- .htaccess - конфигурация сервера

## Проверка после загрузки:
1. Откройте ваш сайт в браузере
2. Проверьте все страницы и функциональность
3. Убедитесь, что изображения и видео загружаются корректно
4. Проверьте работу форм и интерактивных элементов

## Если что-то не работает:
1. Проверьте, что .htaccess загружен в корень
2. Убедитесь, что все файлы загружены
3. Проверьте права доступа к файлам (обычно 644 для файлов, 755 для папок)
4. Обратитесь в поддержку reg.ru если проблемы с сервером

Удачи! 🚀
`;
  
  const readmePath = path.join(regruPath, 'README-REG.RU.txt');
  fs.writeFileSync(readmePath, readmeContent, 'utf8');
  
  console.log('\n✅ Файлы готовы для загрузки на reg.ru!');
  console.log(`📁 Папка с файлами: ${regruPath}`);
  console.log('📋 Загрузите ВСЕ файлы из этой папки в корень вашего домена на reg.ru');
  console.log('🔧 Не забудьте про файл .htaccess - он должен быть в корне сайта');
}

// Запускаем скрипт
prepareForRegru(); 