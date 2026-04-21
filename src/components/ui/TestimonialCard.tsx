import { cn } from "@/lib/utils"
import type { Testimonial } from "@/lib/data/testimonials"

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
}

type TestimonialCardProps = {
  testimonial: Testimonial
  active?: boolean
}

export default function TestimonialCard({
  testimonial,
  active = false,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "relative h-full overflow-hidden rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] p-8 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        active
          ? "opacity-100 shadow-[0_28px_90px_rgba(15,15,15,0.26)]"
          : "opacity-50"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.08)_0%,rgba(201,168,76,0.02)_22%,rgba(22,22,22,0)_60%)]" />
      <div className="relative font-serif text-7xl leading-none text-[#C9A84C]/35">
        &ldquo;
      </div>
      <p className="relative mt-2 font-serif text-2xl font-light leading-relaxed text-[#F5F0E8]">
        {testimonial.quote}
      </p>
      <div className="relative mt-8 flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#0F0F0F] font-ui text-sm font-semibold text-[#C9A84C]">
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p className="font-ui text-[11px] uppercase tracking-[0.24em] text-[#F5F0E8]">
            {testimonial.name}
          </p>
          <p className="mt-1 font-ui text-sm text-[#888880]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  )
}
