import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '@/data/experience';
import { ExperienceCard } from '../components/cards/ExperienceCard';
import { textBlurIn, textReveal, staggerContainer, cardVariants } from '@/motion/motion';
import { BackgroundBlobs } from '@/components/effects/BackgroundBlobs';

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const toggleExpanded = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <BackgroundBlobs />

      {/* Header */}
      <motion.div
        ref={headerRef}
        className="text-center mb-12 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="display-md gradient-text mb-4"
          variants={textBlurIn}
        >
          Professional Experience
        </motion.h2>
        <motion.p
          className="body-lg text-foreground-secondary max-w-2xl mx-auto px-4"
          variants={textReveal}
        >
          A journey through my career highlights, showcasing growth, impact, and technical expertise
        </motion.p>
      </motion.div>

      <div className="container-narrow relative z-10">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-accent to-primary rounded-full hidden md:block" />

          {/* Experience cards */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative"
                variants={cardVariants}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-8 w-4 h-4 bg-card border-4 border-primary rounded-full shadow-glow hidden md:block z-10"
                  whileHover={{
                    scale: 1.3,
                    boxShadow: "0 0 20px rgba(66, 133, 244, 0.6)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />

                {/* Card */}
                <div className="md:ml-20">
                  <ExperienceCard
                    experience={experience}
                    index={index}
                    isExpanded={expandedId === experience.id}
                    onToggle={() => toggleExpanded(experience.id)}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
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

      <motion.div
        className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
}