import { motion } from "@/motion/motion";
import { cn } from "@/lib/clsx/cn";

interface BackgroundBlobsProps {
    opacity?: "light" | "normal" | "strong";
    blur?: "light" | "normal" | "heavy";
    animated?: boolean;
    className?: string;
}

export const BackgroundBlobs = ({
    opacity = "normal",
    blur = "normal",
    animated = true,
    className = ''
}: BackgroundBlobsProps) => {
    const opacityClasses = {
        light: "opacity-30",
        normal: "opacity-40",
        strong: "opacity-50"
    };

    const blurClasses = {
        light: "blur-2xl",
        normal: "blur-3xl",
        heavy: "blur-[120px]"
    };

    const blobs = [
        {
            size: "w-[500px] h-[500px]",
            position: "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
            color: "bg-blue-500",
            delay: 0,
            duration: 15
        },
        {
            size: "w-[600px] h-[600px]",
            position: "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
            color: "bg-purple-500",
            delay: 0.5,
            duration: 18
        },
        {
            size: "w-[450px] h-[450px]",
            position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            color: "bg-cyan-500",
            delay: 1,
            duration: 20
        }
    ];

    return (
        <div className={cn(
            "absolute inset-0 pointer-events-none overflow-hidden",
            opacityClasses[opacity],
            className
        )}>
            {blobs.map((blob, index) => (
                <motion.div
                    key={index}
                    className={cn(
                        "absolute rounded-full",
                        blob.position,
                        blob.size,
                        blob.color,
                        blurClasses[blur]
                    )}
                    initial={animated ? {
                        opacity: 0,
                        scale: 0.8
                    } : { opacity: 1, scale: 1 }}
                    animate={animated ? {
                        opacity: 1,
                        scale: 1,
                        y: index === 0 ? [0, -30, 0] : index === 1 ? [0, 30, 0] : [0, -20, 0],
                        x: index === 0 ? [0, 20, 0] : index === 1 ? [0, -20, 0] : [0, 15, 0],
                    } : undefined}
                    transition={animated ? {
                        opacity: { duration: 1, delay: blob.delay, ease: [0.16, 1, 0.3, 1] },
                        scale: { duration: 1, delay: blob.delay, ease: [0.16, 1, 0.3, 1] },
                        y: { duration: blob.duration, repeat: Infinity, ease: "easeInOut", delay: blob.delay },
                        x: { duration: blob.duration, repeat: Infinity, ease: "easeInOut", delay: blob.delay },
                    } : undefined}
                />
            ))}
        </div>
    );
};