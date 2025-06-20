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
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1.5,
              bgcolor: '#fff',
              borderRadius: 4,
              boxShadow: '0 2px 10px 0 rgba(30,125,189,0.07)',
              px: 2.5,
              py: 1.5,
              minHeight: 90,
              borderLeft: `8px solid ${i % 2 === 0 ? '#1e7dbd' : '#f2aa8d'}`,
              position: 'relative',
              overflow: 'hidden',
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