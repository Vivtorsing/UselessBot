import React, { useRef, useEffect, useCallback } from 'react';

const CustomAnimation = ({
    fps = 60,
    style,
    color
}) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const colorStops = useRef(null);

    const setupCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        colorStops.current = color;

        if(!colorStops.current) {
            colorStops.current = [
                { pos: 0, color: 'rgba(215, 135, 255, 0.5)' },
                { pos: 0.5, color: 'rgba(0, 155, 255, 0.5)' },
                { pos: 1, color: 'rgba(255, 155, 255, 0.5)' }
            ];
        }

        return auroraBorealis(canvas, ctx, colorStops.current);
    }, [color]);

    useEffect(() => {
        const animate = () => {
            const animation = setupCanvas();
            let lastTime = 0;
            const frameInterval = 1000 / fps;

            const loop = (currentTime) => {
                animationRef.current = requestAnimationFrame(loop);

                const deltaTime = currentTime - lastTime;
                if(deltaTime >= frameInterval) {
                    lastTime = currentTime - (deltaTime % frameInterval);
                    animation();
                }
            };

            animationRef.current = requestAnimationFrame(loop);
        };

        animate();

        const handleResize = () => {
            if(canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                setupCanvas();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if(animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [fps, setupCanvas]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                ...style
            }}
        />
    );
};

export const auroraBorealis = (canvas, ctx, colorStops) => {
    let time = 0;

    return () => {
        ctx.fillStyle = 'rgba(0, 0, 20, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        time += 0.005;

        for(let i = 0; i < 3; i++) {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            colorStops.forEach(stop => {
                gradient.addColorStop(stop.pos, stop.color);
            });

            ctx.beginPath();
            for(let x = 0; x < canvas.width; x++) {
                const y = Math.sin(x * 0.01 + time + i) * 50 +
                    Math.sin(x * 0.02 - time * 1.5 + i) * 30 +
                    canvas.height * (0.4 + i * 0.2);
                ctx.lineTo(x, y);
            }
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();

            ctx.fillStyle = gradient;
            ctx.fill();
        }
    };
};

export {
    CustomAnimation,
};