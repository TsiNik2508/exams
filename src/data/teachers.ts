export interface Teacher {
  id: number;
  name: string;
  subject: string;
  experience: string;
  image: string;
  description: string;
}

export const teachers: Teacher[] = [
  {
    id: 1,
    name: 'Анна Гавриленко',
    subject: 'Математика',
    experience: '5 лет',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    description: '85% учеников сдали ЕГЭ выше 80 баллов',
  },
  {
    id: 2,
    name: 'Павел Кондрашев',
    subject: 'Информатика',
    experience: '3 года',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    description: 'Мидл разработчик в Яндексе. Средний балл группы в 2025 - 86.3',
  },
  {
    id: 3,
    name: 'Ирина Сарамбаева',
    subject: 'Биология и Химия',
    experience: '4 года',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    description: 'Средний балл группы ЕГЭ в 2025 - 79.5',
  },
  {
    id: 4,
    name: 'Никита Каменский',
    subject: 'Русский язык',
    experience: '6 лет',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
    description: 'Средний балл в 2025 году - 88',
  },
  {
    id: 5,
    name: 'Дарья Александрова',
    subject: 'Обществознание',
    experience: '6 лет',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    description: '80% учеников сдают ЕГЭ выше 80 баллов',
  },
  {
    id: 6,
    name: 'Кристина Горбунова',
    subject: 'Английский язык',
    experience: '4 года',
    image: 'https://randomuser.me/api/portraits/women/46.jpg',
    description: 'Средний балл - 82',
  },
  {
    id: 7,
    name: 'Александр Ноговицын',
    subject: 'История',
    experience: '6 лет',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    description: 'Готовит не только к ОГЭ и ЕГЭ, но и олимпиадам. Средний балл - 86',
  },
  {
    id: 8,
    name: 'Айрат Габараев',
    subject: 'Физика',
    experience: '7 лет',
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
    description: 'Средний балл в группе ЕГЭ в 2025 - 84',
  },
  {
    id: 9,
    name: 'Дарья Солоненко',
    subject: 'Русский язык',
    experience: '5 лет',
    image: 'https://randomuser.me/api/portraits/women/49.jpg',
    description: 'Средний балл в группе ОГЭ в 2025 году - 4.7',
  },
  {
    id: 10,
    name: 'Дмитрий Гусар',
    subject: 'Математика',
    experience: '6 лет',
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
    description: '80% учеников повысили свои оценки. Средний балл ОГЭ - 4.5',
  },
]; 