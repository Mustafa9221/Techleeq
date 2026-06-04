// topology.js
document.addEventListener('DOMContentLoaded', () => {
    // Check if we already have a mesh-bg element to attach to, or just prepend to body
    const meshBg = document.querySelector('.mesh-bg');
    
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '-5'; // Above mesh-bg (-10) but below content
    canvas.style.pointerEvents = 'none'; // Don't block clicks
    
    if (meshBg) {
        meshBg.parentNode.insertBefore(canvas, meshBg.nextSibling);
    } else {
        document.body.prepend(canvas);
    }

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    // Config
    const connectionDistance = 150;
    
    // Determine number of particles based on screen size to maintain performance
    function getParticleCount() {
        if (window.innerWidth < 768) return 40;
        if (window.innerWidth < 1024) return 60;
        return 90;
    }

    function initParticles() {
        particles = [];
        const numParticles = getParticleCount();
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 1.5 + 0.5
            });
        }
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }
    window.addEventListener('resize', resize);
    
    // Initial setup
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles();

    // Mouse interaction
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off edges
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'; // Subtle white/light
            ctx.fill();

            // Connect to other particles
            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dx = p.x - p2.x;
                let dy = p.y - p2.y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    let opacity = 1 - (dist / connectionDistance);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
            
            // Connect to mouse
            if (mouse.x != null && mouse.y != null) {
                let dx = p.x - mouse.x;
                let dy = p.y - mouse.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < connectionDistance + 50) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    let opacity = 1 - (dist / (connectionDistance + 50));
                    ctx.strokeStyle = `rgba(254, 230, 83, ${opacity * 0.4})`; // Highlight with yellow near mouse
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    
                    // Slight attraction
                    p.x -= dx * 0.002;
                    p.y -= dy * 0.002;
                }
            }
        }
    }
    animate();
});
