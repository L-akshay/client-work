import { cn } from "@/lib/utils"

type SectionLabelProps = {
  label: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export default function SectionLabel({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionLabelProps) {
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
      <h2 className="mt-5 font-serif text-4xl font-light leading-[0.95] text-[#F5F0E8] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-[#888880] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
