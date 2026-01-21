import { NavLink } from "react-router-dom";
import { motion, hoverLift, hoverScale } from "@/motion/motion";
import type { LucideIcon } from "lucide-react";

export interface SocialLinkProps {
    name: string;
    href: string;
    icon: LucideIcon;
}

export function SocialLink({ link, index }: { link: SocialLinkProps; index: number }) {
    return (
        <motion.div
            variants={hoverLift}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="relative"
            transition={{ delay: 0.4 + index * 0.1 }}
        >
            <NavLink
                to={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${link.name}`}
                className="group relative flex p-4 items-center justify-center rounded-full glass border-custom text-foreground-muted hover:text-primary hover:border-custom-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 overflow-hidden transition-all duration-300"
            >
                {/* Icon */}
                <motion.div
                    variants={hoverScale}
                    initial="rest"
                    whileHover="hover"
                >
                    <link.icon className="w-5 h-5 relative z-10 text-foreground-secondary group-hover:text-primary transition-all duration-300" />
                </motion.div>

                {/* Hover background */}
                <motion.div
                    className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </NavLink>
        </motion.div>
    );
}
