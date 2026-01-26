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
        "rounded-lg skeleton-bg",
        animate ? "animate-pulse" : "",
        className,
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

// MEETING SCHEDULER SECTION SKELETON
export function MeetingSchedulerSkeleton() {
  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <div className="container-content relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          {/* Title with Icon - inline layout */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Skeleton className="h-12 w-12 rounded-xl" />
            <Skeleton className="h-12 w-64 max-w-full rounded-xl" />
          </div>

          {/* Description */}
          <div className="space-y-2 max-w-2xl mx-auto px-4">
            <Skeleton className="h-5 w-full rounded" />
            <Skeleton className="h-5 w-full rounded" />
            <Skeleton className="h-5 w-3/4 mx-auto rounded" />
          </div>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto">
          <div className="card-modern glass p-4 sm:p-6 lg:p-8 space-y-8">
            {/* Duration Selection */}
            <div className="space-y-4">
              <Skeleton className="h-4 w-32 rounded" />
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[...Array(2)].map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full rounded-xl" />
                ))}
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-4 w-16 rounded" />
                  <Skeleton className="h-12 w-full rounded-xl" />
                </div>
              ))}
            </div>

            {/* Generate Button */}
            <div className="pt-4">
              <Skeleton className="h-12 sm:h-14 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// BLOG PAGE SKELETON
export function BlogSkeleton() {
  return (
    <section className="bg-mesh section-y relative overflow-hidden">
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <Skeleton className="h-12 w-full max-w-xs mx-auto rounded-xl" />
          <Skeleton className="h-5 w-full max-w-2xl mx-auto rounded" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-full" />
          ))}
        </div>

        {/* Featured Post */}
        <div className="glass card-modern shadow-float mb-16 overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            <Skeleton className="h-64 md:h-full w-full" />

            {/* Content */}
            <div className="p-8 space-y-4">
              {/* Meta */}
              <div className="flex items-center gap-3">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-4 w-2 rounded" />
                <Skeleton className="h-4 w-16 rounded" />
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Skeleton className="h-8 w-full rounded" />
                <Skeleton className="h-8 w-3/4 rounded" />
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-2/3 rounded" />
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-1">
                  <Skeleton className="h-4 w-24 rounded" />
                  <Skeleton className="h-3 w-16 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="card-modern overflow-hidden">
              {/* Image */}
              <Skeleton className="h-48 w-full" />

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-3">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-4 w-16 rounded" />
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <Skeleton className="h-6 w-full rounded" />
                  <Skeleton className="h-6 w-3/4 rounded" />
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full rounded" />
                  <Skeleton className="h-4 w-full rounded" />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-top">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-4 w-20 rounded" />
                  </div>
                  <Skeleton className="h-4 w-16 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mb-16">
          <Skeleton className="h-12 w-48 rounded-xl" />
        </div>

        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto">
          <div className="card-modern glass p-8 sm:p-12 space-y-6 text-center">
            {/* Title */}
            <Skeleton className="h-10 w-48 mx-auto rounded-xl" />

            {/* Description */}
            <div className="space-y-2 max-w-xl mx-auto">
              <Skeleton className="h-5 w-full rounded" />
              <Skeleton className="h-5 w-3/4 mx-auto rounded" />
            </div>

            {/* Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Skeleton className="flex-1 h-12 rounded-lg" />
              <Skeleton className="h-12 w-full sm:w-32 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}