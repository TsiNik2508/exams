import { Box, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VerifiedIcon from '@mui/icons-material/Verified';

const reasons = [
  { title: 'Отбор преподавателей', desc: '3 этапа: опыт, знание предмета, навыки', icon: <EmojiEventsIcon sx={{ color: '#1e7dbd', fontSize: 40 }} />, badge: 'ТОП', badgeColor: '#1e7dbd' },
  { title: 'Внимание каждому', desc: 'Мини-группы до 8 человек', icon: <GroupsIcon sx={{ color: '#f2aa8d', fontSize: 40 }} />, badge: '', badgeColor: '' },
  { title: 'Только живые уроки', desc: 'Очно и онлайн, без вебинаров', icon: <LiveTvIcon sx={{ color: '#1e7dbd', fontSize: 40 }} />, badge: 'NEW', badgeColor: '#1e7dbd' },
  { title: 'Экспертная проверка', desc: 'Работы проверяют преподаватели-эксперты', icon: <VerifiedIcon sx={{ color: '#f2aa8d', fontSize: 40 }} />, badge: '', badgeColor: '' },
];

const WhyUsSection = () => (
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
    <Typography variant="h4" textAlign="center" sx={{ mb: 6, fontWeight: 700, color: '#1e7dbd', position: 'relative', zIndex: 2 }}>
      Почему выбирают именно нас
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 800, mx: 'auto', position: 'relative', zIndex: 1 }}>
      {reasons.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              bgcolor: '#fff',
              borderRadius: 4,
              boxShadow: '0 2px 16px 0 rgba(30,125,189,0.07)',
              p: { xs: 2, md: 3 },
              minHeight: 96,
              borderLeft: `8px solid ${i % 2 === 0 ? '#1e7dbd' : '#f2aa8d'}`,
              position: 'relative',
              overflow: 'hidden',
              gap: 3,
              mb: 0.5,
            }}
          >
            <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, bgcolor: '#f5f9ff', borderRadius: '50%' }}>
              {r.icon}
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5, position: 'relative' }}>
                <Typography variant="h5" sx={{ fontWeight: 700, color: i % 2 === 0 ? '#1e7dbd' : '#f2aa8d', mr: 1 }}>
                  {r.title}
                </Typography>
                {r.badge && (
                  <Chip
                    label={r.badge}
                    size="small"
                    sx={{
                      bgcolor: r.badgeColor,
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      position: 'relative',
                      top: -2,
                    }}
                  />
                )}
              </Box>
              <Typography sx={{ color: '#222831', fontSize: { xs: 16, md: 18 } }}>{r.desc}</Typography>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  </Box>
);

export default WhyUsSection; 