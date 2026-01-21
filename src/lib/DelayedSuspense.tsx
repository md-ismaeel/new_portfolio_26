import { useState, useEffect, type ReactNode } from "react";
import { Suspense } from "react";

interface DelayedSuspenseProps {
    fallback: ReactNode;
    delay?: number; // milliseconds before showing fallback
    children: ReactNode;
}

export default function DelayedSuspense({
    fallback,
    delay = 300,
    children,
}: DelayedSuspenseProps) {
    const [showFallback, setShowFallback] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFallback(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return <Suspense fallback={showFallback ? fallback : null}>{children}</Suspense>;
}
