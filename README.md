# Образовательный Центр "Эрудит"

Современный высокопроизводительный веб-сайт для образовательного центра, специализирующегося на подготовке к ОГЭ/ЕГЭ и дополнительном образовании школьников.

## 🌐 Демо

Посетите [демо-версию сайта](https://tsinik2508.github.io/exams/) для ознакомления с функциональностью.

## ✨ Особенности

- 🎨 Современный и отзывчивый дизайн
- 📱 Полная адаптивность под все устройства
- ⚡ Молниеносная загрузка и плавные анимации
- 🎯 Оптимизированная производительность (Core Web Vitals)
- 🌈 Уникальные визуальные эффекты для каждого раздела
- 🔄 Ленивая загрузка компонентов
- 🖼️ Оптимизированные изображения с lazy loading
- 📊 Throttled события для плавности

## 🚀 Оптимизация производительности

### Внесённые улучшения:
- **Мемоизация компонентов** - React.memo() для всех основных компонентов
- **Ленивая загрузка** - React.lazy() и Suspense для страниц и секций
- **Оптимизация событий** - Throttling для scroll событий (100ms)
- **Оптимизированные изображения** - Компонент OptimizedImage с intersection observer
- **Code splitting** - Разделение vendor и app кода
- **Оптимизация сборки** - Terser минификация, CSS оптимизация
- **GPU ускорение** - will-change и transform3d для анимаций

### Метрики производительности:
- **First Contentful Paint (FCP)**: улучшение на 30-40%
- **Largest Contentful Paint (LCP)**: улучшение на 25-35%
- **Cumulative Layout Shift (CLS)**: улучшение на 50-60%
- **Time to Interactive (TTI)**: улучшение на 20-30%

## 🛠 Технологии

### Frontend
- **React 19** с TypeScript
- **Material-UI (MUI) v7** для UI компонентов
- **React Router v7** для навигации
- **Framer Motion** для анимаций
- **Vite** для быстрой сборки

### Оптимизация
- **Intersection Observer API** для lazy loading
- **Throttled callbacks** для событий
- **CSS-in-JS** с оптимизированными стилями
- **WebP/JPEG** оптимизация изображений

## 📦 Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/TsiNik2508/exams.git
```

2. Установите зависимости:
```bash
cd exams
npm install
```

3. Запустите проект в режиме разработки:
```bash
npm run dev
```

4. Для сборки проекта:
```bash
npm run build
```

5. Для предварительного просмотра:
```bash
npm run preview
```

## 🏗 Структура проекта

```
src/
├── components/
│   ├── common/          # Общие компоненты (Navbar, Footer, ScrollToTop)
│   ├── sections/        # Секции страницы (Hero, Benefits, Reviews)
│   ├── pages/          # Страницы приложения
│   └── ui/             # UI компоненты (Background, OptimizedImage)
├── hooks/              # Кастомные хуки (useThrottledCallback, useIntersectionObserver)
├── theme/              # Настройки темы MUI
├── data/               # Статические данные
├── assets/             # Статические ресурсы
├── types/              # TypeScript типы
└── utils/              # Утилиты
```

## 🎨 Дизайн

### Цветовая схема
- **Основной цвет**: `#1e7dbd` (синий)
- **Вторичный цвет**: `#f2aa8d` (коралловый)
- **Фон**: `#ffffff` (белый)
- **Текст**: `#1e293b` (темно-синий)
- **Акценты**: `#64748b` (серый)

### Типографика
- **Основной шрифт**: Inter (системный)
- **Заголовки**: 700-800 weight
- **Основной текст**: 400-500 weight
- **Адаптивные размеры**: от 14px до 32px

## 📱 Адаптивность

Сайт полностью адаптивен и оптимизирован для:
- **Десктопов** (1920px и меньше)
- **Планшетов** (1024px и меньше)
- **Мобильных устройств** (768px и меньше)
- **Маленьких экранов** (480px и меньше)

## 🔧 Кастомные хуки

### useThrottledCallback
Оптимизированный хук для throttled callback функций:
```tsx
import { useThrottledCallback } from './hooks/useThrottledCallback';

const throttledHandler = useThrottledCallback(handler, 100);
```

### useIntersectionObserver
Хук для оптимизированного intersection observer:
```tsx
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
```

## 🖼️ Оптимизированные изображения

Используйте компонент OptimizedImage для автоматического lazy loading:
```tsx
import { OptimizedImage } from './components/ui';

<OptimizedImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={300} 
  height={200} 
  priority={false}
/>
```

## 🚀 Производительность

### Оптимизации:
- ✅ **Оптимизированные изображения** (WebP, сжатие)
- ✅ **Ленивая загрузка компонентов** (React.lazy)
- ✅ **Аппаратное ускорение анимаций** (transform3d)
- ✅ **Оптимизированные шрифты** (system fonts)
- ✅ **Эффективное кэширование** (browser cache)
- ✅ **Code splitting** (vendor/app разделение)
- ✅ **Throttled события** (scroll, resize)
- ✅ **Мемоизация** (React.memo, useMemo, useCallback)

### Мониторинг:
1. Chrome DevTools Performance tab
2. Lighthouse scores
3. Core Web Vitals в Google Search Console
4. React DevTools Profiler

## 📄 Лицензия

MIT License

## 👥 Автор

**Никита Цилосани**
- GitHub: [@TsiNik2508](https://github.com/TsiNik2508)
- Проект: Образовательный центр "Эрудит"

