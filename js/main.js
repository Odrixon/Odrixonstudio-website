document.addEventListener('DOMContentLoaded', () => {
    const translations = window.translations;

    // State Management
    let currentLang = localStorage.getItem('lang') || 'vi';
    let currentTheme = localStorage.getItem('theme') || 'light';

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        document.title = lang === 'vi' ? 'Odrixon Studio | Ý tưởng của bạn, tâm huyết của chúng tôi' : 'Odrixon Studio | Your ideas, our passion';
        const langTextEl = document.getElementById('lang-text');
        if (langTextEl) {
            langTextEl.innerText = lang.toUpperCase();
        }
        localStorage.setItem('lang', lang);
    };

    const updateTheme = (theme) => {
        const themeIconEl = document.getElementById('theme-icon');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            if (themeIconEl) {
                themeIconEl.setAttribute('icon', 'material-symbols:light-mode-outline');
            }
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
            if (themeIconEl) {
                themeIconEl.setAttribute('icon', 'material-symbols:dark-mode-outline');
            }
        }
        localStorage.setItem('theme', theme);
    };

    // Event Listeners
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'vi' ? 'en' : 'vi';
            updateLanguage(currentLang);
        });
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            updateTheme(currentTheme);
        });
    }

    // Initial Load
    updateLanguage(currentLang);
    updateTheme(currentTheme);

    // Simple smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Simple scroll reveal
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
        observer.observe(section);
    });

    // Contact Form submission handler opening mail client
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('[name="name"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const message = contactForm.querySelector('[name="message"]').value;

            const subject = encodeURIComponent(`Lời mời hợp tác từ ${name}`);
            const body = encodeURIComponent(`Họ và tên: ${name}\nEmail liên hệ: ${email}\n\nLời nhắn về ý tưởng:\n${message}`);

            window.location.href = `mailto:contact@odrixon.com?subject=${subject}&body=${body}`;
        });
    }
});
