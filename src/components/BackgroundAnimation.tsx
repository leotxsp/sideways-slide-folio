
import React, { useRef, useEffect } from 'react';
import { createNoise3D } from 'simplex-noise';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const noise3D = createNoise3D();
    let width = 0;
    let height = 0;
    let width_half = 0;
    let height_half = 0;

    // Constants
    const PI = Math.PI;
    const TAU = PI * 2;
    const ZERO = 0;
    const THIRD = 1/3;
    const TWO_THIRDS = 2/3;
    const ONE = 1;

    // Helper functions
    const map = (n: number, start1: number, end1: number, start2: number, end2: number) => {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    };

    const cos = Math.cos;
    const floor = Math.floor;
    const hsl = (h: number, s: number, l: number, a: number = 1) => `hsla(${h}, ${s}%, ${l}%, ${a})`;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      width = canvas.width;
      height = canvas.height;
      width_half = width / 2;
      height_half = height / 2;
    };

    const beginPath = () => ctx.beginPath();
    const moveTo = (x: number, y: number) => ctx.moveTo(x + width_half, y + height_half);
    const lineTo = (x: number, y: number) => ctx.lineTo(x + width_half, y + height_half);
    const stroke = (style: string | CanvasGradient, width: number) => {
      ctx.strokeStyle = style;
      ctx.lineWidth = width;
      ctx.stroke();
    };
    const background = (style: string | CanvasGradient) => {
      ctx.fillStyle = style;
      ctx.fillRect(0, 0, width, height);
    };
    
    const compOper = {
      lighter: 'lighter'
    };
    
    const compositeOperation = (type: string) => {
      ctx.globalCompositeOperation = type as GlobalCompositeOperation;
    };

    const draw = (time: number) => {
      const e = time;
      let xCount = 40;
      let yCount = 60;
      let iXCount = 1 / (xCount - 1);
      let iYCount = 1 / (yCount - 1);
      let currentTime = e * 0.001;
      let timeStep = 0.01;
      let grad = ctx.createLinearGradient(-width, 0, width, height);
      let t = currentTime % 1;
      let tSide = floor(currentTime % 2) === 0;
      let hueA = tSide ? 340 : 210;
      let hueB = !tSide ? 340 : 210;
      let colorA = hsl(hueA, 100, 50);
      let colorB = hsl(hueB, 100, 50);
      
      // Clear canvas with transparency
      ctx.clearRect(0, 0, width, height);
      
      grad.addColorStop(map(t, 0, 1, THIRD, ZERO), colorA);
      grad.addColorStop(map(t, 0, 1, TWO_THIRDS, THIRD), colorB);
      grad.addColorStop(map(t, 0, 1, ONE, TWO_THIRDS), colorA);
      
      // Apply transparency
      ctx.globalAlpha = map(cos(currentTime), -1, 1, 0.15, 0.3);
      background(grad);
      ctx.globalAlpha = 1;
      
      beginPath();
      for(let j = 0; j < yCount; j++) {
        let tj = j * iYCount;
        let c = cos(tj * TAU + currentTime) * 0.1;
        for(let i = 0; i < xCount; i++) {
          let t = i * iXCount;
          let n = noise3D(t, currentTime, c);
          let y = n * height_half;
          let x = t * (width + 20) - width_half - 10;
          (i ? lineTo : moveTo)(x, y);
        }
        currentTime += timeStep;
      }
      
      compositeOperation(compOper.lighter);
      
      // Apply blur for gaussian effect
      ctx.filter = 'blur(10px)';
      stroke(grad, 5);
      ctx.filter = 'none';
      stroke(hsl(0, 0, 100, 0.8), 2);
      
      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';
    };

    const animate = (time: number) => {
      draw(time);
      requestIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    requestIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default BackgroundAnimation;
