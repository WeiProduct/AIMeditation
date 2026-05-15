function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'zh-CN';
    const newLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    setLanguage(newLang);
}

document.addEventListener('DOMContentLoaded', function() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.body.classList.add('no-motion');
    }

    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        });
    });

    const navbar = document.querySelector('.navbar');
    const updateNavbar = () => {
        if (!navbar) return;
        navbar.classList.toggle('is-scrolled', window.scrollY > 50);
    };
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.feature-card, .screenshot').forEach((element, index) => {
        element.classList.add('reveal');
        element.style.transitionDelay = `${Math.min(index, 5) * 0.08}s`;
        observer.observe(element);
    });
});
