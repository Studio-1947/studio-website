import { useRef, useEffect } from 'react';

export default function GoldenSprinkles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        let mouse = {
            x: -1000,
            y: -1000,
            radius: 100 // Interaction radius
        };

        const resizeCanvas = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            xOriginal: number;
            yOriginal: number;
            size: number;
            color: string;
            speedX: number;
            speedY: number;
            density: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                // Store original position for potential spring-back effect if desired, 
                // but here we will just let them float freely for now.
                this.xOriginal = this.x;
                this.yOriginal = this.y;

                // Subtle size
                this.size = Math.random() * 2 + 0.5; // 0.5 to 2.5px

                // Colors: Gold variations
                const goldShades = [
                    'rgba(255, 215, 0, ',   // Gold
                    'rgba(218, 165, 32, ',  // GoldenRod
                    'rgba(238, 232, 170, ', // PaleGoldenRod
                    'rgba(255, 223, 0, '    // GoldenYellow
                ];
                const colorBase = goldShades[Math.floor(Math.random() * goldShades.length)];
                const opacity = Math.random() * 0.5 + 0.1; // 0.1 to 0.6 opacity (subtle)
                this.color = colorBase + opacity + ')';

                // Random movement speed
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;

                // Density affects how much the mouse pushes/pulls the particle
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Mouse interaction physics
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;

                // Max distance, past that the force is 0
                const maxDistance = mouse.radius;
                const force = (maxDistance - distance) / maxDistance;

                // Direction multiplier: +1 for repel, -1 for attract
                // Let's make them attract slightly to the mouse to "follow" it
                const directionX = forceDirectionX * force * this.density * 0.6; // 0.6 is strength
                const directionY = forceDirectionY * force * this.density * 0.6;

                if (distance < mouse.radius) {
                    // Move towards mouse
                    this.x += directionX;
                    this.y += directionY;
                } else {
                    // Normal random float movement if not near mouse
                    this.x += this.speedX;
                    this.y += this.speedY;

                    // Simple boundary wrap-around
                    if (this.x < 0) this.x = canvas!.width;
                    if (this.x > canvas!.width) this.x = 0;
                    if (this.y < 0) this.y = canvas!.height;
                    if (this.y > canvas!.height) this.y = 0;
                }

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];
            // Calculate number of particles based on area
            const numberOfParticles = (canvas.width * canvas.height) / 5000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        // Event listeners
        const handleMouseMove = (event: MouseEvent) => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
}
