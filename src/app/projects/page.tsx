import type { Metadata } from "next"

import ProjectsCollection from "@/components/sections/ProjectsCollection"
import ProjectsHero from "@/components/sections/ProjectsHero"
import ProjectsClosing from "@/components/sections/ProjectsClosing"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated look at the campaigns and engagements that demonstrate how we apply PR strategy across industries, objectives, and markets.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsCollection />
      <ProjectsClosing />
    </>
  )
}
