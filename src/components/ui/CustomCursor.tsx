"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const pos  = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top  = e.clientY + "px";
      }
    };
    const animate = () => {
      pos.current.rx += (pos.current.x - pos.current.rx) * 0.12;
      pos.current.ry += (pos.current.y - pos.current.ry) * 0.12;
      if (ring.current) {
        ring.current.style.left = pos.current.rx + "px";
        ring.current.style.top  = pos.current.ry + "px";
      }
      requestAnimationFrame(animate);
    };

    const grow = () => {
      if (dot.current)  { dot.current.style.width  = "20px"; dot.current.style.height  = "20px"; }
      if (ring.current) { ring.current.style.width = "60px"; ring.current.style.height = "60px"; }
    };
    const shrink = () => {
      if (dot.current)  { dot.current.style.width  = "12px"; dot.current.style.height  = "12px"; }
      if (ring.current) { ring.current.style.width = "40px"; ring.current.style.height = "40px"; }
    };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("button, a, [data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    animate();
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={dot} className="fixed pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow transition-all duration-200"
        style={{ mixBlendMode: "difference" }} />
      <div ref={ring} className="fixed pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-yellow/50 transition-all duration-300" />
    </>
  );
}
