import { navigation } from '@/data/constants'
import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/clsx/cn'

interface NavigationProps {
    className?: string
    onItemClick?: () => void
}

export function Navigation({ className = '', onItemClick }: NavigationProps) {
    const location = useLocation()

    return (
        <nav className={cn('flex items-center space-x-8', className)}>
            {navigation.map((item) => {
                const isActive = location.pathname === item.href

                return (
                    <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={onItemClick}
                        className={cn(
                            'group relative px-4 py-2.5 rounded-full font-medium text-md transition-all duration-300 ease-out',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2',
                            isActive
                                ? 'text-primary bg-primary/5 shadow-sm'
                                : 'text-muted-foreground hover:text-primary'
                        )}
                    >
                        {/* Underline: active + hover */}
                        <span
                            className={cn(
                                'absolute bottom-0 left-1/2 h-0.5 rounded-full bg-linear-to-r from-primary to-accent transition-all duration-300 transform -translate-x-1/2',
                                isActive
                                    ? 'w-3/4 opacity-0'
                                    : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                            )}
                        />

                        <span className="relative z-10">{item.name}</span>
                    </NavLink>
                )
            })}
        </nav>
    )
}
