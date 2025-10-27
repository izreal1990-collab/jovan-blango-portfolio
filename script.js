// Navbar scroll effect
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        scrollToTopBtn.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Animated counter for stats
const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            
            // Animate counters when hero stats are visible
            if (entry.target.classList.contains('hero-stats')) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCounter(stat, target);
                });
            }
            
            // Animate skill bars when skills section is visible
            if (entry.target.classList.contains('skills-container')) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 100);
                });
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
document.querySelectorAll('.hero-stats').forEach(el => observer.observe(el));
document.querySelectorAll('.skills-container').forEach(el => observer.observe(el));

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Testimonials Carousel
class TestimonialsCarousel {
    constructor() {
        this.container = document.querySelector('.testimonials-container');
        if (!this.container) return;

        this.cards = Array.from(document.querySelectorAll('.testimonial-card'));
        this.prevBtn = document.querySelector('.testimonial-prev');
        this.nextBtn = document.querySelector('.testimonial-next');
        this.indicatorsContainer = document.querySelector('.testimonial-indicators');
        
        this.currentIndex = 0;
        this.isTransitioning = false;
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        this.createIndicators();
        this.attachEventListeners();
        this.startAutoPlay();
        this.updateCarousel();
    }

    createIndicators() {
        this.cards.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('testimonial-indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => this.goToSlide(index));
            this.indicatorsContainer.appendChild(indicator);
        });
        this.indicators = Array.from(this.indicatorsContainer.querySelectorAll('.testimonial-indicator'));
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Pause autoplay on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.container.addEventListener('mouseleave', () => this.startAutoPlay());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });

        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }

    updateCarousel() {
        this.cards.forEach((card, index) => {
            card.classList.remove('active', 'prev');
            if (index === this.currentIndex) {
                card.classList.add('active');
            } else if (index < this.currentIndex) {
                card.classList.add('prev');
            }
        });

        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    next() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.updateCarousel();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }

    prev() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.updateCarousel();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }

    goToSlide(index) {
        if (this.isTransitioning || index === this.currentIndex) return;
        this.isTransitioning = true;
        
        this.currentIndex = index;
        this.updateCarousel();
        
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }

    startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.next(), 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// Initialize testimonials carousel
const testimonials = new TestimonialsCarousel();

// Parallax effect for hero orbs
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 50;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});

// Typing effect for hero title (optional enhancement)
const typeWriter = (element, text, speed = 50) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add tilt effect to cards
const addTiltEffect = (card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
};

// Apply tilt effect to about cards and highlight cards
document.querySelectorAll('.about-card, .highlight-card').forEach(addTiltEffect);

// Cursor trail effect (optional)
const createCursorTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(0, 212, 255, 0.5);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(trail);
    
    document.addEventListener('mousemove', (e) => {
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
    });
};

// Initialize cursor trail (uncomment if desired)
// createCursorTrail();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
    
    // Preload critical resources
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                // Preload section content
                target.querySelectorAll('img[data-src]').forEach(img => {
                    if (!img.src) img.src = img.dataset.src;
                });
            }
        });
    });
});

// Lazy load images (if you add images later)
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
};

lazyLoadImages();

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00d4ff, #667eea);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

createScrollProgress();

// Console message for developers
console.log('%c🚀 Built by Jovan Blango', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cElectrician • Systems Thinker • Neurodivergent Innovator', 'font-size: 14px; color: #667eea;');
console.log('%cThis is a living portfolio. It evolves as I do.', 'font-size: 12px; color: #6b7280; font-style: italic;');

// Accessibility: Add focus styles for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add custom focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid var(--primary);
        outline-offset: 4px;
    }
