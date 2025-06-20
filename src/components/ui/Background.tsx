import { Box } from '@mui/material';

export const Background = () => {
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
      {/* Только толстая статичная линия */}
      <svg
        width="100vh"
        height="100vh"
        viewBox="0 0 1440 900"
        fill="none"
        style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}
        aria-hidden
      >
        <path d="M-100 400 Q 400 200 900 600 T 1540 500" stroke="#dbeafe" strokeWidth="50" fill="none" opacity="0.7" />
      </svg>
    </Box>
  );
}; 