import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function PortfolioIntro() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Smooth progress animation
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        // Complete loading after progress reaches 100
        const completeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 3200);

        return () => {
            clearInterval(progressInterval);
            clearTimeout(completeTimer);
        };
    }, []);

    if (!isLoading) {
        return null;
    }

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="fixed inset-0 z-9999 bg-primary-background overflow-hidden"
                >
                    {/* Animated background mesh */}
                    <div className="absolute inset-0 bg-mesh opacity-50" />

                    {/* Floating gradient orbs - Smaller, subtle */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -top-20 -left-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/20 blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.15, 0.25, 0.15],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                        }}
                        className="absolute -bottom-20 -right-20 w-48 h-48 md:w-64 md:h-64 rounded-full bg-accent/20 blur-3xl"
                    />

                    {/* Main content */}
                    <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6">
                        <div className="text-center space-y-6 sm:space-y-8 max-w-xl w-full">
                            {/* Animated SVG Loader - Compact sizing */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.34, 1.56, 0.64, 1],
                                }}
                                className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44"
                            >
                                {/* Main animated SVG */}
                                <svg
                                    className="w-full h-full"
                                    viewBox="0 0 200 200"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="var(--primary)">
                                                <animate
                                                    attributeName="stop-color"
                                                    values="var(--primary);var(--accent);var(--primary)"
                                                    dur="3s"
                                                    repeatCount="indefinite"
                                                />
                                            </stop>
                                            <stop offset="100%" stopColor="var(--accent)">
                                                <animate
                                                    attributeName="stop-color"
                                                    values="var(--accent);var(--primary);var(--accent)"
                                                    dur="3s"
                                                    repeatCount="indefinite"
                                                />
                                            </stop>
                                        </linearGradient>

                                        <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="var(--accent)" />
                                            <stop offset="100%" stopColor="var(--primary)" />
                                        </linearGradient>

                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    {/* Outer rotating hexagon */}
                                    <motion.polygon
                                        points="100,20 170,60 170,140 100,180 30,140 30,60"
                                        fill="none"
                                        stroke="url(#gradient1)"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        filter="url(#glow)"
                                        initial={{ pathLength: 0, rotate: 0 }}
                                        animate={{
                                            pathLength: [0, 1, 1],
                                            rotate: 360,
                                        }}
                                        transition={{
                                            pathLength: { duration: 2, ease: "easeInOut" },
                                            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                                        }}
                                        style={{ transformOrigin: "center" }}
                                    />

                                    {/* Middle rotating triangle */}
                                    <motion.polygon
                                        points="100,50 150,130 50,130"
                                        fill="none"
                                        stroke="url(#gradient2)"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        filter="url(#glow)"
                                        initial={{ pathLength: 0, rotate: 0 }}
                                        animate={{
                                            pathLength: [0, 1, 1],
                                            rotate: -360,
                                        }}
                                        transition={{
                                            pathLength: { duration: 2, delay: 0.3, ease: "easeInOut" },
                                            rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                                        }}
                                        style={{ transformOrigin: "center" }}
                                    />

                                    {/* Inner pulsing circle */}
                                    <motion.circle
                                        cx="100"
                                        cy="100"
                                        r="25"
                                        fill="url(#gradient1)"
                                        filter="url(#glow)"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                            scale: [0, 1, 1],
                                            opacity: [0, 1, 0.7, 1, 0.7],
                                        }}
                                        transition={{
                                            scale: { duration: 1, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] },
                                            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                        }}
                                        style={{ transformOrigin: "center" }}
                                    />

                                    {/* Orbiting dots */}
                                    {[0, 120, 240].map((angle, i) => (
                                        <motion.g key={i}>
                                            <motion.circle
                                                cx="100"
                                                cy="30"
                                                r="5"
                                                fill={i % 2 === 0 ? "var(--primary)" : "var(--accent)"}
                                                filter="url(#glow)"
                                                initial={{ scale: 0 }}
                                                animate={{
                                                    scale: [0, 1, 1],
                                                    rotate: 360,
                                                }}
                                                transition={{
                                                    scale: { duration: 0.5, delay: 0.8 + i * 0.1 },
                                                    rotate: {
                                                        duration: 4 + i * 0.5,
                                                        repeat: Infinity,
                                                        ease: "linear",
                                                    },
                                                }}
                                                style={{
                                                    transformOrigin: "100px 100px",
                                                    transform: `rotate(${angle}deg)`,
                                                }}
                                            />
                                        </motion.g>
                                    ))}

                                    {/* Center animated lines */}
                                    {[-30, 0, 30].map((angle, i) => (
                                        <motion.line
                                            key={i}
                                            x1="100"
                                            y1="100"
                                            x2="100"
                                            y2="70"
                                            stroke={i === 1 ? "var(--primary)" : "var(--accent)"}
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            filter="url(#glow)"
                                            initial={{ pathLength: 0, rotate: angle }}
                                            animate={{
                                                pathLength: [0, 1, 0],
                                                rotate: angle + 360,
                                            }}
                                            transition={{
                                                pathLength: {
                                                    duration: 2,
                                                    delay: 1 + i * 0.2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                },
                                                rotate: {
                                                    duration: 5,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                },
                                            }}
                                            style={{ transformOrigin: "100px 100px" }}
                                        />
                                    ))}
                                </svg>

                                {/* Progress indicator ring overlay */}
                                <svg
                                    className="absolute inset-0 w-full h-full"
                                    viewBox="0 0 200 200"
                                    style={{ transform: "rotate(-90deg)" }}
                                >
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="92"
                                        fill="none"
                                        stroke="var(--primary)"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeDasharray={578}
                                        strokeDashoffset={578 - (578 * progress) / 100}
                                        style={{
                                            filter: "drop-shadow(0 0 6px var(--primary))",
                                            opacity: 0.4,
                                            transition: "stroke-dashoffset 0.3s ease",
                                        }}
                                    />
                                </svg>
                            </motion.div>

                            {/* Welcome text with stagger - Compact typography */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="space-y-2 sm:space-y-3 px-4"
                            >
                                <motion.h1
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                                    style={{
                                        background: "linear-gradient(90deg, var(--primary), var(--accent), var(--primary))",
                                        backgroundSize: "200% auto",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Welcome to My Portfolio
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="text-xs sm:text-sm md:text-base text-foreground-secondary"
                                >
                                    Crafting digital experiences with passion
                                </motion.p>
                            </motion.div>

                            {/* Progress bar - Compact sizing */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="space-y-2 px-4"
                            >
                                <div className="relative w-full max-w-xs mx-auto h-1 sm:h-1.5 rounded-full overflow-hidden bg-background-secondary/50 backdrop-blur-sm">
                                    <motion.div
                                        className="absolute top-0 left-0 h-full rounded-full"
                                        style={{
                                            width: `${progress}%`,
                                            background: "linear-gradient(90deg, var(--primary), var(--accent))",
                                            boxShadow: "0 0 10px var(--primary)",
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                </div>
                                <motion.div
                                    animate={{
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="flex items-center justify-center gap-2 text-xs text-foreground-muted"
                                >
                                    <span className="font-semibold text-primary">{progress}%</span>
                                    <span>•</span>
                                    <span>Loading</span>
                                </motion.div>
                            </motion.div>

                            {/* Animated dots - Compact sizing */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                className="flex items-center justify-center gap-1.5"
                            >
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [0, -6, 0],
                                            scale: [1, 1.15, 1],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.15,
                                        }}
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{
                                            background: i === 1 ? "var(--primary)" : "var(--accent)",
                                            boxShadow: i === 1
                                                ? "0 0 8px var(--primary)"
                                                : "0 0 8px var(--accent)",
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}