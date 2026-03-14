document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('#nav-links a, #mobile-menu a');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .section-title, .btn-primary').forEach(el => {
    observer.observe(el);
  });

  const navbar = document.querySelector('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.classList.remove('-translate-y-full');
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.classList.add('-translate-y-full');
    } else {
      navbar.classList.remove('-translate-y-full');
    }

    lastScroll = currentScroll;
  });
});
