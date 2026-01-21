import { type Project } from "@/types/index";
import { Calendar, ExternalLink, Github, Tag, Globe } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "@/motion/motion";
import { cardVariants } from "@/motion/motion";
import Button from "../ui/Button";
import { cn } from "@/lib/clsx/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
  }).format(project.createdAt);

  const visibleTechs = project.technologies.slice(0, 5);
  const remainingTechCount = Math.max(0, project.technologies.length - 4);

  return (
    <motion.div
      ref={ref}
      className="h-full group"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-modern h-full flex flex-col relative overflow-hidden p-4">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 0.05 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.2) 0%, transparent 70%)",
          }}
        />

        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl mb-3 bg-linear-to-br from-primary/5 to-accent/5">
          <div className="aspect-video w-full relative">
            {!imageError ? (
              <>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shimmer effect */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/10 to-accent/10">
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 bg-linear-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-glow"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Tag className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="text-sm font-semibold gradient-text px-4">
                    {project.title}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Floating action buttons */}
          <motion.div
            className="absolute bottom-3 right-3 flex gap-2"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full p-2.5 backdrop-blur-xl border border-white/20 hover:border-primary/40"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 text-foreground hover:text-primary transition-colors" />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-full p-2.5 backdrop-blur-xl border border-white/20 hover:border-primary/40"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4 text-foreground hover:text-primary transition-colors" />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col space-y-3 relative z-10">
          <motion.h3
            className="text-lg font-bold gradient-text line-clamp-1"
            animate={{ x: isHovered ? 2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          <div className="flex justify-between items-center gap-2">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 whitespace-nowrap">
              {project.type}
            </span>
            <div className="flex items-center text-xs text-foreground-muted whitespace-nowrap">
              <Calendar className="w-3 h-3 mr-1" />
              <span className="font-medium">{formattedDate}</span>
            </div>
          </div>

          <p className="text-sm text-foreground-secondary leading-relaxed line-clamp-2">
            {project.longDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 min-h-7">
            {visibleTechs.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                className="glass rounded-full px-2 py-0.5 text-xs font-medium text-primary border border-primary/20 backdrop-blur-sm whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  y: -1,
                  boxShadow: "0 4px 12px rgba(66, 133, 244, 0.3)",
                }}
              >
                {tech}
              </motion.span>
            ))}
            {remainingTechCount > 0 && (
              <span className="glass px-2 py-0.5 text-xs font-medium text-foreground-muted rounded-full border border-custom backdrop-blur-sm whitespace-nowrap">
                +{remainingTechCount}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-auto pt-2">
            {project.githubUrl && (
              <Button
                variant="secondary"
                className={cn(
                  " justify-center text-xs py-2 px-3",
                  project.liveUrl ? "flex-1" : ""
                )}
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </Button>

            )}
            {project.liveUrl && (
              <Button
                variant="primary"
                className={cn(
                  "flex-1 justify-center text-xs py-2 px-3",
                  project.githubUrl ? "ml-auto" : ""
                )}
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live</span>
              </Button>
            )}
          </div>
        </div>

        {/* Hover border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
          animate={{
            borderColor: isHovered
              ? "rgba(66, 133, 244, 0.3)"
              : "transparent",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Corner accents */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(66, 133, 244, 0.15) 0%, transparent 70%)",
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-16 h-16 rounded-bl-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at bottom left, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating particles */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary/50 pointer-events-none"
                initial={{
                  x: Math.random() * 60 - 30,
                  y: 0,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  y: -60,
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{
                  left: `${25 + i * 25}%`,
                  bottom: "20%",
                }}
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
}
