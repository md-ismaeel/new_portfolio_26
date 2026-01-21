import { useState, useRef } from "react"
import { AnimatePresence, useInView } from "motion/react"
import { categoryConfig, getSkillsByCategory } from "@/data/skills"
import { SkillCard } from "@/components/cards/SkillCard"
import type { JSX } from "react";
import type { Skill } from "@/types/index"
import { textReveal, textBlurIn, staggerContainer, staggerFastContainer, cardVariants, motion, scaleIn } from "@/motion/motion"
import { BackgroundBlobs } from "@/components/effects/BackgroundBlobs"
import { SkillCategoryButton } from "@/components/ui/SkillCategoryButton";
import { cn } from "@/lib/clsx/cn";

type CategoryKey = keyof typeof categoryConfig

interface SkillCardWrapperProps {
  skill: Skill
  index: number
}

function SkillCardWrapper({ skill, index }: SkillCardWrapperProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  })

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      whileHover={{
        y: -8,
        scale: 1.03,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17
        }
      }}
      transition={{
        delay: index * 0.05
      }}
    >
      <SkillCard skill={skill} index={index} />
    </motion.div>
  )
}

export default function Skills(): JSX.Element {
  const categories = Object.keys(categoryConfig) as CategoryKey[]
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>(categories[0])

  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 })

  const filteredSkills = getSkillsByCategory(selectedCategory)

  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <BackgroundBlobs opacity="normal" blur="normal" />

      {/* Heading */}
      <motion.div
        ref={headerRef}
        className="text-center mb-12 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
      >
        <motion.div variants={textBlurIn}>
          <h2 className={cn('display-md', 'gradient-text mb-3')}>Skills & Expertise</h2>
        </motion.div>

        <motion.p
          className="body-lg text-foreground-secondary max-w-2xl mx-auto px-4"
          variants={textReveal}
        >
          Explore my technical proficiencies across different domains
        </motion.p>
      </motion.div>

      {/* Category Buttons */}
      <motion.div
        className="w-full flex flex-col md:flex-row justify-center gap-3 mb-12 relative z-10 px-4"
        variants={staggerFastContainer}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category}
            variants={scaleIn}
            custom={index}
            whileHover={{
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 17
              }
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 20
              }
            }}
          >
            <SkillCategoryButton
              category={category}
              isSelected={selectedCategory === category}
              onClick={setSelectedCategory}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Cards */}
      <div className="container-wide relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: {
                duration: 0.3,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
          >
            {filteredSkills.map((skill, index) => (
              <SkillCardWrapper
                key={`${skill.name}-${selectedCategory}-${index}`}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="body-lg text-foreground-secondary">
              No skills found in this category
            </p>
          </motion.div>
        )}
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/40 pointer-events-none" />
    </section>
  )
}