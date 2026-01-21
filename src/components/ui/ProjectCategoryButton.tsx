import { motion } from "framer-motion"
import { projectConfig } from "@/data/projects"
import Button from "./Button"

type CategoryKey = keyof typeof projectConfig

interface CategoryButtonProps {
    category: CategoryKey
    isSelected: boolean
    onClick: () => void
}

export const ProjectCategoryButton = ({ category, isSelected, onClick }: CategoryButtonProps) => {
    const config = projectConfig[category]
    const IconComponent = config.icon

    return (
        <Button
            variant={isSelected ? "primary" : "secondary"} // dynamic variant
            size="md"
            onClick={onClick}
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