import React from 'react';
import { Dialog, DialogTitle, DialogContent, Box, IconButton, Typography, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

interface SubjectSelectionModalProps {
  open: boolean;
  onClose: () => void;
  courseType: string; // 'Подготовка к ЕГЭ 2025/2026', 'Подготовка к ОГЭ 2025/2026', '5–8 класс'
}

const subjects = [
  { name: 'Математика', slug: 'math' },
  { name: 'Русский язык', slug: 'russian' },
  { name: 'Физика', slug: 'physics' },
  { name: 'Информатика', slug: 'informatics' },
  { name: 'Английский язык', slug: 'english' },
  { name: 'Биология', slug: 'biology' },
  { name: 'Химия', slug: 'chemistry' },
  { name: 'История', slug: 'history' },
  { name: 'Обществознание', slug: 'social' },
  { name: 'Литература', slug: 'literature' },
];

const SubjectSelectionModal: React.FC<SubjectSelectionModalProps> = ({ open, onClose, courseType }) => {
  const navigate = useNavigate();

  // Определяем тип экзамена на основе названия курса
  const getExamType = (): string => {
    if (courseType.includes('ЕГЭ')) return 'ege';
    if (courseType.includes('ОГЭ')) return 'oge';
    if (courseType.includes('5–8') || courseType.includes('5-8')) return 'middle';
    return 'ege'; // по умолчанию
  };

  const handleSubjectClick = (subjectSlug: string) => {
    const examType = getExamType();
    navigate(`/${examType}/${subjectSlug}`);
    onClose();
  };

  const examType = getExamType();

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '24px',
          boxShadow: '0 8px 25px 0 rgba(30,125,189,0.15), 0 4px 12px 0 rgba(0,0,0,0.1)',
          border: '2px solid rgba(30,125,189,0.1)',
          background: 'rgba(255,255,255,0.98)',
          backdropFilter: 'blur(10px)',
        }
      }}
    >
      <DialogTitle 
        sx={{ 
          fontWeight: 700, 
          color: examType === 'oge' || examType === 'middle' ? '#f2aa8d' : '#1e7dbd', 
          pr: 5, 
          pt: 4,
          pb: 2,
          fontSize: { xs: '1.5rem', md: '1.8rem' },
          textAlign: 'center',
        }}
      >
        Выберите предмет
        <IconButton 
          aria-label="close" 
          onClick={onClose} 
          sx={{ 
            position: 'absolute', 
            right: 8, 
            top: 8, 
            color: '#aaa',
            '&:hover': {
              color: examType === 'oge' || examType === 'middle' ? '#f2aa8d' : '#1e7dbd',
              backgroundColor: examType === 'oge' || examType === 'middle' 
                ? 'rgba(242,170,141,0.1)' 
                : 'rgba(30,125,189,0.1)',
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pb: 4 }}>
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            color: '#64748b', 
            mb: 4,
            fontSize: { xs: '0.95rem', md: '1.1rem' },
          }}
        >
          {courseType}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 2,
          }}
        >
          {subjects.map((subject) => (
            <Button
              key={subject.slug}
              onClick={() => handleSubjectClick(subject.slug)}
              sx={{
                background: examType === 'oge' || examType === 'middle' ? '#fff7f0' : '#fff',
                color: examType === 'oge' || examType === 'middle' ? '#f2aa8d' : '#1e7dbd',
                border: `2px solid ${examType === 'oge' || examType === 'middle' ? '#f2aa8d' : '#1e7dbd'}`,
                borderRadius: '16px',
                fontWeight: 600,
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                py: { xs: 1.5, md: 2 },
                px: 3,
                textTransform: 'none',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: examType === 'oge' || examType === 'middle' 
                  ? '0 4px 12px 0 rgba(242,170,141,0.08)' 
                  : '0 4px 12px 0 rgba(30,125,189,0.08)',
                '&:hover': {
                  background: examType === 'oge' || examType === 'middle' ? '#f2aa8d' : '#1e7dbd',
                  color: '#fff',
                  transform: 'translateY(-2px)',
                  boxShadow: examType === 'oge' || examType === 'middle'
                    ? '0 8px 20px 0 rgba(242,170,141,0.25)'
                    : '0 8px 20px 0 rgba(30,125,189,0.25)',
                  borderColor: examType === 'oge' || examType === 'middle' ? '#f2aa8d' : '#1e7dbd',
                },
              }}
            >
              {subject.name}
            </Button>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SubjectSelectionModal;

