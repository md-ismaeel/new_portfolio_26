import { SITE_CONFIG, socialLinks } from '@/data/constants';
import { NavLink } from 'react-router-dom';
import { motion, fadeInUp, staggerContainer, staggerItem } from '@/motion/motion';
import { SocialLink, type SocialLinkProps } from '@/components/common/SocialLink';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-16 pb-4 bg-secondary-background overflow-hidden" role="contentinfo">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            {/* Main footer content */}
            <div className="container-wide relative z-10">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 mb-5"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Brand Section */}
                    <motion.div className="space-y-6" variants={staggerItem}>
                        <NavLink
                            to="/"
                            className="group inline-flex items-center space-x-3 p-2 -m-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                            aria-label="Go to home"
                        >
                            <div className="relative">
                                <motion.div
                                    className="h-12 w-12 rounded-full shadow-card bg-card flex items-center justify-center relative overflow-hidden"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 0 20px rgba(66, 133, 244, 0.3)"
                                    }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <img
                                        src={SITE_CONFIG.portfolio}
                                        alt="Portfolio Logo"
                                        className="w-full h-full object-cover rounded-full"
                                    />

                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />
                                </motion.div>

                                {/* Glow ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-accent blur-md -z-10"
                                    initial={{ opacity: 0, scale: 1 }}
                                    whileHover={{ opacity: 0.3, scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            <div>
                                <h3 className="heading-sm gradient-text font-semibold">Portfolio</h3>
                            </div>
                        </NavLink>

                        <p className="text-sm text-foreground-secondary leading-relaxed max-w-md">
                            Full-stack developer passionate about creating beautiful, scalable web applications.
                            Specializing in React, Next.js, and modern web technologies.
                        </p>

                        <p className="text-xs text-foreground-muted">
                            Available for freelance projects and collaborations.
                        </p>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div className="space-y-6" variants={staggerItem}>
                        <h2 className="text-lg font-bold gradient-text">Let's Connect</h2>

                        <p className="text-sm text-foreground-secondary leading-relaxed">
                            Open to discussing new projects, creative ideas, or opportunities.
                            Let's build something amazing together!
                        </p>

                        <p className="text-xs text-foreground-muted">
                            Response time: Usually within 24 hours
                        </p>

                        {/* Social links */}
                        <motion.div
                            className="flex gap-4 pt-4 justify-center lg:justify-start"
                            variants={staggerItem}
                        >
                            {socialLinks.map((link: SocialLinkProps, i: number) => (
                                <SocialLink key={link.name} link={link} index={i} />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    className=""
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center border-top pt-3">
                        {/* Copyright */}
                        <p className="flex items-center gap-2 text-sm text-foreground-muted">
                            <span>© {currentYear} {SITE_CONFIG.author.name}. All rights reserved.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}