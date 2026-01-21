import { Suspense, useRef } from "react";
import { useInView } from "@/motion/motion";

interface LazySectionProps {
    children: React.ReactNode;
    skeleton: React.ReactNode;
}

export default function LazySection({ children, skeleton }: LazySectionProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-150px",
    });

    return (
        <div ref={ref} className="min-h-[40vh]">
            {isInView && (
                <Suspense fallback={skeleton}>
                    {children}
                </Suspense>
            )}
        </div>
    );
}
