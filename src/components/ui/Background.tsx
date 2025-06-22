import { Box } from '@mui/material';
import React from 'react';

export const Background = React.memo(() => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        background: 'linear-gradient(135deg, #e8f4ff 0%, #f0f7ff 50%, #f8fafc 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Упрощенная статичная линия */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        fill="none"
        style={{ 
          position: 'absolute', 
          left: 0, 
          top: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: 0, 
          pointerEvents: 'none',
          willChange: 'auto' // Оптимизация для GPU
        }}
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path 
          d="M-100 400 Q 400 200 900 600 T 1540 500" 
          stroke="#dbeafe" 
          strokeWidth="50" 
          fill="none" 
          opacity="0.7"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </Box>
  );
}); 