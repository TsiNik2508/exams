import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  noindex?: boolean;
  author?: string;
  publisher?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  noindex = false,
  author,
  publisher,
}) => {
  useEffect(() => {
    // Устанавливаем title
    document.title = title;

    // Устанавливаем или обновляем мета-теги
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Основные мета-теги
    setMetaTag('description', description);
    
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Robots
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow');
    }

    // Canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // Open Graph мета-теги
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:type', 'website', true);
    
    if (ogUrl) {
      setMetaTag('og:url', ogUrl, true);
    }
    
    if (ogImage) {
      setMetaTag('og:image', ogImage, true);
    }

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    if (ogImage) {
      setMetaTag('twitter:image', ogImage);
    }

    // Author и Publisher (опционально)
    if (author) {
      setMetaTag('author', author);
    }
    if (publisher) {
      setMetaTag('publisher', publisher);
    }

    // Язык уже установлен в index.html
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogUrl, noindex, author, publisher]);

  return null;
};

export default SEO;

