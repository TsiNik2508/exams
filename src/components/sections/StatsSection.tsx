import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 7, label: 'лет успешной работы', suffix: '' },
  { value: 80, label: '2 из 3 учеников сдали ЕГЭ на высокий балл', suffix: '+' },
  { value: 8, label: 'группы строго учеников', prefix: 'до ' },
  { value: 700, label: 'честных отзывов', suffix: '+' },
];

function useCountUp(to: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const step = Math.ceil(to / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [to, duration, isVisible]);

  return { count, elementRef };
}

const StatItem = ({ value, label, prefix, suffix }: { value: number; label: string; prefix?: string; suffix?: string }) => {
  const { count, elementRef } = useCountUp(value);
  
  return (
    <Box ref={elementRef}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: '#1e7dbd',
          mb: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0.5,
        }}
      >
        {prefix || ''}{count}{suffix || ''}
      </Typography>
      <Typography
        sx={{
          color: '#64748b',
          fontSize: '1.1rem',
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      {/* Паттерн из кругов */}
      <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', left: 0, top: 0 }}>
          <circle cx="180" cy="60" r="48" fill="#1e7dbd" fillOpacity="0.08">
            <animate attributeName="r" values="48;52;48" dur="4s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.08;0.12;0.08" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="1000" cy="100" r="60" fill="#f2aa8d" fillOpacity="0.09">
            <animate attributeName="r" values="60;64;60" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.09;0.13;0.09" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="260" r="36" fill="#f2aa8d" fillOpacity="0.08">
            <animate attributeName="r" values="36;40;36" dur="4.5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.08;0.12;0.08" dur="4.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="900" cy="220" r="42" fill="#1e7dbd" fillOpacity="0.07">
            <animate attributeName="r" values="42;46;42" dur="5.5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.07;0.11;0.07" dur="5.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="600" cy="80" r="30" fill="#1e7dbd" fillOpacity="0.06">
            <animate attributeName="r" values="30;34;30" dur="4s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.06;0.10;0.06" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="700" cy="280" r="54" fill="#f2aa8d" fillOpacity="0.07">
            <animate attributeName="r" values="54;58;54" dur="5s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.07;0.11;0.07" dur="5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </Box>
      <Container maxWidth="lg">
        <Box ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  textAlign: 'center',
                  flex: '1 1 200px',
                  minWidth: 200,
                }}
              >
                <StatItem {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection; 