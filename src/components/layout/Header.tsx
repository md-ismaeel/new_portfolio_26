import { Sun, Moon, Github, Linkedin } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { Navigation } from "./Navigation"
import { MobileMenu } from "./MobileMenu"
import { SITE_CONFIG } from "@/data/constants"
import { NavLink } from "react-router-dom"
import { cn } from "@/lib/clsx/cn"
import { motion, headerMotion, hoverScale, hoverLift } from "@/motion/motion"

export function Header() {
    const { y: scrollY, direction } = useScrollPosition({
        delay: 50,
        immediate: false,
    })

    const { theme, toggleTheme, mounted } = useTheme()

    const isScrolled = scrollY > 50
    const isScrollingDown = direction === "down" && scrollY > 100
    const shouldHide = isScrollingDown && scrollY > 200

    return (
        <motion.header
            {...headerMotion}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                shouldHide ? "-translate-y-full" : "translate-y-0",
                isScrolled ? "glass shadow-card py-3 backdrop-blur-xl" : "bg-transparent py-6"
            )}
        >
            <div className="container-wide">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        variants={hoverScale}
                    >
                        <NavLink
                            to="/"
                            className="group relative flex items-center space-x-3 rounded-xl p-2 -m-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2"
                        >
                            <div className="relative">
                                <motion.div
                                    className={cn(
                                        "h-12 w-12 rounded-full shadow-card bg-primary-background flex items-center justify-center relative overflow-hidden transition-all duration-300",
                                        isScrolled ? "scale-90" : "scale-100"
                                    )}
                                    whileHover={{
                                        boxShadow: "0 10px 25px rgba(66,133,244,0.25)",
                                        scale: isScrolled ? 0.95 : 1.05
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17
                                    }}
                                >
                                    <img
                                        src={SITE_CONFIG.portfolio}
                                        alt="Logo"
                                        className="h-12 w-12 rounded-full object-cover"
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                </motion.div>

                                <motion.div
                                    className="absolute inset-0 rounded-xl bg-linear-to-br from-primary to-accent scale-110 -z-10"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.3 }}
                                    transition={{ duration: 0.3 }}
                                    animate={{
                                        y: [0, -5, 0]
                                    }}
                                    style={{
                                        transition: "opacity 0.3s"
                                    }}
                                />
                            </div>

                            <motion.div
                                className={cn(
                                    "hidden sm:block transition-all duration-300",
                                    isScrolled ? "opacity-80 scale-95" : "opacity-100 scale-100"
                                )}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <h1 className="heading-sm linear-text font-semibold">Portfolio</h1>
                            </motion.div>
                        </NavLink>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Navigation />

                        <div className="flex items-center space-x-2">
                            {[{ href: SITE_CONFIG.author.github, Icon: Github, label: "GitHub" },
                            { href: SITE_CONFIG.author.linkedin, Icon: Linkedin, label: "LinkedIn" }].map(
                                ({ href, Icon, label }) => (
                                    <motion.div
                                        key={label}
                                        initial="rest"
                                        whileHover="hover"
                                        variants={hoverLift}
                                    >
                                        <NavLink
                                            to={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={label}
                                            className={cn(
                                                "group relative flex p-4 items-center justify-center rounded-full glass border-custom text-foreground-muted hover:text-primary hover:border-custom-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 overflow-hidden transition-all duration-300",
                                                isScrolled ? "scale-90" : "scale-100"
                                            )}
                                        >
                                            <Icon className="h-4 w-4 relative z-10 text-foreground-secondary group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                                            <motion.div
                                                className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileHover={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </NavLink>
                                    </motion.div>
                                )
                            )}

                            {mounted && (
                                <motion.button
                                    initial="rest"
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={hoverLift}
                                    onClick={toggleTheme}
                                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                                    className={cn(
                                        "group relative flex p-4 items-center justify-center rounded-full glass border-custom text-foreground-muted hover:text-primary hover:border-custom-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 overflow-hidden transition-all duration-300 cursor-pointer",
                                        isScrolled ? "scale-90" : "scale-100"
                                    )}
                                >
                                    <Sun
                                        className={cn(
                                            "h-4 w-4 relative z-10 transition-all duration-500 ease-in-out text-foreground-secondary group-hover:text-primary",
                                            theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                                        )}
                                    />
                                    <Moon
                                        className={cn(
                                            "absolute h-4 w-4 z-10 transition-all duration-500 ease-in-out text-foreground-secondary group-hover:text-primary",
                                            theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                                        )}
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileHover={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                            )}
                        </div>
                    </div>

                    <div className="flex md:hidden items-center space-x-3">
                        <MobileMenu />
                    </div>
                </div>
            </div>

            {/* Scroll Progress */}
            {scrollY > 100 && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[0.200rem] bg-linear-to-r from-transparent via-primary/50 to-transparent"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        className="h-full bg-linear-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={{
                            width: `${Math.min(
                                (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
                                100
                            )}%`,
                        }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    />
                </motion.div>
            )}
            {/* <p className="mb-20"></p> */}
        </motion.header>
    )
}