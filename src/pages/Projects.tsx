import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { getProjectsByCategory, projectConfig } from "@/data/projects"
import ProjectCard from "@/components/cards/ProjectCard"
import { Tag } from "lucide-react"
import type { JSX } from "react/jsx-runtime"
import { textBlurIn, textReveal, staggerContainer, staggerFastContainer, scaleIn } from "@/motion/motion"
import { BackgroundBlobs } from "@/components/effects/BackgroundBlobs"
import { ProjectCategoryButton } from "@/components/ui/ProjectCategoryButton"

type CategoryKey = keyof typeof projectConfig


export default function Projects(): JSX.Element {
  const categories = Object.keys(projectConfig) as CategoryKey[]
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>(categories[0])
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 })

  const filteredProjects = getProjectsByCategory(selectedCategory)

  return (
    <section className="bg-mesh section-y relative overflow-hidden h-auto">
      <BackgroundBlobs />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="container-content text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          <motion.h1
            className="display-md gradient-text mb-4"
            variants={textBlurIn}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="body-lg text-foreground-secondary max-w-2xl mx-auto px-4 mb-4"
            variants={textReveal}
          >
            A collection of projects showcasing my skills in web development, design, and problem-solving
          </motion.p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          className="container-wide w-full flex flex-col md:flex-row justify-center gap-3 mb-12 px-4"
          variants={staggerFastContainer}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              variants={scaleIn}
              custom={index}
            >
              <ProjectCategoryButton
                category={category}
                isSelected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="container-wide px-4">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-24 h-24 bg-linear-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Tag className="w-12 h-12 text-primary" />
              </motion.div>
              <h3 className="heading-sm text-foreground mb-2">
                No projects found
              </h3>
              <p className="body-md text-foreground-secondary">
                Check back soon for more projects in this category
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"
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
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"
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

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background/40 pointer-events-none" />
    </section>
  )
}