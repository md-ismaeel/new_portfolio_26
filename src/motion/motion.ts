import { type MotionProps, type Variants, motion, useInView, AnimatePresence } from "motion/react";
export { motion, useInView, AnimatePresence };

// ============================================
// ENTRANCE ANIMATIONS (Modern & Smooth)
// ============================================

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    },
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth motion
        }
    },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1] // Bounce ease
        }
    },
};

export const slideUp: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.9,
            ease: [0.19, 1, 0.22, 1]
        }
    },
};

// ============================================
// MODERN TEXT ANIMATIONS
// ============================================

export const textReveal: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(4px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    },
};

export const textGradualSpacing: Variants = {
    hidden: {
        opacity: 0,
        letterSpacing: "-0.05em"
    },
    visible: {
        opacity: 1,
        letterSpacing: "0em",
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
        }
    },
};

export const textGlitch: Variants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.87, 0, 0.13, 1],
        }
    },
};

export const textBlurIn: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.02
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.19, 1, 0.22, 1]
        }
    },
};

export const textSlideUp: Variants = {
    hidden: {
        opacity: 0,
        y: "100%",
        skewY: 7
    },
    visible: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: {
            duration: 0.9,
            ease: [0.33, 1, 0.68, 1]
        }
    },
};

// For word-by-word or character-by-character animations
export const textWordReveal: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: 90 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            delay: i * 0.05,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }),
};

// ============================================
// STAGGER ANIMATIONS
// ============================================

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15
        },
    },
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 350,
            damping: 25,
            mass: 0.5
        },
    },
};

export const staggerFastContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.1
        },
    },
};

// ============================================
// HOVER / INTERACTIVE ANIMATIONS
// ============================================

export const hoverLift: Variants = {
    rest: { y: 0, scale: 1 },
    hover: {
        y: -8,
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 17
        },
    },
};

export const hoverScale: Variants = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 17
        }
    },
};

export const hoverGlow = {
    rest: {
        boxShadow: "0 4px 14px rgba(0,0,0,0.06)"
    },
    hover: {
        boxShadow: "0 20px 40px rgba(66,133,244,0.25)",
        transition: { duration: 0.4, ease: "easeOut" }
    },
};

export const hoverRotate = {
    rest: { rotate: 0 },
    hover: {
        rotate: 5,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        }
    },
};

export const hoverShine = {
    rest: {
        backgroundPosition: "200% center"
    },
    hover: {
        backgroundPosition: "-200% center",
        transition: { duration: 1, ease: "linear" }
    },
};

// ============================================
// TAP / CLICK ANIMATIONS
// ============================================

export const tapScale = {
    scale: 0.94,
    transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
    }
};

export const tapShrink = {
    scale: 0.88,
    transition: {
        type: "spring",
        stiffness: 600,
        damping: 17
    }
};

export const tapPulse = {
    scale: [1, 0.92, 1.05, 1],
    transition: {
        duration: 0.4,
        times: [0, 0.3, 0.7, 1]
    }
};

// ============================================
// CONTINUOUS / FLOATING EFFECTS
// ============================================

export const float: MotionProps["animate"] = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: ["easeInOut", "easeInOut"] as const, // literal type
        repeatType: "loop" as const,               // literal type
    },
};



export const floatSubtle = {
    y: [0, -5, 0],
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop" as const
    },
};

export const pulse = {
    scale: [1, 1.05, 1],
    transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop" as const
    }
};

export const bounce = {
    y: [0, -15, 0],
    transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: [0.45, 0, 0.55, 1],
        repeatType: "loop" as const
    }
};

export const shimmer = {
    backgroundPosition: ["200% center", "-200% center"],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop" as const
    }
};

// ============================================
// CARD ANIMATIONS
// ============================================

export const cardHover: Variants = {
    rest: {
        y: 0,
        scale: 1,
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        borderColor: "rgba(0,0,0,0.1)"
    },
    hover: {
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
        borderColor: "rgba(66,133,244,0.3)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
        },
    },
};

export const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.9,
        rotateX: 15
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            mass: 0.8
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.9,
        transition: {
            duration: 0.3,
            ease: [0.43, 0.13, 0.23, 0.96]
        }
    },
};

export const cardSlideIn: Variants = {
    hidden: {
        opacity: 0,
        x: -50,
        rotateY: -15
    },
    visible: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 22
        }
    },
};

// ============================================
// BUTTON ANIMATIONS
// ============================================

export const buttonVariants: Variants = {
    rest: { scale: 1, y: 0 },
    hover: {
        scale: 1.05,
        y: -3,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 15
        }
    },
    tap: {
        scale: 0.93,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 18
        }
    },
};

export const buttonPrimary: Variants = {
    rest: {
        scale: 1,
        boxShadow: "0 4px 14px rgba(66,133,244,0.2)"
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 8px 24px rgba(66,133,244,0.35)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 15
        }
    },
    tap: {
        scale: 0.95,
        boxShadow: "0 2px 8px rgba(66,133,244,0.2)"
    },
};

// ============================================
// HEADER / UNDERLINE MOTION
// ============================================

export const headerMotion: MotionProps = {
    initial: { y: -30, opacity: 0, filter: "blur(4px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
    transition: {
        type: "spring",
        stiffness: 200,
        damping: 22,
        mass: 1
    },
};

export const underlineMotion = {
    initial: {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left"
    },
    hover: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export const underlineCenter = {
    initial: {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "center"
    },
    hover: {
        scaleX: 1,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

// ============================================
// PARALLAX & SCROLL EFFECTS
// ============================================

export const parallaxSlow = {
    y: [0, -50],
    transition: {
        ease: "linear"
    }
};

export const parallaxFast = {
    y: [0, -100],
    transition: {
        ease: "linear"
    }
};

// ============================================
// MODAL / OVERLAY ANIMATIONS
// ============================================

export const modalBackdrop: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, ease: "easeIn" }
    }
};

export const modalContent: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 20
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 25
        }
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        transition: { duration: 0.2 }
    }
};