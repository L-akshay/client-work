import Image from "next/image"
import { Check } from "lucide-react"

import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"

const checklist = [
  "Creative PR strategy built around business goals",
  "Wide media relations across national and niche titles",
  "Comprehensive campaign orchestration from idea to coverage",
  "Local and global visibility planning for scaling brands",
  "Veteran PR specialists with execution depth",
  "Cost-effective, result-oriented communications programs",
  "Strong client success track record across categories",
  "Trust-driven service with measurable reporting",
]

export default function WhyChoosePR() {
  return (
    <section className="bg-[#0F0F0F] px-5 py-18 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <FadeUp delay={0}>
          <SectionLabel
            label="Why Choose A PR Agency"
            title="The right PR partner should strengthen credibility, speed, and clarity."
            description="A strong agency does more than secure mentions. It sharpens your story, protects your reputation, builds trust with the right audience, and keeps visibility connected to business outcomes."
          />
          <div className="mt-10 grid gap-4">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-[24px] border border-[#C9A84C]/12 bg-[#161616] p-4"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/25 bg-[#0F0F0F] text-[#C9A84C]">
                  <Check className="size-4" />
                </span>
                <p className="font-sans text-sm leading-relaxed text-[#F5F0E8]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="overflow-hidden rounded-[32px] border border-[#C9A84C]/15">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
              alt="Team presentation for communications planning"
              width={900}
              height={1040}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.06]"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
