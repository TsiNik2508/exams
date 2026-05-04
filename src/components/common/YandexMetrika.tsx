import { useEffect } from 'react';

const YandexMetrika = () => {
  useEffect(() => {
    // Проверяем, что счетчик еще не добавлен
    if (typeof window.ym === 'function') {
      return;
    }

    // Создаем скрипт для загрузки Яндекс.Метрики
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104015630', 'ym');

      ym(104015630, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
      
      // Отправляем первое событие после инициализации
      setTimeout(function() {
        if (typeof window.ym === 'function') {
          window.ym(104015630, 'hit', window.location.href);
        }
      }, 1000);
    `;
    
    document.head.appendChild(script);

    // Добавляем глобальную функцию для проверки готовности счетчика
    (window as any).checkYandexMetrika = () => {
      if (typeof window.ym === 'function') {
        console.log('✅ Яндекс.Метрика готова к работе');
        return true;
      } else {
        console.log('⏳ Яндекс.Метрика еще загружается...');
        return false;
      }
    };

    // Добавляем noscript fallback в body
    const noscript = document.createElement('noscript');
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = 'https://mc.yandex.ru/watch/104015630';
    img.style.position = 'absolute';
    img.style.left = '-9999px';
    img.alt = '';
    div.appendChild(img);
    noscript.appendChild(div);
    document.body.appendChild(noscript);

    // Очистка при размонтировании
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (noscript.parentNode) {
        noscript.parentNode.removeChild(noscript);
      }
    };
  }, []);

  return null; // Компонент не рендерит ничего
};

export default YandexMetrika;
