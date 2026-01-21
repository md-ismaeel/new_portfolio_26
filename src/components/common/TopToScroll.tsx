import { ArrowUp } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { debounce } from "@/utils/debounce"

interface ScrollPosition {
    x: number
    y: number
    direction: "up" | "down"
    pastViewport: boolean
}

interface UseScrollPositionOptions {
    delay?: number
    immediate?: boolean
}

function useScrollPosition(options: UseScrollPositionOptions = {}) {
    const { delay = 10, immediate = false } = options

    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
        x: 0,
        y: 0,
        direction: "up",
        pastViewport: false,
    })

    const updateScrollPosition = useCallback(() => {
        const currentY = window.scrollY
        const currentX = window.scrollX
        const viewportHeight = window.innerHeight

        setScrollPosition(prev => ({
            x: currentX,
            y: currentY,
            direction: currentY > prev.y ? "down" : "up",
            pastViewport: currentY > viewportHeight,
        }))
    }, [])

    useEffect(() => {
        updateScrollPosition()

        const handleScroll = debounce(updateScrollPosition, delay)
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [updateScrollPosition, delay, immediate])

    return scrollPosition
}

export default function TopToScroll() {
    const { pastViewport } = useScrollPosition()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (!pastViewport) return null

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="group fixed bottom-6 right-6 z-50 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full glass text-foreground-muted interactive-lift hover:text-primary overflow-hidden cursor-pointer animate-bounce"
        >
            <ArrowUp className="relative z-10 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />

            {/* Hover background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Glow effect */}
            <div className="absolute inset-0 -z-10 scale-110 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 opacity-0 shadow-glow transition-opacity duration-300 group-hover:opacity-100" />
        </button>
    )
}
