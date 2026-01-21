import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/constants";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/clsx/cn";
import { modalBackdrop, staggerContainer, staggerItem } from "@/motion/motion";
import { Sun, Moon, Github, Linkedin } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { SITE_CONFIG } from "@/data/constants"
import { hoverLift } from "@/motion/motion"
import { useScrollPosition } from "@/hooks/use-scroll-position";

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className = "" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { y: scrollY } = useScrollPosition({
    delay: 50,
    immediate: false,
  })

  const { theme, toggleTheme, mounted } = useTheme()

  const isScrolled = scrollY > 50
  // const isScrollingDown = direction === "down" && scrollY > 100
  // const shouldHide = isScrollingDown && scrollY > 200

  return (
    <div className={cn("md:hidden", className)}>
      {/* Menu Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        className={cn(
          "group relative z-50 flex h-11 w-11 items-center justify-center rounded-full glass border-custom text-foreground-muted hover:text-primary hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 overflow-hidden transition-all duration-300",
          isOpen ? "bg-primary/10 text-primary border-primary/40 shadow-glow" : ""
        )}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Menu className="h-5 w-5 relative z-10" />
        </motion.div>

        <motion.div
          className="absolute"
          animate={{ rotate: isOpen ? 0 : -90, scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <X className="h-5 w-5 z-10" />
        </motion.div>

        {/* Hover background */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              variants={modalBackdrop}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 z-50 h-screen w-80 max-w-[85vw] glass border-l border-custom"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <div className="flex h-full flex-col bg-mesh relative overflow-hidden">
                {/* Background gradient */}
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Header */}
                <motion.div
                  className="flex items-center justify-between p-6 border-b border-custom relative z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
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
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    className="group relative flex h-9 w-9 items-center justify-center rounded-lg text-foreground-muted hover:text-primary hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2"
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </motion.div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-6 relative z-10">
                  <motion.div
                    className="space-y-2"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {navigation.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div
                          key={item.name}
                          variants={staggerItem}
                        >
                          <NavLink
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "group relative flex items-center justify-between rounded-xl px-4 py-4 text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 overflow-hidden",
                              isActive
                                ? "bg-primary/10 text-primary shadow-card border border-primary/20"
                                : "text-foreground-secondary hover:text-foreground hover:bg-card"
                            )}
                          >
                            {/* Shimmer effect */}
                            <motion.span
                              className="absolute inset-0 rounded-xl bg-linear-to-r from-transparent via-primary/10 to-transparent"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            />

                            <span className="relative z-10 flex items-center space-x-3">
                              <span className="text-lg">{item.name}</span>
                            </span>

                            <div className="relative z-10 flex items-center space-x-2">
                              {isActive && (
                                <motion.div
                                  className="h-2 w-2 rounded-full bg-primary"
                                  animate={{ opacity: [1, 0.5, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                              )}
                              <motion.div
                                initial={{ opacity: 0, x: -5 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </motion.div>
                            </div>
                          </NavLink>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </nav>

                {/* Footer */}
                <motion.div
                  className="border-t border-custom p-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <div className="text-center">
                    <p className="caption text-foreground-muted">
                      © {new Date().getFullYear()} Portfolio. Crafted with passion.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}