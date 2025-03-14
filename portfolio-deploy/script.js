console.log("Portfolio script loaded successfully!");

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Function to toggle mobile menu
    const toggleMobileMenu = () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
    };

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });

    // Sticky Navigation with throttle
    let lastScrollTop = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const header = document.querySelector('header');
                const currentScrollTop = window.scrollY;

                // Add/remove sticky class
                header.classList.toggle('sticky', currentScrollTop > 0);

                // Hide/show header on scroll
                if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }

                lastScrollTop = currentScrollTop;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Smooth Scrolling with offset calculation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Navigation Link on Scroll with Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute('id');
                updateActiveLink(currentId);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

    function updateActiveLink(currentId) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            }
        });
    }

    // Form Submission with validation
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        const validateEmail = (email) => {
            return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        };

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            let isValid = true;
            const errors = [];

            if (!name) {
                isValid = false;
                errors.push('Name is required');
            }

            if (!email) {
                isValid = false;
                errors.push('Email is required');
            } else if (!validateEmail(email)) {
                isValid = false;
                errors.push('Please enter a valid email address');
            }

            if (!subject) {
                isValid = false;
                errors.push('Subject is required');
            }

            if (!message) {
                isValid = false;
                errors.push('Message is required');
            }

            if (!isValid) {
                alert(errors.join('\n'));
                return;
            }
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Animation on Scroll with Intersection Observer
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .skill-category, .timeline-item');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        elements.forEach(element => {
            animationObserver.observe(element);
        });
    };
    
    animateOnScroll();

    // Handle touch events for better mobile interaction
    if ('ontouchstart' in window) {
        const touchElements = document.querySelectorAll('.project-card, .certificate-card, .btn');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            }, { passive: true });

            element.addEventListener('touchend', function() {
                this.classList.remove('touch-active');
            }, { passive: true });
        });
    }
});

// Prevent zoom on double tap on mobile devices
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    
    if (now - lastTap < DOUBLE_TAP_DELAY) {
        e.preventDefault();
    }
    
    lastTap = now;
}, { passive: false });

// Typing Animation for Hero Section
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.hero-content h1 .highlight');
    
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        typeWriter();
    }
});

// Project Filter (if you want to add filtering functionality to projects)
// This is a placeholder for potential future enhancement
const setupProjectFilters = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                // Show/hide projects based on filter
                projectCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        const tags = card.querySelectorAll('.project-tags span');
                        let hasTag = false;
                        
                        tags.forEach(tag => {
                            if (tag.textContent.toLowerCase() === filter.toLowerCase()) {
                                hasTag = true;
                            }
                        });
                        
                        card.style.display = hasTag ? 'block' : 'none';
                    }
                });
            });
        });
    }
};

// Call the function if you implement project filtering
// setupProjectFilters(); 