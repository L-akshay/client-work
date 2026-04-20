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
        "h-full rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] p-8 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        active ? "opacity-100" : "opacity-50"
      )}
    >
      <div className="font-serif text-7xl leading-none text-[#C9A84C]/35">
        &ldquo;
      </div>
      <p className="mt-2 font-serif text-2xl font-light leading-relaxed text-[#F5F0E8]">
        {testimonial.quote}
      </p>
      <div className="mt-8 flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-full border border-[#C9A84C]/30 bg-[#0F0F0F] font-sans text-sm font-semibold text-[#C9A84C]">
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p className="font-sans text-sm uppercase tracking-[0.16em] text-[#F5F0E8]">
            {testimonial.name}
          </p>
          <p className="mt-1 font-sans text-sm text-[#888880]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  )
}
