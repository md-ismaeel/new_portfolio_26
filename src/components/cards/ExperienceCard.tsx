import { useRef } from "react"
import type { Experience } from "@/types/index"
import { Calendar, ChevronRight, Code, TrendingUp, Users, Star, Building2 } from "lucide-react"
import { motion, cardHover, useInView } from "@/motion/motion"
import { cn } from "@/lib/clsx/cn"

interface ExperienceCardProps {
    experience: Experience
    index: number
    isExpanded: boolean
    onToggle: () => void
}

const getIcon = (index: number) => {
    const icons = [
        <TrendingUp key="trend" className="w-5 h-5 sm:w-6 sm:h-6" />,
        <Code key="code" className="w-5 h-5 sm:w-6 sm:h-6" />,
        <Users key="users" className="w-5 h-5 sm:w-6 sm:h-6" />,
    ]
    return icons[index % 3] || <Code key="default" className="w-5 h-5 sm:w-6 sm:h-6" />
}

const getGradient = (index: number) => {
    const gradients = [
        "from-primary to-accent",
        "from-accent to-primary",
        "from-primary via-accent to-primary",
    ]
    return gradients[index % gradients.length]
}

export function ExperienceCard({ experience, index, isExpanded, onToggle }: ExperienceCardProps) {
    const ref = useRef<HTMLDivElement | null>(null)

    const isInView = useInView(ref, {
        once: true,
        margin: "-120px",
    })

    if (!isInView) {
        return <div ref={ref} className="min-h-55" />
    }

    const gradient = getGradient(index)
    const icon = getIcon(index)

    return (
        <motion.div
            ref={ref}
            className="group relative overflow-hidden rounded-xl sm:rounded-2xl card-modern cursor-pointer"
            initial="rest"
            whileHover="hover"
            variants={cardHover}
            onClick={onToggle}
        >
            {/* Animated background gradient */}
            <motion.div
                className={cn("absolute inset-0 bg-linear-to-br opacity-0 pointer-events-none", gradient)}
                animate={{ opacity: isExpanded ? 0.05 : 0 }}
                transition={{ duration: 0.4 }}
            />

            {/* Main content */}
            <div className="relative p-4 sm:p-6">
                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 flex-1 min-w-0">
                        {/* Logo / Icon */}
                        <motion.div
                            className="shrink-0"
                            whileHover={{ scale: 1.05, rotate: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {experience.logo ? (
                                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden bg-card shadow-card border border-custom">
                                    <img
                                        src={experience.logo}
                                        alt={`${experience.company} logo`}
                                        loading="lazy"
                                        className="w-full h-full object-contain p-2"
                                    />
                                </div>
                            ) : (
                                <div
                                    className={cn(
                                        "w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-card",
                                        gradient
                                    )}
                                >
                                    {icon}
                                </div>
                            )}
                        </motion.div>

                        {/* Job Info */}
                        <div className="flex-1 min-w-0 w-full">
                            <motion.h3
                                className="text-lg sm:text-xl font-bold gradient-text mb-2 leading-tight"
                                animate={{ x: isExpanded ? 2 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {experience.position}
                            </motion.h3>

                            {experience.current && (
                                <motion.span
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 mb-2 sm:mb-3"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                                >
                                    <motion.div
                                        className="w-2 h-2 bg-primary rounded-full"
                                        animate={{ opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    Current Role
                                </motion.span>
                            )}

                            <div className="space-y-1.5 sm:space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-foreground-muted" />
                                    <span className="font-semibold text-foreground-secondary truncate">
                                        {experience.company}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 text-foreground-muted">
                                    <Calendar className="w-4 h-4" />
                                    <span className="font-medium">{experience.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Expand Toggle */}
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <div
                            className={cn(
                                "p-2 rounded-full bg-card border border-custom shadow-card",
                                isExpanded ? "border-primary/40" : ""
                            )}
                        >
                            <motion.div
                                animate={{ rotate: isExpanded ? 90 : 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <ChevronRight
                                    className={cn(
                                        "w-5 h-5",
                                        isExpanded ? "text-primary" : "text-foreground-muted"
                                    )}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Expandable Content */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                >
                    <div className="border-t border-card mt-6 pt-6 space-y-6">
                        {/* Achievements */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Star className="w-5 h-5 text-yellow-500" />
                                <h4 className="text-lg font-bold">Key Achievements</h4>
                            </div>
                            <div className="space-y-3">
                                {experience.description.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-2 h-2 bg-linear-to-r from-primary to-accent rounded-full mt-2" />
                                        <p className="text-foreground-secondary text-sm">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Code className="w-5 h-5 text-primary" />
                                <h4 className="text-lg font-bold">Technologies & Tools</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, idx) => (
                                    <motion.span
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="glass rounded-full px-3 py-1.5 text-xs font-medium text-primary border border-primary/20"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Hover border glow */}
            <motion.div
                className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 pointer-events-none"
                animate={{ borderColor: isExpanded ? "rgba(66,133,244,0.3)" : "transparent" }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    )
}
