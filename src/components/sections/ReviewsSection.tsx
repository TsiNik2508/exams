import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// Импортируем видео файлы
import rusVideo from '../../assets/reviews/rus.mp4';
import mathVideo from '../../assets/reviews/math.mp4';
import ogeMathVideo from '../../assets/reviews/oge-math.mp4';

const videoReviews = [
  {
    id: 1,
    title: 'ЕГЭ по русскому',
    video: rusVideo,
  },
  {
    id: 2,
    title: 'ЕГЭ по математике',
    video: mathVideo,
  },
  {
    id: 3,
    title: 'ОГЭ по математике',
    video: ogeMathVideo,
  },
];

const ReviewsSection = () => {
  return (
    <Box sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{ mb: 6, color: '#1e7dbd', fontWeight: 700 }}
          >
            Видео отзывы наших учеников
          </Typography>
        </motion.div>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 4 }}>
          {videoReviews.map((videoReview, index) => (
            <motion.div
              key={videoReview.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.3s ease-in-out',
                  background: '#fff',
                  boxShadow: '0 4px 24px rgba(30,125,189,0.1)',
                  borderRadius: 3,
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(30,125,189,0.2)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: index % 2 === 0 ? '#1e7dbd' : '#f2aa8d',
                    zIndex: 2,
                  }}
                />
                
                {/* Видео контейнер */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 300, md: 400 },
                    overflow: 'hidden',
                    bgcolor: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <video
                    ref={(el) => {
                      if (el) {
                        el.addEventListener('play', () => {
                          const overlay = el.parentElement?.querySelector('.video-overlay') as HTMLElement;
                          if (overlay) {
                            overlay.style.opacity = '0';
                          }
                        });
                        el.addEventListener('pause', () => {
                          const overlay = el.parentElement?.querySelector('.video-overlay') as HTMLElement;
                          if (overlay) {
                            overlay.style.opacity = '1';
                          }
                        });
                        el.addEventListener('ended', () => {
                          const overlay = el.parentElement?.querySelector('.video-overlay') as HTMLElement;
                          if (overlay) {
                            overlay.style.opacity = '1';
                          }
                        });
                      }
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                    playsInline
                    controlsList="nodownload nofullscreen noremoteplayback"
                    disablePictureInPicture
                    disableRemotePlayback
                    preload="metadata"
                  >
                    <source src={videoReview.video} type="video/mp4" />
                  </video>
                  
                  {/* Overlay с иконкой play/pause */}
                  <Box
                    className="video-overlay"
                    onClick={(e) => {
                      e.stopPropagation();
                      const video = e.currentTarget.parentElement?.querySelector('video') as HTMLVideoElement;
                      if (video) {
                        if (video.paused) {
                          video.play();
                        } else {
                          video.pause();
                        }
                      }
                    }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'rgba(0,0,0,0.3)',
                      opacity: 1,
                      transition: 'opacity 0.3s ease',
                      cursor: 'pointer',
                      pointerEvents: 'auto',
                      zIndex: 10,
                      '&:hover': {
                        opacity: 0.8,
                        bgcolor: 'rgba(0,0,0,0.4)',
                      },
                    }}
                  >
                    <PlayCircleOutlineIcon
                      sx={{
                        fontSize: 80,
                        color: '#fff',
                        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
                      }}
                    />
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: '#1e7dbd',
                      textAlign: 'center',
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    {videoReview.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ReviewsSection; 