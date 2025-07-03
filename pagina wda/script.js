document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar")
  const heroSection = document.getElementById("inicio") // Para efecto parallax

  // --- Efecto de cambio de fondo en Navbar al hacer scroll ---
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }

    // --- Efecto Parallax Sutil para el video del Hero ---
    // (Más efectivo si el video no es 'cover' y tiene espacio para moverse)
    // Opcionalmente, puedes aplicar esto a .hero-content si el video es fijo.
    // const scrollValue = window.scrollY;
    // if (heroSection && heroSection.querySelector('.hero-video')) {
    //   heroSection.querySelector('.hero-video').style.transform = `translate(-50%, calc(-50% + ${scrollValue * 0.1}px))`;
    // }
  })

  // --- Desplazamiento suave para los enlaces de la barra de navegación ---
  const navLinks = document.querySelectorAll('#navbar a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const navbarHeight = navbar.offsetHeight
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
        window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      }
    })
  })

  // --- Establece el año current en el pie de página ---
  const currentYearSpan = document.getElementById("currentYear")
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear()
  }

  // --- Animación de aparición para elementos al hacer scroll ---
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Ajusta según necesites (0.1 = 10% visible)
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target) // Deja de observar una vez animado
      }
    })
  }, observerOptions)

  const elementsToAnimate = document.querySelectorAll(
    ".content-section, .character-block, .gallery-item, .donation-card, .bio-container > div",
  )
  elementsToAnimate.forEach((el) => {
    el.classList.add("fade-in-element") // Clase inicial para la animación
    observer.observe(el)
  })

  // --- Simulación de video (si el botón de play se usara) ---
  const video = document.getElementById('heroVideo');
  const playButton = document.getElementById('playButton');

  // El video inicia silenciado para autoplay
  video.muted = true;

  playButton.addEventListener('click', function() {
      video.muted = false;
      video.play().then(() => {
          playButton.style.display = 'none';
      }).catch((e) => {
          // Si hay error, muestra el botón
          playButton.textContent = 'Haz clic para activar sonido';
      });
  });
})
