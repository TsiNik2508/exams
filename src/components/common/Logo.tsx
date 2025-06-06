import React from 'react';
import { Box } from '@mui/material';
import logo from '../../logo/logo-erudit.png';

const styles = {
  logo: {
    height: 44,
    width: 'auto',
  },
};

const Logo: React.FC = () => (
  <Box
    component="img"
    src={logo}
    alt="Эрудит"
    sx={styles.logo}
    loading="lazy"
  />
);

export default Logo; 