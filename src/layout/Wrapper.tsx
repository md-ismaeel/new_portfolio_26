import { lazy } from "react"
import LazySection from "@/layout/LazySection"

import {
    AboutSkeleton,
    ExperienceSkeleton,
    MeetingSchedulerSkeleton,
    ProjectsSkeleton,
    SkillsSkeleton,
} from "@/components/skeletons/skeleton";

const About = lazy(() => import("@/pages/About"))
const Skills = lazy(() => import("@/pages/Skills"))
const Projects = lazy(() => import("@/pages/Projects"))
const Experience = lazy(() => import("@/pages/Experience"))
const MeetingScheduler = lazy(() => import("@/pages/GoogleMeet"))


export default function Wrapper() {
    return (
        <>
            <LazySection skeleton={<AboutSkeleton />}>
                <About />
            </LazySection>

            <LazySection skeleton={<SkillsSkeleton />}>
                <Skills />
            </LazySection>

            <LazySection skeleton={<ProjectsSkeleton />}>
                <Projects />
            </LazySection>

            <LazySection skeleton={<ExperienceSkeleton />}>
                <Experience />
            </LazySection>

            <LazySection skeleton={<MeetingSchedulerSkeleton />}>
                <MeetingScheduler />
            </LazySection>
        </>
    )
}
