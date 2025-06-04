# Эрудит — образовательный центр

Современный сайт образовательного центра на React + Material-UI.

## Фичи
- Современный адаптивный дизайн
- Фирменные цвета (#1e7dbd, #f2aa8d)
- SVG-волны, паттерны, анимации
- Секции: Hero, Stats, Benefits, WhyUs, Formats, Teachers, Reviews, Prices, FAQ, TrialForm, Contact
- Кастомные карточки, иконки, модальные окна

## Быстрый старт
```bash
npm install
npm start
```

## Сборка
```bash
npm run build
```

## Деплой на GitHub Pages
1. В `package.json` добавь поле:
   ```json
   "homepage": "https://<ТВОЙ_GITHUB_USERNAME>.github.io/<РЕПОЗИТОРИЙ>"
   ```
2. Установи gh-pages:
   ```bash
   npm install --save gh-pages
   ```
3. Добавь в `package.json`:
   ```json
   "scripts": {
     ...
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
4. Запусти деплой:
   ```bash
   npm run deploy
   ```
5. В настройках GitHub Pages выбери ветку `gh-pages` (или автоматом).

## Структура
- `src/components` — все секции и UI
- `src/logo` — логотип
- `public` — статика

---

**Автор:** [Твой ник](https://github.com/ТВОЙ_GITHUB_USERNAME)
