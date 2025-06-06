import React from 'react';
import { Box } from '@mui/material';

export const HeroPattern: React.FC = () => (
  <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
    <svg width="100%" height="100%" viewBox="0 0 1440 540" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
      <circle cx="200" cy="120" r="72" fill="#f2aa8d" fillOpacity="0.13">
        <animate attributeName="r" values="72;76;72" dur="4s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.13;0.17;0.13" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="1240" cy="80" r="48" fill="#1e7dbd" fillOpacity="0.10">
        <animate attributeName="r" values="48;52;48" dur="5s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.10;0.14;0.10" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="420" r="54" fill="#1e7dbd" fillOpacity="0.10">
        <animate attributeName="r" values="54;58;54" dur="4.5s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.10;0.14;0.10" dur="4.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="1100" cy="400" r="90" fill="#f2aa8d" fillOpacity="0.10">
        <animate attributeName="r" values="90;94;90" dur="5.5s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.10;0.14;0.10" dur="5.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="720" cy="100" r="33" fill="#1e7dbd" fillOpacity="0.10">
        <animate attributeName="r" values="33;37;33" dur="4s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.10;0.14;0.10" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="600" cy="300" r="66" fill="#f2aa8d" fillOpacity="0.08">
        <animate attributeName="r" values="66;70;66" dur="5s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.08;0.12;0.08" dur="5s" repeatCount="indefinite" />
      </circle>
    </svg>
  </Box>
); 