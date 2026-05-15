import { useRef, useEffect } from 'react';

interface MousePos { x: number; y: number; radius: number }

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

    constructor(
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D,
        private mouse: MousePos,
    ) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.xOriginal = this.x;
        this.yOriginal = this.y;
        this.size = Math.random() * 2 + 0.5;

        const goldShades = [
            'rgba(255, 215, 0, ',
            'rgba(218, 165, 32, ',
            'rgba(238, 232, 170, ',
            'rgba(255, 223, 0, ',
        ];
        const colorBase = goldShades[Math.floor(Math.random() * goldShades.length)];
        const opacity = Math.random() * 0.5 + 0.1;
        this.color = colorBase + opacity + ')';

        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.density = Math.random() * 30 + 1;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    update() {
        const dx = this.mouse.x - this.x;
        const dy = this.mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = this.mouse.radius;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density * 0.6;
        const directionY = forceDirectionY * force * this.density * 0.6;

        if (distance < this.mouse.radius) {
            this.x += directionX;
            this.y += directionY;
        } else {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0) this.x = this.canvas.width;
            if (this.x > this.canvas.width) this.x = 0;
            if (this.y < 0) this.y = this.canvas.height;
            if (this.y > this.canvas.height) this.y = 0;
        }

        this.draw();
    }
}

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

        const mouse: MousePos = { x: -1000, y: -1000, radius: 100 };

        const initParticles = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 5000;
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle(canvas, ctx, mouse));
            }
        };

        const resizeCanvas = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
            initParticles();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (event: MouseEvent) => {
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