`;
document.head.appendChild(style);

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        console.log('%c🎉 Neurodivergent power activated!', 'font-size: 24px; color: #f59e0b; font-weight: bold;');
    }
});

// Add rainbow animation for easter egg
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = contactForm.querySelector('button[type="submit"]');
        const btnText = btn.querySelector('.btn-text');
        const btnLoader = btn.querySelector('.btn-loader');
        const messageDiv = contactForm.querySelector('.form-message');
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Disable button and show loading
        btn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        messageDiv.style.display = 'none';
        
        try {
            // Simulate form submission (replace with actual API endpoint)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // For now, we'll create a mailto link as fallback
            const mailtoLink = `mailto:your.email@example.com?subject=${encodeURIComponent(formData.subject || 'Contact Form Message')}&body=${encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            )}`;
            
            // Show success message
            messageDiv.textContent = 'Message prepared! Opening your email client...';
            messageDiv.className = 'form-message success';
            messageDiv.style.display = 'block';
            
            // Open mailto link
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 1000);
            
            // Reset form after delay
            setTimeout(() => {
                contactForm.reset();
                messageDiv.style.display = 'none';
            }, 3000);
            
        } catch (error) {
            messageDiv.textContent = 'Something went wrong. Please try again or email directly.';
            messageDiv.className = 'form-message error';
            messageDiv.style.display = 'block';
        } finally {
            btn.disabled = false;
            btnText.style.display = 'inline';
            btnLoader.style.display = 'none';
        }
    });
}

// Form validation feedback
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#ef4444';
        } else if (this.type === 'email' && this.value && !this.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
    
    input.addEventListener('input', function() {
        this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});

// Track user engagement
let timeOnPage = 0;
let engagementData = {
    sectionsViewed: new Set(),
    clickedLinks: [],
    timeSpent: 0
};

setInterval(() => {
    timeOnPage++;
    engagementData.timeSpent = timeOnPage;
}, 1000);

// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            engagementData.sectionsViewed.add(entry.target.id);
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => sectionObserver.observe(section));

// Log engagement on page leave (optional analytics)
window.addEventListener('beforeunload', () => {
    console.log('User Engagement:', {
        sectionsViewed: Array.from(engagementData.sectionsViewed),
        timeSpent: `${Math.floor(engagementData.timeSpent / 60)}m ${engagementData.timeSpent % 60}s`,
        clickedLinks: engagementData.clickedLinks
    });
});

// Progressive Web App - Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('✅ Service Worker registered successfully:', registration.scope);
                
                // Check for updates periodically
                setInterval(() => {
                    registration.update();
                }, 60000); // Check every minute
                
                // Handle service worker updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New service worker available, show update notification
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch((error) => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
    
    // Show update notification when new version is available
    function showUpdateNotification() {
        const notification = document.createElement('div');
        notification.innerHTML = `
            <div style="
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: rgba(10, 14, 39, 0.95);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(0, 212, 255, 0.3);
                border-radius: 12px;
                padding: 1rem 1.5rem;
                color: white;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                z-index: 10000;
                display: flex;
                align-items: center;
                gap: 1rem;
                animation: slideIn 0.3s ease;
            ">
                <span>🎉 New version available!</span>
                <button onclick="window.location.reload()" style="
                    padding: 0.5rem 1rem;
                    background: linear-gradient(135deg, #00d4ff 0%, #6366f1 100%);
                    border: none;
                    border-radius: 6px;
                    color: white;
                    font-weight: 600;
                    cursor: pointer;
                ">
                    Update Now
                </button>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    padding: 0.5rem;
                    background: transparent;
                    border: none;
                    color: rgba(255, 255, 255, 0.5);
                    cursor: pointer;
                    font-size: 1.2rem;
                ">
                    ✕
                </button>
            </div>
        `;
        document.body.appendChild(notification);
    }
}

// PWA Install Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Show install button
    showInstallButton();
});

function showInstallButton() {
    const installBtn = document.createElement('button');
    installBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Install App
    `;
    installBtn.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(135deg, #00d4ff 0%, #6366f1 100%);
        border: none;
        border-radius: 50px;
        color: white;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: transform 0.3s ease;
        animation: slideIn 0.5s ease;
    `;
    
    installBtn.addEventListener('mouseenter', () => {
        installBtn.style.transform = 'scale(1.05)';
    });
    
    installBtn.addEventListener('mouseleave', () => {
        installBtn.style.transform = 'scale(1)';
    });
    
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        
        // Show the install prompt
        deferredPrompt.prompt();
        
        // Wait for the user's response
        const { outcome } = await deferredPrompt.userChoice;
        
        console.log(`User response to install prompt: ${outcome}`);
        
        // Clear the deferred prompt
        deferredPrompt = null;
        
        // Remove the install button
        installBtn.remove();
    });
    
    document.body.appendChild(installBtn);
}

// Track PWA installation
window.addEventListener('appinstalled', () => {
    console.log('✅ PWA installed successfully');
    
    // Track with analytics if available
    if (window.plausible) {
        window.plausible('PWA Install');
    }
});

// Check if running as PWA
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    console.log('✅ Running as PWA');
    document.body.classList.add('pwa-mode');
}
