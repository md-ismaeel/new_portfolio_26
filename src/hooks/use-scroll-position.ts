import { debounce } from '@/utils/debounce'
import { useState, useEffect, useCallback } from 'react'

interface ScrollPosition {
    x: number
    y: number
    direction: 'up' | 'down'
    pastViewport: boolean
}

interface UseScrollPositionOptions {
    delay?: number
    immediate?: boolean
}

export function useScrollPosition(options: UseScrollPositionOptions = {}) {
    const { delay = 10 } = options

    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
        x: 0,
        y: 0,
        direction: 'up',
        pastViewport: false
    })

    const updateScrollPosition = useCallback(() => {
        const currentY = window.scrollY
        const currentX = window.scrollX
        const viewportHeight = window.innerHeight

        setScrollPosition(prev => ({
            x: currentX,
            y: currentY,
            direction: currentY > prev.y ? 'down' : 'up',
            pastViewport: currentY > viewportHeight
        }))
    }, [])

    useEffect(() => {
        updateScrollPosition()

        const handleScroll = debounce(updateScrollPosition, delay)

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [updateScrollPosition, delay])

    return scrollPosition
}
