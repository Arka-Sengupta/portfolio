// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation active state

        // Photo shuffler functionality
        const photos = document.querySelectorAll('.shuffle-container img');
        let currentIndex = 0;
        
        function shufflePhotos() {
            // Remove active class from current photo
            photos[currentIndex].classList.remove('active');
            photos[currentIndex].classList.add('exiting');
            
            // Calculate next index
            currentIndex = (currentIndex + 1) % photos.length;
            
            // Add active class to next photo
            photos[currentIndex].classList.add('active');
            
            // After transition completes, remove exiting class
            setTimeout(() => {
                const exitingPhoto = document.querySelector('.shuffle-container img.exiting');
                if (exitingPhoto) {
                    exitingPhoto.classList.remove('exiting');
                    exitingPhoto.style.left = '100%';
                }
            }, 1500);
        }
        
        // Start the shuffler
        if (photos.length > 0) {
            // Set first photo as active
            photos[0].classList.add('active');
            photos[0].style.left = '0';
            photos[0].style.opacity = '1';
            
            // Start the interval
            setInterval(shufflePhotos, 2000);
        }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Update active navigation link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
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
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Add animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Set a random background color for project images
        const projectImg = card.querySelector('.project-img');
        const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'];
        projectImg.style.backgroundColor = colors[index % colors.length];
    });
    
    // Add typing animation to hero text
    // Add typing animation to hero text
const heroText = document.querySelector('.hero-content h2');
const heroSubtitle = document.querySelector('.hero-content .hero-subtitle');

if (heroText && heroSubtitle) {
    // Initially hide both elements
    heroText.style.opacity = '0';
    heroSubtitle.style.opacity = '0';
    
    // Animate the main heading first
    setTimeout(() => {
        heroText.style.transition = 'opacity 1s ease';
        heroText.style.opacity = '1';
        
        // Then animate the subtitle after a short delay
        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 1s ease';
            heroSubtitle.style.opacity = '1';
        }, 300); // 300ms delay after the main heading appears
    }, 500); // Initial 500ms delay
}
});
function downloadCV() {
    // Replace with the actual path to your PDF file
    const pdfUrl = 'resume.pdf';
    const fileName = 'Arka_Sengupta_resume.pdf'; // Name you want the downloaded file to have
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// Easter Egg: Tap name 5 times for a random fact
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo h1');
    let clickCount = 0;
    let lastClickTime = 0;
    const facts = [
        "Once I was nearly late for endsems due to sleep, my roomate woke me 20 mins before the exam started",
        "I had a 50/50 chance that I would end up in engineering.",
        "My first 'Hello World' was written in C in schooltime, didn't focused much on that language till then."
    ];

    if (logo) {
        logo.addEventListener('click', function(e) {
            const currentTime = new Date().getTime();
            
            // Reset count if too much time passed between clicks (1.5 seconds)
            if (currentTime - lastClickTime > 1500) {
                clickCount = 0;
            }
            
            clickCount++;
            lastClickTime = currentTime;

            // If clicked 5 times, show a random fact
            if (clickCount >= 5) {
                const randomFact = facts[Math.floor(Math.random() * facts.length)];
                Swal.fire({
                    title: "You Found a Random fact!",
                    text: randomFact,
                    icon: "success"
                  });
                clickCount = 0; // Reset counter
            }
        });
    }
});
// Contact Form Submission
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    
    // Simple validation
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Submit form
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            throw new Error('Failed to send');
        }
    })
    .catch(() => alert('Error sending message. Please try again later.'))
    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    });
});