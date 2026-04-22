"use client"

import { motion } from "framer-motion"

import ProjectMetrics from "@/components/ui/ProjectMetrics"
import type { ProjectItem } from "@/lib/data/projects"

type ProjectCaseStudyProps = {
  project: ProjectItem
  index: number
}

const EASE = [0.22, 0.08, 0.2, 1] as const

export default function ProjectCaseStudy({
  project,
  index,
}: ProjectCaseStudyProps) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      id={project.slug}
      data-category={project.category}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.95, ease: EASE }}
      className="relative scroll-mt-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={`absolute ${
            isEven ? "right-[-6%] top-[-8%]" : "left-[-6%] top-[-8%]"
          } size-80 rounded-full bg-[#C9A84C]/[0.03] blur-3xl animate-float-orb`}
        />
      </div>

      <div className="relative overflow-hidden rounded-[36px] border border-[#C9A84C]/12 bg-[#141414]">
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.05)_0%,rgba(201,168,76,0.015)_30%,rgba(15,15,15,0)_65%)]" />

        <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:p-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
              className="flex items-baseline gap-6"
            >
              <span className="font-serif text-6xl font-light leading-none text-[#C9A84C]/50 sm:text-7xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-ui text-[11px] uppercase tracking-[0.32em] text-[#C9A84C]">
                {project.category}
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.12 }}
              className="mt-7 font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.04] text-[#F5F0E8]"
            >
              {project.title}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              <div className="rounded-[18px] border border-[#C9A84C]/10 bg-[#0F0F0F] px-5 py-4">
                <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-[#888880]">
                  Market
                </p>
                <p className="mt-2 font-serif text-xl font-light text-[#F5F0E8]">
                  {project.market}
                </p>
              </div>
              <div className="rounded-[18px] border border-[#C9A84C]/10 bg-[#0F0F0F] px-5 py-4">
                <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-[#888880]">
                  Duration
                </p>
                <p className="mt-2 font-serif text-xl font-light text-[#F5F0E8]">
                  {project.duration}
                </p>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.18 }}
              className="font-ui text-[15px] leading-[1.9] text-[#888880] sm:text-[17px]"
            >
              {project.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.28 }}
              className="mt-10"
            >
              <p className="font-ui text-[10px] uppercase tracking-[0.32em] text-[#C9A84C]">
                Outcomes
              </p>
              <div className="mt-5 h-px w-16 bg-gradient-to-r from-[#C9A84C] to-transparent" />
            </motion.div>

            <ProjectMetrics outcomes={project.outcomes} className="mt-6" />
          </div>
        </div>
      </div>
    </motion.article>
  )
}
