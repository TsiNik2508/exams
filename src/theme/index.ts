import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1e7dbd',
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#f2aa8d',
      light: '#f8c3b0',
      dark: '#e68b6d',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
            transform: 'translateX(-100%)',
            transition: 'transform 0.6s ease',
          },
          '&:hover::before': {
            transform: 'translateX(100%)',
          },
        },
        contained: {
          backgroundColor: '#1e7dbd',
          color: '#fff',
          boxShadow: 'none',
          transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s',
          '&:hover': {
            backgroundColor: '#f2aa8d',
            color: '#fff',
            boxShadow: '0 4px 12px 0 rgba(242,170,141,0.18)',
            transform: 'scale(1.03)',
          },
        },
        outlined: {
          color: '#1e7dbd',
          borderColor: '#1e7dbd',
          backgroundColor: '#fff',
          transition: 'background 0.2s, color 0.2s, border-color 0.2s',
          '&:hover': {
            backgroundColor: '#f2aa8d',
            color: '#fff',
            borderColor: '#f2aa8d',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
  },
}); 