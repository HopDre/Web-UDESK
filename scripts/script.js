const header = document.getElementById('header');
const dropdown = document.querySelector('.dropdown');
const productsBtn = document.getElementById('productsBtn');
const dropdownSvg = productsBtn.querySelector('svg');

// Smooth scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

// Dropdown toggle
  productsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('active');
    dropdownSvg.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
      dropdownSvg.style.transform = 'rotate(0)';
    }
  });

// Close dropdown on scroll
  window.addEventListener('scroll', () => {
    if (dropdown.classList.contains('active')) {
      dropdown.classList.remove('active');
      dropdownSvg.style.transform = 'rotate(0)';
    }
  });

//cambio de logos en interfaz de computador
   const logos = document.querySelectorAll('.logo-container img');
    let index = 0;

    function showNextLogo() {
      logos[index].classList.remove('active');
      index++;

      if (index < logos.length) {
        logos[index].classList.add('active');
      } else {
        logos[logos.length - 1].classList.add('active'); // último se queda
        clearInterval(intervalo);
      }
    }
    const intervalo = setInterval(showNextLogo, 900);

//carrusel testimonios
    const testimonials = [
            {
                name: "Sarah Chen",
                title: "CEO en TechVision",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                text: "Esta plataforma transformó completamente nuestra forma de trabajar. La automatización nos ahorró más de 20 horas semanales y mejoró nuestra productividad en un 150%.",
                rating: 5
            },
            {
                name: "Michael Torres",
                title: "Director de Producto",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                text: "La mejor inversión que hemos hecho este año. La interfaz es intuitiva, el soporte es excepcional y los resultados hablan por sí solos. Totalmente recomendado.",
                rating: 5
            },
            {
                name: "Emma Williams",
                title: "Head of Growth",
                avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                text: "Increíble cómo simplifica procesos complejos. Nuestra tasa de conversión aumentó 3x en solo dos meses. El ROI fue inmediato y superó todas nuestras expectativas.",
                rating: 5
            },
            {
                name: "James Rodriguez",
                title: "CTO en StartupLab",
                avatar: "https://randomuser.me/api/portraits/men/46.jpg",
                text: "La integración fue súper fluida y el equipo de soporte estuvo con nosotros en cada paso. Es raro encontrar un producto tan bien ejecutado en todos los aspectos.",
                rating: 5
            },
            {
                name: "Sophie Anderson",
                title: "Marketing Director",
                avatar: "https://randomuser.me/api/portraits/women/28.jpg",
                text: "Nos ayudó a escalar de manera exponencial. Las analíticas en tiempo real nos dan insights valiosos que utilizamos para optimizar nuestras campañas diariamente.",
                rating: 5
            },
            {
                name: "David Kim",
                title: "Founder & CEO",
                avatar: "https://randomuser.me/api/portraits/men/22.jpg",
                text: "Como startup, necesitábamos algo potente pero asequible. Esta solución nos dio exactamente eso y más. No podríamos haber crecido tan rápido sin ella.",
                rating: 5
            },
            {
                name: "Lisa Martinez",
                title: "VP of Operations",
                avatar: "https://randomuser.me/api/portraits/women/50.jpg",
                text: "La automatización inteligente es un cambio de juego. Redujimos errores humanos en un 95% y nuestro equipo ahora se enfoca en tareas realmente estratégicas.",
                rating: 5
            },
            {
                name: "Alex Johnson",
                title: "Product Manager",
                avatar: "https://randomuser.me/api/portraits/men/54.jpg",
                text: "Impresionante nivel de personalización. Pudimos adaptarlo perfectamente a nuestro flujo de trabajo existente sin interrupciones. Vale cada centavo.",
                rating: 5
            }
        ];

        function createTestimonialCard(testimonial) {            
            return `
                <div class="testimonial-card">
                    <div class="quote-icon">"</div>
                    <p class="testimonial-text">${testimonial.text}</p>
                    <div class="author">
                        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="avatar">
                        <div class="author-info">
                            <div class="author-name">${testimonial.name}</div>
                            <div class="author-title">${testimonial.title}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        const track = document.getElementById('carouselTrack');
        const duplicatedTestimonials = [...testimonials, ...testimonials];
        
        track.innerHTML = duplicatedTestimonials.map(t => createTestimonialCard(t)).join('');
