"use client"

import ClosingCta from "@/components/ui/ClosingCta"
import { projectsClosingCta } from "@/lib/data/projects"

export default function ProjectsClosing() {
  return (
    <ClosingCta
      eyebrow="The Next Project"
      heading={[
        "Every project begins with a conversation",
        "about your specific situation.",
      ]}
      supporting={projectsClosingCta.supporting}
      primaryCta={{ href: "/contact", label: projectsClosingCta.button }}
    />
  )
}
