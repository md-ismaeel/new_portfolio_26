import { motion } from "@/motion/motion";
import { cn } from "@/lib/clsx/cn";

interface SkeletonProps {
  className?: string;
  animate?: boolean;
}

export function Skeleton({ className = "", animate = true }: SkeletonProps) {
  return (
    <motion.div
      className={cn(
        "rounded-lg bg-slate-200 dark:bg-slate-800",
        animate ? "animate-pulse" : "",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}

// ABOUT SECTION SKELETON
export function AboutSkeleton() {
  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            {/* Title */}
            <div className="space-y-3">
              <Skeleton className="h-12 w-3/4 max-w-md rounded-xl" />
              <Skeleton className="h-12 w-2/3 max-w-sm rounded-xl" />
            </div>

            {/* Typing Role */}
            <div className="space-y-2">
              <Skeleton className="h-10 w-1/2 max-w-xs rounded-lg" />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-5 w-full rounded" />
              <Skeleton className="h-5 w-full rounded" />
              <Skeleton className="h-5 w-4/5 rounded" />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-12 w-36 rounded-xl" />
              <Skeleton className="h-12 w-36 rounded-xl" />
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-10 rounded-full" />
              ))}
            </div>
          </div>

          {/* RIGHT - Profile 3D */}
          <div className="order-1 lg:order-2">
            <Skeleton className="h-96 w-full rounded-3xl" />
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <Skeleton className="h-12 w-32 rounded-full" />
        </div> */}
      </div>
    </section>
  );
}

// SKILLS SECTION SKELETON
export function SkillsSkeleton() {
  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <Skeleton className="h-12 w-full max-w-xs mx-auto rounded-xl" />
          <Skeleton className="h-5 w-full max-w-lg mx-auto rounded" />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-32 rounded-full" />
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="card-modern p-6 space-y-4">
                {/* Icon */}
                <Skeleton className="h-12 w-12 mx-auto rounded-xl" />
                {/* Title */}
                <Skeleton className="h-4 w-full rounded" />
                {/* Level */}
                <Skeleton className="h-2 w-3/4 mx-auto rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// PROJECTS SECTION SKELETON
export function ProjectsSkeleton() {
  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <Skeleton className="h-12 w-full max-w-sm mx-auto rounded-xl" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto rounded" />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-28 rounded-full" />
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="card-modern overflow-hidden">
                {/* Image */}
                <Skeleton className="h-48 w-full rounded-t-xl" />

                <div className="p-6 space-y-4">
                  {/* Title */}
                  <Skeleton className="h-6 w-3/4 rounded" />

                  {/* Description */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-2/3 rounded" />
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {[...Array(3)].map((_, j) => (
                      <Skeleton key={j} className="h-6 w-16 rounded-full" />
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Skeleton className="h-9 flex-1 rounded-lg" />
                    <Skeleton className="h-9 w-9 rounded-lg" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// EXPERIENCE SECTION SKELETON
export function ExperienceSkeleton() {
  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <Skeleton className="h-12 w-full max-w-md mx-auto rounded-xl" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto rounded" />
        </div>

        {/* Experience Timeline */}
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/20 via-accent/20 to-primary/20 rounded-full hidden md:block" />

          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <Skeleton className="absolute left-6 top-8 w-4 h-4 rounded-full hidden md:block" />

              {/* Card */}
              <div className="md:ml-20">
                <div className="card-modern p-6 space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-6 w-full max-w-xs rounded" />
                      <Skeleton className="h-5 w-full max-w-sm rounded" />
                    </div>
                    <Skeleton className="h-8 w-24 rounded-full" />
                  </div>

                  {/* Location & Type */}
                  <div className="flex gap-4">
                    <Skeleton className="h-4 w-32 rounded" />
                    <Skeleton className="h-4 w-24 rounded" />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-full rounded" />
                    <Skeleton className="h-4 w-3/4 rounded" />
                  </div>

                  {/* Technologies */}
                  <div className="flex gap-2 flex-wrap">
                    {[...Array(5)].map((_, j) => (
                      <Skeleton key={j} className="h-6 w-20 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CONTACT SECTION SKELETON
export function ContactSkeleton() {
  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <Skeleton className="h-12 w-full max-w-lg mx-auto rounded-xl" />
          <Skeleton className="h-5 w-full max-w-xl mx-auto rounded" />
        </div>

        {/* Form */}
        <div className="card-modern glass p-8 space-y-6">
          {/* Form Header */}
          <div className="text-center space-y-2">
            <Skeleton className="h-7 w-full max-w-xs mx-auto rounded" />
            <Skeleton className="h-4 w-full max-w-md mx-auto rounded" />
          </div>

          {/* Name & Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24 rounded" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 rounded" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20 rounded" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20 rounded" />
              <Skeleton className="h-4 w-16 rounded" />
            </div>
            <Skeleton className="h-40 w-full rounded-xl" />
          </div>

          {/* Submit Button */}
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </div>
    </section>
  );
}