"use client"

import * as React from "react"
import { motion } from "framer-motion"

import type { ProjectCategory } from "@/lib/data/projects"
import { cn } from "@/lib/utils"

export type ProjectFilterValue = "All" | ProjectCategory

type ProjectFilterProps = {
  value: ProjectFilterValue
  options: ProjectFilterValue[]
  onChange: (value: ProjectFilterValue) => void
  className?: string
}

const EASE = [0.22, 0.08, 0.2, 1] as const

export default function ProjectFilter({
  value,
  options,
  onChange,
  className,
}: ProjectFilterProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-x-auto hide-scrollbar",
        className
      )}
      role="tablist"
      aria-label="Filter projects by category"
    >
      <div className="inline-flex min-w-full items-center gap-2 rounded-full border border-[#C9A84C]/15 bg-[#131313] p-1.5 shadow-[inset_0_0_0_1px_rgba(201,168,76,0.04)]">
        {options.map((option) => {
          const active = option === value

          return (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(option)}
              className={cn(
                "relative inline-flex min-h-10 items-center whitespace-nowrap rounded-full px-5 py-2 font-ui text-[11px] uppercase tracking-[0.26em] transition-colors duration-[700ms] ease-[cubic-bezier(0.22,0.08,0.2,1)]",
                active
                  ? "text-[#0F0F0F]"
                  : "text-[#888880] hover:text-[#F5F0E8]"
              )}
            >
              {active ? (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-[#C9A84C] shadow-[0_10px_30px_-8px_rgba(201,168,76,0.45)]"
                  transition={{ duration: 0.55, ease: EASE }}
                />
              ) : null}
              <span className="relative z-10">{option}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
