document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select elements to animate
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  if (mobileMenuBtn) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-nav-overlay';
    overlay.innerHTML = `
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="services.html">Services</a>
      <a href="careers.html">Careers</a>
      <a href="blog.html">Blog</a>
      <button class="btn btn-primary" onclick="window.location.href='contact.html'" style="margin-top: 24px;">Schedule a Meeting</button>
    `;
    document.body.appendChild(overlay);

    let isMenuOpen = false;
    mobileMenuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close on link click
    overlay.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        isMenuOpen = false;
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Futuristic Target Cursor — only on devices with a real mouse (fine pointer)
  // On touch/mobile devices window.matchMedia('(pointer: fine)') is false,
  // so we skip all cursor setup and leave the native cursor untouched.
  const hasMouse = window.matchMedia('(pointer: fine)').matches;

  if (hasMouse) {
  let cursorWrapper = document.getElementById('cursor-wrapper');
  
  if (!cursorWrapper) {
    // Remove old cursor stuff
    document.querySelectorAll('.custom-cursor, .custom-cursor-follower, .cursor-core, .cursor-ring, .cursor-particle').forEach(e => e.remove());

    cursorWrapper = document.createElement('div');
    cursorWrapper.id = 'cursor-wrapper';
    cursorWrapper.innerHTML = `
      <div class="cursor-layer cursor-bloom" id="cursor-bloom"></div>
      <div class="cursor-layer" id="cursor-orbit">
        <div class="cursor-orbit">
          <div class="orbit-track-1">
            <div class="orbit-dot-bright orbit-dot-1"></div>
            <div class="orbit-dot-bright orbit-dot-2"></div>
          </div>
          <div class="orbit-track-2">
            <div class="orbit-dot-faint"></div>
          </div>
        </div>
      </div>
      <div class="cursor-layer" id="cursor-arc">
        <div class="cursor-arc"></div>
      </div>
      <div class="cursor-layer" id="cursor-inner">
        <div class="cursor-inner">
          <div class="cursor-tick tick-v tick-top"></div>
          <div class="cursor-tick tick-v tick-bottom"></div>
          <div class="cursor-tick tick-h tick-left"></div>
          <div class="cursor-tick tick-h tick-right"></div>
        </div>
      </div>
      <div class="cursor-layer cursor-center" id="cursor-center"></div>
    `;
    document.body.appendChild(cursorWrapper);
  }

  // Scanline backdrop
  if (!document.querySelector('.scanlines')) {
    const scanlines = document.createElement('div');
    scanlines.className = 'scanlines';
    document.body.appendChild(scanlines);
  }

  const layerCenter = document.getElementById('cursor-center');
  const layerInner = document.getElementById('cursor-inner');
  const layerArc = document.getElementById('cursor-arc');
  const layerOrbit = document.getElementById('cursor-orbit');
  const bloom = document.getElementById('cursor-bloom');
  const arcEl = layerArc.querySelector('.cursor-arc');
  
  if (layerCenter) {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    
    // Layer positions for 3-layer lag
    let posInner = {x: mouseX, y: mouseY};
    let posArc = {x: mouseX, y: mouseY};
    let posOrbit = {x: mouseX, y: mouseY};
    let isHovering = false;
    
    const setPos = (el, pos) => {
      el.style.left = pos.x + 'px';
      el.style.top = pos.y + 'px';
    };

    // Initial setup
    setPos(layerCenter, {x: mouseX, y: mouseY});
    setPos(bloom, {x: mouseX, y: mouseY});
    setPos(layerInner, posInner);
    setPos(layerArc, posArc);
    setPos(layerOrbit, posOrbit);
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Center and bloom have zero lag
      setPos(layerCenter, {x: mouseX, y: mouseY});
      setPos(bloom, {x: mouseX, y: mouseY});

      // Particle Trail Logic
      if (Math.random() > 0.4) {
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.left = mouseX + (Math.random() * 12 - 6) + 'px';
        particle.style.top = mouseY + (Math.random() * 12 - 6) + 'px';
        particle.style.width = Math.random() * 3 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = isHovering ? '#a855f7' : '#00b4ff';
        particle.style.boxShadow = `0 0 5px ${particle.style.backgroundColor}`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
      }
    });

    // 3-layer lag animation
    function animateLag() {
      // Inner ring follows quickly
      posInner.x += (mouseX - posInner.x) * 0.3;
      posInner.y += (mouseY - posInner.y) * 0.3;
      
      // Arc follows medium
      posArc.x += (mouseX - posArc.x) * 0.2;
      posArc.y += (mouseY - posArc.y) * 0.2;
      
      // Orbit follows slowly
      posOrbit.x += (mouseX - posOrbit.x) * 0.1;
      posOrbit.y += (mouseY - posOrbit.y) * 0.1;

      setPos(layerInner, posInner);
      setPos(layerArc, posArc);
      setPos(layerOrbit, posOrbit);
      
      requestAnimationFrame(animateLag);
    }
    animateLag();

    // Hover states — only on interactive elements
    const updateHoverElements = () => {
      const hoverElements = document.querySelectorAll('a, button, input, textarea, select, [onclick], .cursor-pointer');
      hoverElements.forEach(el => {
        // Remove existing to avoid duplicates if called multiple times
        el.removeEventListener('mouseenter', startHover);
        el.removeEventListener('mouseleave', endHover);
        
        el.addEventListener('mouseenter', startHover);
        el.addEventListener('mouseleave', endHover);
      });
    };

    function startHover() {
      isHovering = true;
      layerCenter.classList.add('hover');
      bloom.classList.add('hover');
      arcEl.classList.add('hover');
    }

    function endHover() {
      isHovering = false;
      layerCenter.classList.remove('hover');
      bloom.classList.remove('hover');
      arcEl.classList.remove('hover');
    }

    updateHoverElements();
    // Re-run after a short delay to catch dynamically added elements like mobile menu
    setTimeout(updateHoverElements, 1000);

    // Triple Ripple Click
    document.addEventListener('mousedown', (e) => {
      for(let i=0; i<3; i++) {
        setTimeout(() => {
          const ripple = document.createElement('div');
          ripple.className = 'cursor-ripple-effect';
          ripple.style.left = e.clientX + 'px';
          ripple.style.top = e.clientY + 'px';
          document.body.appendChild(ripple);
          setTimeout(() => ripple.remove(), 700);
        }, i * 150);
      }
    });
  }
  } // end hasMouse

  // Network Canvas Background
  const canvas = document.getElementById('network-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 112, 243, 0.5)';
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = window.innerWidth > 768 ? 60 : 30;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateNetwork() {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Draw lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 112, 243, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateNetwork);
    }
    animateNetwork();
  }
});
