import { useCallback, useRef } from 'react';

/**
 * Хук для создания throttled callback функции
 * @param callback - функция для throttling
 * @param delay - задержка в миллисекундах
 * @returns throttled функция
 */
export const useThrottledCallback = <T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): T => {
  const lastCall = useRef(0);
  const lastCallTimer = useRef<number | undefined>(undefined);

  return useCallback(
    ((...args: unknown[]) => {
      const now = Date.now();
      
      if (now - lastCall.current >= delay) {
        callback(...args);
        lastCall.current = now;
      } else {
        // Отменяем предыдущий таймер
        if (lastCallTimer.current) {
          clearTimeout(lastCallTimer.current);
        }
        
        // Устанавливаем новый таймер
        lastCallTimer.current = window.setTimeout(() => {
          callback(...args);
          lastCall.current = Date.now();
        }, delay - (now - lastCall.current));
      }
    }) as T,
    [callback, delay]
  );
}; 