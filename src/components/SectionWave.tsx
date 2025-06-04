import React from 'react';

interface SectionWaveProps {
  color?: string;
  direction?: 'up' | 'down';
  style?: React.CSSProperties;
}

const SectionWave: React.FC<SectionWaveProps> = ({
  color = '#fff',
  direction = 'down',
  style = {},
}) => {
  return (
    <div style={{
      width: '100vw',
      minWidth: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      position: 'relative',
      ...style,
    }}>
      <svg
        viewBox="0 0 1440 120"
        width="100%"
        height="60"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        {direction === 'down' ? (
          <path
            d="M0,0 C360,120 1080,0 1440,120 L1440,0 L0,0 Z"
            fill={color}
          />
        ) : (
          <path
            d="M0,120 C360,0 1080,120 1440,0 L1440,120 L0,120 Z"
            fill={color}
          />
        )}
      </svg>
    </div>
  );
};

export default SectionWave; 