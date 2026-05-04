import { useLocation } from 'react-router-dom';
import SEO from './SEO';
import { getSEOByPath } from '../../config/seo';

const SEOHandler: React.FC = () => {
  const location = useLocation();
  
  const seoConfig = getSEOByPath(location.pathname);

  // Если нет конфигурации, используем дефолтные значения
  if (!seoConfig) {
    return (
      <SEO
        title="Эрудит - Образовательный центр | Подготовка к ОГЭ/ЕГЭ"
        description="Образовательный центр Эрудит - профессиональная подготовка к ОГЭ и ЕГЭ в Санкт-Петербурге."
        keywords="подготовка к егэ, подготовка к огэ, образовательный центр спб"
        canonical="https://erudite-ege.ru"
      />
    );
  }

  return (
    <SEO
      title={seoConfig.title}
      description={seoConfig.description}
      keywords={seoConfig.keywords}
      canonical={seoConfig.canonical}
      ogTitle={seoConfig.ogTitle}
      ogDescription={seoConfig.ogDescription}
      ogImage={seoConfig.ogImage}
      ogUrl={seoConfig.canonical}
      noindex={seoConfig.noindex}
      author={seoConfig.author || 'Образовательный центр Эрудит'}
      publisher={seoConfig.publisher || 'Образовательный центр Эрудит'}
    />
  );
};

export default SEOHandler;


