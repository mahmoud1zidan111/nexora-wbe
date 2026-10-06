"use client";

import { useEffect, useRef } from "react";

type Signal = {
  x: number;
  y: number;
  phase: number;
  speed: number;
};

const GRID_SIZE = 88;
const MAX_DPR = 1.25;

export function NexoraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const pointer = { x: 0, y: 0 };
    let width = 0;
    let height = 0;
    let scrollProgress = 0;
    let animationFrame = 0;
    let lastFrame = 0;
    let signals: Signal[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = width < 700;
      const count = isMobile
        ? 8
        : Math.min(24, Math.max(12, Math.floor((width * height) / 70000)));
      signals = Array.from({ length: count }, (_, index) => ({
        x: ((index * 67.3 + 12) % 100) / 100,
        y: ((index * 41.7 + 19) % 100) / 100,
        phase: (index * 0.71) % (Math.PI * 2),
        speed: 0.08 + (index % 4) * 0.018,
      }));
      draw(0, true);
    };

    const draw = (time: number, isStatic = false) => {
      if (!width || !height) return;

      const isMobile = width < 700;
      const motionScale = reducedMotion.matches ? 0 : isMobile ? 0.3 : 1;
      const parallaxX = pointer.x * (isMobile ? 2 : 5) * motionScale;
      const parallaxY =
        pointer.y * (isMobile ? 1 : 3) * motionScale -
        scrollProgress * 5 * motionScale;
      const horizon = height * 0.46;
      const drift = isStatic ? 0 : time * 0.006 * motionScale;

      context.clearRect(0, 0, width, height);

      const atmosphere = context.createRadialGradient(
        width * (0.72 + pointer.x * 0.012 * motionScale),
        height * (0.2 + scrollProgress * 0.04),
        0,
        width * 0.72,
        height * 0.25,
        Math.max(width, height) * 0.72,
      );
      atmosphere.addColorStop(0, "rgba(42, 132, 196, 0.065)");
      atmosphere.addColorStop(1, "rgba(5, 8, 22, 0)");
      context.fillStyle = atmosphere;
      context.fillRect(0, 0, width, height);

      context.save();
      context.translate(parallaxX, parallaxY);
      context.strokeStyle = "rgba(95, 166, 221, 0.055)";
      context.lineWidth = 0.7;

      const offset = (drift % GRID_SIZE) - GRID_SIZE;
      for (let x = offset; x < width + GRID_SIZE; x += GRID_SIZE) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = offset; y < height + GRID_SIZE; y += GRID_SIZE) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      context.strokeStyle = "rgba(95, 166, 221, 0.035)";
      const centerX = width * 0.52;
      for (let x = -GRID_SIZE; x <= width + GRID_SIZE; x += GRID_SIZE) {
        context.beginPath();
        context.moveTo(centerX + (x - centerX) * 0.08, horizon);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let step = 1; step <= 5; step += 1) {
        const progress = step / 5;
        const y = horizon + (height - horizon) * progress * progress;
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      const signalPoints = signals.map((signal) => {
        const phase = signal.phase + time * signal.speed * 0.001 * motionScale;
        return {
          x: signal.x * width + Math.sin(phase) * 8 * motionScale,
          y: signal.y * height + Math.cos(phase * 0.8) * 5 * motionScale,
          phase,
        };
      });

      for (let index = 0; index < signalPoints.length; index += 1) {
        const point = signalPoints[index];
        for (
          let nextIndex = index + 1;
          nextIndex < signalPoints.length;
          nextIndex += 1
        ) {
          const next = signalPoints[nextIndex];
          const distance = Math.hypot(point.x - next.x, point.y - next.y);
          if (distance > 190) continue;

          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(next.x, next.y);
          context.strokeStyle = `rgba(91, 181, 224, ${0.035 * (1 - distance / 190)})`;
          context.stroke();
        }

        const pulse = (Math.sin(point.phase) + 1) * 0.5;
        context.beginPath();
        context.arc(point.x, point.y, 1 + pulse * 0.55, 0, Math.PI * 2);
        context.fillStyle = `rgba(114, 214, 245, ${0.12 + pulse * 0.2})`;
        context.fill();
      }
      context.restore();
    };

    const animate = (time: number) => {
      if (document.hidden) {
        animationFrame = 0;
        return;
      }
      if (time - lastFrame >= 1000 / (width < 700 ? 24 : 30)) {
        draw(time);
        lastFrame = time;
      }
      animationFrame = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      draw(0, true);
      if (!reducedMotion.matches && !document.hidden) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (width < 700 || reducedMotion.matches) return;
      pointer.x = event.clientX / Math.max(width, 1) - 0.5;
      pointer.y = event.clientY / Math.max(height, 1) - 0.5;
    };

    const onScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      } else {
        startAnimation();
      }
    };

    resize();
    startAnimation();
    onScroll();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    reducedMotion.addEventListener("change", startAnimation);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.removeEventListener("change", startAnimation);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="nexora-background"
      aria-hidden="true"
    />
  );
}
