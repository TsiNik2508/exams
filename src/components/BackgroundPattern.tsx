import { Box } from '@mui/material';

interface BackgroundPatternProps {
  color?: string;
  opacity?: number;
  size?: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}

const BackgroundPattern = ({
  color = '#1e7dbd',
  opacity = 0.05,
  size = 300,
  top = 'auto',
  left = 'auto',
  right = 'auto',
  bottom = 'auto',
}: BackgroundPatternProps) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        opacity,
        top,
        left,
        right,
        bottom,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default BackgroundPattern; 