import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";
import RootLayout from "@/layout/layout";
import Wrapper from "@/layout/Wrapper";
import {
    AboutSkeleton,
    BlogSkeleton,
    ContactSkeleton,
    ExperienceSkeleton,
    MeetingSchedulerSkeleton,
    ProjectsSkeleton,
    SkillsSkeleton,
} from "@/components/skeletons/skeleton";
import NotFound from "@/components/common/NotFound";

const About = lazy(() => import("@/pages/About"));
const Skills = lazy(() => import("@/pages/Skills"));
const Projects = lazy(() => import("@/pages/Projects"));
const Experience = lazy(() => import("@/pages/Experience"));
const Contact = lazy(() => import("@/pages/Contact"));
// const Blog = lazy(() => import("@/pages/Blog"));
const MeetingScheduler = lazy(() => import("@/pages/GoogleMeet"))

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Wrapper />,
            },
            {
                path: "/home",
                element: (
                    <Suspense fallback={<AboutSkeleton />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/skills",
                element: (
                    <Suspense fallback={<SkillsSkeleton />}>
                        <Skills />
                    </Suspense>
                ),
            },
            {
                path: "/projects",
                element: (
                    <Suspense fallback={<ProjectsSkeleton />}>
                        <Projects />
                    </Suspense>
                ),
            },
            {
                path: "/experience",
                element: (
                    <Suspense fallback={<ExperienceSkeleton />}>
                        <Experience />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<ContactSkeleton />}>
                        <Contact />
                    </Suspense>
                ),
            },
            {
                path: "/blog",
                element: (
                    <Suspense fallback={<BlogSkeleton />}>
                        {/* <Blog /> */}
                         <div className="bg-mesh min-h-screen w-full display-md text-primary text-center section-y">Blog coming soon</div>
                    </Suspense>
                ),
            },

            {
                path: "/google",
                element: (
                    <Suspense fallback={<MeetingSchedulerSkeleton />}>
                        <MeetingScheduler />
                    </Suspense>
                ),
            },
        ],
    },
]);
