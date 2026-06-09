import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = 60;
    const connectionDistance = 120;
    
    // Mouse interaction position
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4; // very slow and subtle
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on borders
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // Mouse interaction: push particles slightly
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 0.5;
            this.y += (dy / dist) * force * 0.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    init();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid overlay effect directly on canvas with low opacity
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Opacity based on distance
            const alpha = (1 - dist / connectionDistance) * 0.08;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
        canvas.parentElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20"
    >
      {/* Background Canvas Animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Grid pattern overlay (fallback and extra depth) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none"></div>
      
      {/* Dark radial gradients to focus lighting in the center */}
      <div className="absolute inset-0 bg-radial-glow z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-0 pointer-events-none"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        {/* Badge */}
        <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-950/80 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-8 animate-pulse-slow">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
          Agencia de Automatización con IA
        </div>

        {/* Title */}
        <h1 className="reveal-on-scroll font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 max-w-4xl text-glow">
          Escala Sin Contratar.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
            Automatiza Tu Éxito.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="reveal-on-scroll text-base md:text-xl text-neutral-400 font-normal max-w-2xl leading-relaxed mb-10">
          Diseñamos flujos de trabajo inteligentes y agentes de IA que ponen tus operaciones en piloto automático, ahorrándote más de 20 horas a la semana.
        </p>

        {/* CTA Button Group */}
        <div className="reveal-on-scroll flex flex-col sm:flex-row items-center gap-4">
          <a
            id="btn-get-audit"
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black bg-white border border-white rounded-sm hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Obtener Auditoría Gratis
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            id="btn-know-more"
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-transparent border border-neutral-800 rounded-sm hover:border-white/80 hover:bg-white/5 active:scale-95 transition-all duration-300"
          >
            Ver Servicios
          </a>
        </div>

        {/* Floating indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors duration-300 pointer-events-none">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Deslizar</span>
          <div className="w-[18px] h-[30px] rounded-full border border-neutral-800 flex justify-center p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
