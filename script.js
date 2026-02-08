
   const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Dropdown toggle for mobile
    document.querySelectorAll('.dropdown > a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                link.parentElement.classList.toggle('active');
            }
        });
    });

  // Close menu when clicking outside
  document.addEventListener("click", e => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove("open");
      document.querySelectorAll(".dropdown").forEach(item => {
        item.classList.remove("open");
      });
    }
  });
const counters = document.querySelectorAll(".count");
let started = false;

function startCounting() {
  if (started) return;
  started = true;

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = target / 200;

    const updateCount = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.floor(current).toLocaleString() + "+";
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString() + "+";
      }
    };

    updateCount();
  });
}

window.addEventListener("scroll", () => {
  const section = document.querySelector(".impact-section");
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 150) {
    startCounting();
  }
});
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  testimonials[i].classList.add("active");
  dots[i].classList.add("active");
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

function prevTestimonial() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
}

/* AUTO SLIDE */
setInterval(nextTestimonial, 5000);

// Timeline scroll animation
const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

timelineItems.forEach(item => {
  observer.observe(item);
});
const cards = document.querySelectorAll(".stack-card");
const section = document.querySelector(".stack-section");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const progress = Math.min(
    Math.max((scrollY - sectionTop) / sectionHeight, 0),
    1
  );

  const index = Math.floor(progress * cards.length);

window.addEventListener('load', () => {
  const counters = document.querySelectorAll('.counter span');

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let current = 0;

    const duration = 2000; // total animation time in ms
    const stepTime = 20;   // update interval in ms
    const step = Math.ceil(target / (duration / stepTime));

    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = current.toLocaleString();
        setTimeout(updateCounter, stepTime);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };

    updateCounter();
  });
});


  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add("active");
      card.classList.remove("fade");
    } else if (i < index) {
      card.classList.add("fade");
      card.classList.remove("active");
    } else {
      card.classList.remove("active", "fade");
    }
  });
});

