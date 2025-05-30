// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.nav__menu');
    const contacts = document.querySelector('.nav__contacts');
    
    if (!nav || !menu || !contacts) return; // Проверяем наличие элементов

    let menuButton = document.querySelector('.mobile-menu-button');
    if (menuButton) menuButton.remove();

    // Создаем бургер
    menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    nav.insertBefore(menuButton, menu);

    // Добавляем классы для мобильного меню
    menu.classList.add('mobile-menu');
    contacts.classList.add('mobile-menu');

    // Функция для переключения меню
    function toggleMenu() {
        const isActive = menu.classList.toggle('active');
        contacts.classList.toggle('active');
        menuButton.classList.toggle('active');
        document.body.classList.toggle('menu-open', isActive);
        menuButton.innerHTML = isActive ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    }

    // Обработчик клика по бургеру
    menuButton.addEventListener('click', toggleMenu);

    // Закрытие меню при клике по ссылке
    menu.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            contacts.classList.remove('active');
            menuButton.classList.remove('active');
            document.body.classList.remove('menu-open');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuButton.contains(e.target) && menu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Обработка изменения размера окна
    function handleResize() {
        if (window.innerWidth > 900) {
            menu.classList.remove('active', 'mobile-menu');
            contacts.classList.remove('active', 'mobile-menu');
            menuButton.classList.remove('active');
            document.body.classList.remove('menu-open');
            menuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }

    window.addEventListener('resize', handleResize);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initMobileMenu);

// FAQ Accordion
const initFAQ = () => {
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq__answer').style.maxHeight = null;
            });
            
            // Toggle current item
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
};

// Initialize FAQ when DOM is loaded
document.addEventListener('DOMContentLoaded', initFAQ);

// Form validation for contact forms
const validateForm = (form) => {
    const name = form.querySelector('input[name="name"]');
    const phone = form.querySelector('input[name="phone"]');
    let isValid = true;
    
    if (name && !name.value.trim()) {
        isValid = false;
        name.classList.add('error');
    }
    
    if (phone && !phone.value.trim()) {
        isValid = false;
        phone.classList.add('error');
    }
    
    return isValid;
};

// Add form validation to all forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        if (!validateForm(form)) {
            e.preventDefault();
        }
    });
});

// Reviews Slider
const initReviewsSlider = () => {
    const slider = document.querySelector('.reviews__slider');
    const slides = document.querySelectorAll('.reviews__slide');
    const prevBtn = document.querySelector('.reviews__prev');
    const nextBtn = document.querySelector('.reviews__next');
    let currentSlide = 0;
    let isAnimating = false;

    const updateSlider = () => {
        if (isAnimating) return;
        isAnimating = true;

        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));

        // Add active class to current slide
        slides[currentSlide].classList.add('active');

        // Calculate the offset based on the slide width
        const slideWidth = slides[0].offsetWidth;
        const offset = -currentSlide * slideWidth;
        
        // Apply the transform
        slider.style.transform = `translateX(${offset}px)`;

        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    };

    const nextSlide = () => {
        if (isAnimating) return;
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    };

    const prevSlide = () => {
        if (isAnimating) return;
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    };

    // Initialize first slide
    slides[0].classList.add('active');
    updateSlider(); // Set initial position

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
        });
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
        });
    }

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    };

    // Auto slide with pause on hover
    let autoSlideInterval;

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateSlider();
        }, 250);
    });

    // Start auto slide
    startAutoSlide();
};

// Initialize reviews slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initFAQ();
    initReviewsSlider();
});

// Swiper для отзывов
const reviewsSwiper = new Swiper('.reviews__slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
}); 