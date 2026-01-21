import { type Skill } from '@/types/index';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cardHover } from '@/motion/motion';
import type { JSX } from 'react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export const SkillCard = ({ skill, index }: SkillCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: false,      // 👈 re-animate on scroll back
    margin: '-80px',
  });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      variants={cardHover}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.05 }} // 👈 stagger
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div className="card-modern relative overflow-hidden h-full rounded-2xl cursor-pointer">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 0.08 : 0,
            background: isHovered
              ? `radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.12) 0%, transparent 70%)`
              : 'transparent',
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center h-full py-3 px-3">
          <motion.div
            className="relative mb-3"
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="w-16 h-16 bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center relative overflow-hidden border border-primary/20"
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                borderColor: 'rgba(66, 133, 244, 0.4)',
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
              }}
            >
              <motion.div
                className="w-9 h-9 shrink-0 [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current text-primary relative z-10"
                dangerouslySetInnerHTML={{ __html: skill.icon || '' }}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 360 : 0,
                }}
                transition={{
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h3
            className="text-base font-semibold text-foreground capitalize"
            animate={{
              scale: isHovered ? 1.02 : 1,
              y: isHovered ? -1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {skill.name}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};
