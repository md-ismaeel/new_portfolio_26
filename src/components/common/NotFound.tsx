import React from 'react';
import { motion, useInView, fadeInUp, scaleIn, staggerContainer, staggerItem, float } from '@/motion/motion';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative h-auto flex items-center justify-center bg-primary-background overflow-hidden py-6">

      {/* Animated background mesh */}
      <div className="absolute inset-0 bg-mesh opacity-50" />

      {/* Floating background elements */}
      <motion.div
        animate={float}
        className="absolute -top-37.5 -left-37.5 w-100 h-100 rounded-full bg-primary/30 blur-3xl"
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop"
          }
        }}
        className="absolute -bottom-37.5 -right-37.5 w-100 h-100 rounded-full bg-accent/30 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 12, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop"
          }
        }}
        className="absolute top-[50%] left-[50%] w-75 h-75 rounded-full bg-primary/20 blur-3xl"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Main content */}
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 container-narrow"
      >
        <motion.div
          variants={scaleIn}
          className="glass card-modern shadow-float max-w-2xl mx-auto text-center p-8 md:p-12"
        >
          {/* Animated 404 */}
          <motion.div
            variants={fadeInUp}
            className="relative mb-6"
          >
            <motion.h1
              className="text-[120px] md:text-[180px] font-extrabold gradient-text leading-none"
              animate={{
                scale: [1, 1.02, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "loop"
                }
              }}
            >
              404
            </motion.h1>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-primary/50"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="heading-lg mb-4"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="body-lg mb-8 max-w-md mx-auto"
          >
            Oops! The page you're looking for seems to have wandered off into the digital void. Let's get you back on track.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              variant='primary'
              onClick={() => window.location.href = '/'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Button>

            <Button
              variant='secondary'
              onClick={() => window.history.back()}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </Button>
          </motion.div>

          {/* Additional help section */}
          <motion.div
            variants={staggerItem}
            className="mt-5 pt-3 border-top"
          >
            <p className="caption mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Home', 'Blog', 'Contact'].map((link, i) => (
                <motion.a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-sm text-foreground-muted hover:text-primary transition-colors duration-200 px-3 py-1 rounded-lg hover:bg-background-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>


      </motion.div>
    </div>
  );
}