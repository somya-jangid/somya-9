document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing animation for hero section subheading
    const subheading = document.querySelector('.subheading');
    const text = subheading.textContent;
    subheading.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            subheading.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
});
