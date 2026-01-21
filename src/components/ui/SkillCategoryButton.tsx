import { categoryConfig } from "@/data/skills"
import type { LucideIcon } from "lucide-react"
import { motion } from "@/motion/motion"
import Button from "@/components/ui/Button"

type CategoryKey = keyof typeof categoryConfig

interface CategoryButtonProps {
    category: CategoryKey
    isSelected: boolean
    onClick: (category: CategoryKey) => void
}

export const SkillCategoryButton = ({ category, isSelected, onClick }: CategoryButtonProps) => {
    const config = categoryConfig[category]
    const IconComponent: LucideIcon = config.icon

    return (
        <Button
            variant={isSelected ? "primary" : "secondary"} // dynamic variant
            size="md"
            onClick={() => onClick(category)}
            className="flex items-center gap-2 relative overflow-hidden"
        >
            <IconComponent className="w-4 h-4" />
            <span>{config.title}</span>

            {/* Optional: Selected gradient animation */}
            {isSelected && (
                <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                />
            )}
        </Button>
    )
}