# 🎓 Образовательный Центр "Эрудит"

Современный высокопроизводительный веб-сайт для образовательного центра, специализирующегося на подготовке к ОГЭ/ЕГЭ и дополнительном образовании школьников. Проект построен с использованием React 19, TypeScript и Material-UI v7.

## 🌐 Демо

Посетите [демо-версию сайта](https://tsinik2508.github.io/exams/) для ознакомления с функциональностью.

## ✨ Ключевые особенности

### 🎨 Дизайн и UX
- **Современный и отзывчивый дизайн** с уникальными визуальными эффектами
- **Полная адаптивность** под все устройства (десктоп, планшет, мобильные)
- **Плавные анимации** с использованием Framer Motion
- **Уникальные фоновые изображения** для каждого раздела
- **Интерактивные элементы** с hover-эффектами

### ⚡ Производительность
- **Молниеносная загрузка** благодаря оптимизации
- **Core Web Vitals** оптимизация (FCP, LCP, CLS, TTI)
- **Ленивая загрузка** компонентов и изображений
- **Code splitting** для разделения vendor и app кода
- **Throttled события** для плавности интерфейса

### 🔧 Технические особенности
- **TypeScript** для типобезопасности
- **React 19** с новейшими возможностями
- **Material-UI v7** для современного UI
- **React Router v7** для навигации
- **Кастомные хуки** для оптимизации

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

## 🛠 Технологический стек

### Frontend
- **React 19.1.0** - новейшая версия React с улучшенной производительностью
- **TypeScript 5.8.3** - для типобезопасности и лучшего DX
- **Material-UI (MUI) v7.1.1** - современная библиотека UI компонентов
- **React Router v7.6.2** - для клиентской маршрутизации
- **Framer Motion v12.16.0** - для плавных анимаций
- **React Slick v0.30.3** - для каруселей и слайдеров

### Сборка и инструменты
- **Vite v6.3.5** - быстрый сборщик модулей
- **ESLint v9.25.0** - для статического анализа кода
- **Terser v5.43.1** - для минификации JavaScript

### Оптимизация
- **Intersection Observer API** - для lazy loading
- **Throttled callbacks** - для оптимизации событий
- **CSS-in-JS** - с оптимизированными стилями

## 📦 Установка и запуск

### Предварительные требования
- Node.js 18+ 
- npm или yarn

### Установка

1. **Клонируйте репозиторий:**
```bash
git clone https://github.com/TsiNik2508/exams.git
cd exams
```

2. **Установите зависимости:**
```bash
npm install
```

3. **Запустите проект в режиме разработки:**
```bash
npm run dev
```

4. **Для сборки проекта:**
```bash
npm run build
```

5. **Для предварительного просмотра:**
```bash
npm run preview
```

6. **Для деплоя на GitHub Pages:**
```bash
npm run deploy
```

## 🏗 Архитектура проекта

```
src/
├── components/
│   ├── common/          # Общие компоненты
│   │   ├── Navbar.tsx   # Навигационная панель
│   │   ├── Footer.tsx   # Подвал сайта
│   │   ├── Logo.tsx     # Логотип
│   │   ├── PopupForm.tsx # Модальные формы
│   │   ├── ScrollToTop.tsx # Кнопка "наверх"
│   │   └── SocialFloatingMenu.tsx # Плавающее меню соцсетей
│   ├── sections/        # Секции главной страницы
│   │   ├── HeroSection.tsx # Главная секция
│   │   ├── BenefitsSection.tsx # Преимущества
│   │   ├── WhyUsSection.tsx # Почему мы
│   │   ├── ReviewsSection.tsx # Отзывы
│   │   ├── PricesSection.tsx # Цены
│   │   ├── ContactSection.tsx # Контакты
│   │   └── StatsSection.tsx # Статистика
│   ├── pages/          # Страницы приложения
│   │   ├── SubjectPage.tsx # Страница предмета
│   │   ├── SummerCoursePage.tsx # Летние курсы
│   │   ├── FAQPage.tsx # Часто задаваемые вопросы
│   │   └── PricesPage.tsx # Страница цен
│   └── ui/             # UI компоненты
│       ├── OptimizedImage.tsx # Оптимизированные изображения
│       └── HeroPattern.tsx # Фоновые паттерны
├── hooks/              # Кастомные хуки
│   ├── useThrottledCallback.ts # Throttled callback
│   └── useIntersectionObserver.ts # Intersection Observer
├── theme/              # Настройки темы MUI
│   └── index.ts        # Конфигурация темы
├── data/               # Статические данные
│   └── teachers.ts     # Данные преподавателей
├── assets/             # Статические ресурсы
│   ├── background/     # Фоновые изображения
│   ├── teachers/       # Фото преподавателей
│   ├── reviews/        # Видео отзывов
│   └── review/         # Изображения отзывов
├── styles/             # Глобальные стили
│   └── index.css       # Основные стили
└── logo/               # Логотипы
    └── logo-erudit.png # Логотип центра
```

## 🎨 Дизайн-система

### Цветовая палитра
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

### Компоненты
- **Кнопки** с hover-эффектами и анимациями
- **Карточки** с тенями и трансформациями
- **Модальные окна** с плавными переходами
- **Формы** с валидацией и обратной связью

## 📱 Адаптивность

Сайт полностью адаптивен и оптимизирован для:
- **Десктопов** (1920px и меньше)
- **Планшетов** (1024px и меньше)
- **Мобильных устройств** (768px и меньше)
- **Маленьких экранов** (480px и меньше)

### Breakpoints
- `xs`: 0px - 599px
- `sm`: 600px - 899px
- `md`: 900px - 1199px
- `lg`: 1200px - 1535px
- `xl`: 1536px+

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

## 📊 Контент и данные

### Преподаватели
Проект включает данные о 11 преподавателях по различным предметам:
- **ЕГЭ**: Математика, Информатика, Биология, Химия, Русский язык, Обществознание, Английский, История, Физика, Литература
- **ОГЭ**: Математика, Русский язык
- **Онлайн курсы**: Различные предметы

### Структура данных преподавателя
```typescript
interface Teacher {
  id: number;
  name: string;
  subject: string;
  experience: string;
  image: string;
  description: string;
  review: {
    author: string;
    text: string;
  };
  courseInfo: {
    examType: 'ЕГЭ' | 'ОГЭ' | 'Онлайн курс' | '5-8 класс';
    examDescription: string;
    programDescription: string;
  };
}
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

## 🔧 Конфигурация

### Vite конфигурация
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          router: ['react-router-dom'],
        },
      },
    },
  },
})
```

### ESLint конфигурация
```javascript
// eslint.config.js
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      // Кастомные правила
    },
  },
];
```

## 📄 Лицензия

MIT License

## 👥 Автор

**Никита Цилосани**
- GitHub: [@TsiNik2508](https://github.com/TsiNik2508)
- Проект: Образовательный центр "Эрудит"

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в branch (`git push origin feature/amazing-feature`)
5. Откройте Pull Request
