import { serviceTickerTags } from "@/lib/data/services"

import { cn } from "@/lib/utils"

type ServiceTagTickerProps = {
  className?: string
  duration?: string
}

export default function ServiceTagTicker({
  className,
  duration = "32s",
}: ServiceTagTickerProps) {
  const duplicatedTags = [...serviceTickerTags, ...serviceTickerTags, ...serviceTickerTags]

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border border-[#C9A84C]/15 bg-[#161616]",
        className
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        className="flex w-max items-center gap-4 whitespace-nowrap py-3 animate-marquee-left hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
        aria-hidden="true"
      >
        {duplicatedTags.map((tag, index) => (
          <div key={`${tag}-${index}`} className="flex items-center gap-4">
            <span className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#C9A84C] sm:text-xs">
              {tag}
            </span>
            <span className="text-sm text-[#C9A84C]/35">|</span>
          </div>
        ))}
      </div>
    </div>
  )
}
