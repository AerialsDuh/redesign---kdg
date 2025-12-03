import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Mouse state
    let mouseX = 0;
    let mouseY = 0;
    let isMouseOver = false;

    // Configuration
    const particleCount = Math.floor((width * height) / 15000); // Responsive count
    const connectionDistance = 150;
    const mouseDistance = 200;

    // Particle Class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      sparkle: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Slow, graceful movement
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 0.5;
        this.sparkle = Math.random();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse interaction (gentle repulsion/flow)
        if (isMouseOver) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouseDistance - distance) / mouseDistance;
            const directionX = forceDirectionX * force * 0.5;
            const directionY = forceDirectionY * force * 0.5;
            
            this.x -= directionX;
            this.y -= directionY;
          }
        }

        // Boundary wrap
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Sparkle effect update
        this.sparkle += 0.01;
      }

      draw() {
        if (!ctx) return;
        
        // Draw Diamond shape
        ctx.beginPath();
        const opacity = 0.3 + Math.abs(Math.sin(this.sparkle)) * 0.5; // Pulsing opacity
        ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`; // Cyan color
        
        // Draw a diamond (rotated square)
        ctx.moveTo(this.x, this.y - this.size);
        ctx.lineTo(this.x + this.size, this.y);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.lineTo(this.x - this.size, this.y);
        ctx.closePath();
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
    };

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Initial size
    resize();

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`; // Very faint white lines
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Interactive Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-60"
        style={{ pointerEvents: 'auto' }} // Allow mouse interaction
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pointer-events-none">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-900/10 backdrop-blur-md pointer-events-auto">
          <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">High-Performance Polymer Optics</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-400 mb-8 font-serif">
          Klarheit wie <br />
          <span className="italic text-cyan-50 font-serif">Diamanten.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-12">
          Hochtechnologischer Spritzguss aus dem Herzen des Lechtals. 
          Wir verbinden optische Präzision mit der Kraft der Natur für innovative Lichtlösungen.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pointer-events-auto">
          <button className="group relative px-8 py-4 bg-white text-slate-900 font-semibold tracking-wide overflow-hidden diamond-edge hover:bg-cyan-50 transition-all">
            <span className="relative z-10">Unsere Lösungen</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          
          <button className="px-8 py-4 text-white border border-white/20 diamond-edge hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm">
            KDG Film ansehen
          </button>
        </div>
      </div>

      {/* Decorative River Flow Line (SVG) - Kept as subtle bottom framing */}
      <svg className="absolute bottom-0 left-0 w-full h-48 pointer-events-none opacity-20 z-0" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="url(#grad1)" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 1}} />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute bottom-10 animate-bounce text-slate-500 pointer-events-none">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};