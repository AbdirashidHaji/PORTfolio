// Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark');
            }
        }

        // Load saved theme
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            const themeIcon = document.getElementById('theme-icon');
            
            if (savedTheme === 'dark') {
                document.body.setAttribute('data-theme', 'dark');
                if (themeIcon) themeIcon.className = 'fas fa-sun';
            } else {
                document.body.removeAttribute('data-theme');
                if (themeIcon) themeIcon.className = 'fas fa-moon';
            }
        }

        // Smooth scrolling for navigation links
        function smoothScroll() {
            const links = document.querySelectorAll('a[href^="#"]');
            
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        // Scroll animations
        function scrollAnimations() {
            const elements = document.querySelectorAll('.scroll-animate');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            elements.forEach(element => {
                observer.observe(element);
            });
        }

        // Header background on scroll
        function headerScroll() {
            const header = document.querySelector('header');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.style.background = 'var(--bg-primary)';
                    header.style.backdropFilter = 'blur(10px)';
                    header.style.boxShadow = 'var(--shadow)';
                } else {
                    header.style.background = 'var(--bg-primary)';
                    header.style.boxShadow = 'none';
                }
            });
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            const mobileMenu = document.querySelector('.mobile-menu');
            
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        }

        // Form submission
        function handleFormSubmission() {
            const form = document.querySelector('.contact-form');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(form);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                // Create mailto link
                const mailtoLink = `mailto:abdirashid.ke@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                
                // Open email client
                window.location.href = mailtoLink;
                
                // Show success message
                alert('Thank you for your message! Your email client should open shortly.');
                
                // Reset form
                form.reset();
            });
        }

        // Typing animation for hero text
        function typeWriter() {
            const text = "Frontend Developer";
            const element = document.querySelector('.subtitle');
            let i = 0;
            
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, 100);
                } else {
                    // Add blinking cursor
                    element.innerHTML += '<span class="cursor">|</span>';
                    
                    // Add CSS for cursor animation
                    const style = document.createElement('style');
                    style.textContent = `
                        .cursor {
                            animation: blink 1s infinite;
                        }
                        @keyframes blink {
                            0%, 50% { opacity: 1; }
                            51%, 100% { opacity: 0; }
                        }
                    `;
                    document.head.appendChild(style);
                }
            }
            
            setTimeout(type, 1000);
        }

        // Particle effect for hero section
        function createParticles() {
            const hero = document.querySelector('.hero');
            const particlesContainer = document.createElement('div');
            particlesContainer.className = 'particles';
            particlesContainer.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
            `;
            
            hero.appendChild(particlesContainer);
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: var(--accent);
                    border-radius: 50%;
                    opacity: 0.5;
                    animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 5}s;
                `;
                
                particlesContainer.appendChild(particle);
            }
            
            // Add floating animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
            `;
            document.head.appendChild(style);
        }

        // Skills animation on scroll
        function animateSkills() {
            const skillItems = document.querySelectorAll('.skill-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.transform = 'translateY(0)';
                            entry.target.style.opacity = '1';
                        }, index * 100);
                    }
                });
            }, { threshold: 0.5 });
            
            skillItems.forEach(item => {
                item.style.transform = 'translateY(30px)';
                item.style.opacity = '0';
                item.style.transition = 'all 0.6s ease-out';
                observer.observe(item);
            });
        }

        // Project cards hover effect
        function projectHoverEffects() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-15px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        }

        // Initialize all functions
        function init() {
            loadTheme();
            smoothScroll();
            scrollAnimations();
            headerScroll();
            handleFormSubmission();
            typeWriter();
            createParticles();
            animateSkills();
            projectHoverEffects();
        }

        // Run initialization when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);