import { cn } from "@/lib/clsx/cn";
import React, { useState, useEffect } from "react";

interface Profile3DProps {
  name: string;
  initials: string;
  isVisible: boolean;
}

export default function Profile3D({ initials, isVisible }: Profile3DProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Subtle auto-rotate when not hovering
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        const time = Date.now() / 3000;
        setMousePosition({
          x: Math.sin(time) * 3,
          y: Math.cos(time * 0.8) * 2,
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const normalizedX = Math.max(-1, Math.min(1, mouseX / (rect.width / 2)));
    const normalizedY = Math.max(-1, Math.min(1, mouseY / (rect.height / 2)));

    setMousePosition({
      x: normalizedX * 15,
      y: normalizedY * 15,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const getTransform = (multiplier: number = 1, translateZ: number = 20) => {
    const rotateY = mousePosition.x * multiplier;
    const rotateX = -mousePosition.y * multiplier;
    const translateZValue = isHovering ? translateZ + 10 : translateZ;

    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZValue}px)`;
  };

  return (
    <div
      className={cn(
        "relative flex justify-center lg:justify-end",
        isVisible ? "animate-fade-in-right" : "opacity-0",
      )}
      style={{ animationDelay: "300ms" }}
    >
      {/* 3D Profile Container */}
      <div
        className="relative profile-3d-container"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Profile Image */}
        <div className="relative group">
          <div
            className="h-64 w-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-float interactive-lift profile-3d-main"
            style={{
              transform: getTransform(1, 20),
              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="w-full h-full glass-strong flex items-center justify-center relative rounded-full">
              <div className="w-full h-full rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-card relative overflow-hidden">
                <img
                  src={initials}
                  alt="avatar"
                  width={100}
                  height={100}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Glow Effect - Behind Image */}
          <div
            className={cn(
              "absolute -inset-4 rounded-full transition-all duration-500 -z-10 blur-2xl",
              isHovering ? "opacity-100 scale-110" : "opacity-0 scale-100",
            )}
          >
            <div className="w-full h-full rounded-full bg-linear-to-r from-primary/60 via-accent/60 to-primary/60 animate-pulse"></div>
          </div>

          {/* Subtle rotating ring on hover */}
          <div
            className={cn(
              "absolute inset-0 rounded-full transition-opacity duration-500",
              isHovering ? "opacity-100" : "opacity-0",
            )}
          >
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin"
              style={{ animationDuration: "10s" }}
            ></div>
          </div>
        </div>

        {/* Floating Elements with 3D */}
        <div
          className="absolute -top-8 -left-8 w-20 h-20 rounded-2xl glass-subtle animate-float opacity-80 floating-element hover:scale-110 transition-transform cursor-pointer"
          style={{
            transform: getTransform(0.3, 30),
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-full h-full rounded-2xl bg-linear-to-br from-purple-400/40 to-transparent"></div>
        </div>

        <div
          className="absolute -bottom-8 -right-8 w-16 h-16 rounded-xl glass-subtle animate-bounce opacity-60 floating-element hover:scale-110 transition-transform cursor-pointer"
          style={{
            animationDelay: "1s",
            transform: getTransform(0.2, 25),
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-full h-full rounded-xl bg-linear-to-br from-pink-400/40 to-transparent"></div>
        </div>

        <div
          className="absolute top-1/2 -left-12 w-12 h-12 rounded-full glass-subtle animate-pulse opacity-40 floating-element hover:scale-110 transition-transform cursor-pointer"
          style={{
            transform: getTransform(0.4, 20),
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-full h-full rounded-full bg-linear-to-br from-blue-400/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
