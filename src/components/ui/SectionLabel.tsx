import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionLabelProps = {
  label: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  variant?: "premium" | "classic"
  className?: string
}

export default function SectionLabel({
  label,
  title,
  description,
  align = "left",
  variant = "premium",
  className,
}: SectionLabelProps) {
  if (variant === "classic") {
    return (
      <div
        className={cn(
          align === "center" && "mx-auto text-center",
          className
        )}
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#C9A84C]">
          {label}
        </p>
        {typeof title === "string" ? (
          <h2 className="mt-5 font-serif text-4xl font-light leading-[0.95] text-[#F5F0E8] sm:text-5xl md:text-6xl">
            {title}
          </h2>
        ) : (
          title
        )}
        {description
          ? typeof description === "string"
            ? (
              <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#888880] sm:text-lg">
                {description}
              </p>
            )
            : description
          : null}
      </div>
    )
  }

  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div className={cn("inline-flex flex-col", align === "center" && "items-center")}>
        <p className="font-ui text-[11px] tracking-[0.34em] uppercase text-[#C9A84C]">
          {label}
        </p>
        <span
          className={cn(
            "mt-4 h-px w-20 bg-gradient-to-r from-[#C9A84C] to-transparent",
            align === "center"
              && "w-28 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent"
          )}
        />
      </div>
      {typeof title === "string" ? (
        <h2 className="mt-6 font-serif text-4xl font-light leading-[0.95] text-[#F5F0E8] sm:text-5xl md:text-6xl">
          {title}
        </h2>
      ) : (
        title
      )}
      {description
        ? typeof description === "string"
          ? (
            <p className="mt-6 max-w-2xl font-ui text-[15px] leading-[1.9] text-[#888880] sm:text-[17px]">
              {description}
            </p>
          )
          : description
        : null}
    </div>
  )
}
