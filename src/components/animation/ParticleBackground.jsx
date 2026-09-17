"use client";
import React, { useEffect, useRef } from 'react';

export default function ParticleBackground({ withMask = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];

    const mouse = {
      x: null,
      y: null,
      radius: 40
    };

    // PERBAIKAN 1: Gunakan koordinat relatif terhadap posisi kanvas itu sendiri
    const handleMouseMove = (event) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 1.5; 
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
      }
      
      draw() {
        ctx.fillStyle = 'rgba(100, 116, 139, 0.7)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const init = () => {
      particlesArray = [];
      let spacing = 28; 
      for (let y = 0; y < canvas.height; y += spacing) {
        for (let x = 0; x < canvas.width; x += spacing) {
          particlesArray.push(new Particle(x, y));
        }
      }
    };

    // PERBAIKAN 2: Gunakan ukuran elemen asli, bukan window.innerWidth/Height
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    // Panggil saat pertama kali load
    resizeCanvas();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      // Tambahkan w-full h-full untuk mencegah distorsi
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      style={withMask ? {
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 15%, black 70%)',
        maskImage: 'radial-gradient(ellipse at center, transparent 15%, black 70%)'
      } : undefined}
    />
  );
}