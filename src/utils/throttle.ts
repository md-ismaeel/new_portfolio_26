/**
 * Throttles a function so it runs at most once
 * every `delay` milliseconds.
 */
export function throttle<T extends (...args: unknown[]) => void>(
    fn: T,
    delay: number,
): (...args: Parameters<T>) => void {
    let lastTime = 0;

    return (...args: Parameters<T>) => {
        const now = Date.now();

        if (now - lastTime >= delay) {
            lastTime = now;
            fn(...args);
        }
    };
}
