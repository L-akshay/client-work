import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"
import { cn } from "@/lib/utils"

export type FaqSectionItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  label: string
  title: string
  description: string
  items: FaqSectionItem[]
  defaultValue?: string
  className?: string
  aside?: {
    eyebrow?: string
    title: string
    description: string
    points?: string[]
  }
}

export default function FaqSection({
  label,
  title,
  description,
  items,
  defaultValue = "faq-0",
  className,
  aside,
}: FaqSectionProps) {
  return (
    <div className={cn("grid gap-10 lg:grid-cols-[0.82fr_1.18fr]", className)}>
      <div className="space-y-6">
        <FadeUp delay={0}>
          <SectionLabel
            label={label}
            title={title}
            description={description}
            className="max-w-3xl"
          />
        </FadeUp>

        {aside ? (
          <FadeUp delay={0.05}>
            <div className="relative overflow-hidden rounded-[32px] border border-[#C9A84C]/15 bg-[#161616] p-7">
              <div className="pointer-events-none absolute right-0 top-0 size-36 rounded-full bg-[#C9A84C]/[0.05] blur-3xl animate-float-orb" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

              {aside.eyebrow ? (
                <p className="relative font-ui text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
                  {aside.eyebrow}
                </p>
              ) : null}

              <h3 className="relative mt-5 font-serif text-3xl font-light leading-[1.02] text-[#F5F0E8]">
                {aside.title}
              </h3>
              <p className="relative mt-4 font-ui text-[15px] leading-[1.9] text-[#888880] sm:text-[17px]">
                {aside.description}
              </p>

              {aside.points?.length ? (
                <div className="relative mt-7 space-y-3">
                  {aside.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[22px] border border-[#C9A84C]/10 bg-[#111111] px-4 py-4 font-ui text-sm leading-relaxed text-[#888880]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </FadeUp>
        ) : null}
      </div>

      <FadeUp delay={0.08}>
        <div className="relative overflow-hidden rounded-[36px] border border-[#C9A84C]/15 bg-[#161616] p-5 sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/65 to-transparent" />
          <Accordion type="single" collapsible defaultValue={defaultValue} className="gap-4">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="rounded-[26px] border border-[#C9A84C]/10 bg-[#111111] px-5 transition-all duration-500 data-[state=open]:border-[#C9A84C]/25 data-[state=open]:bg-[#161616]"
              >
                <AccordionTrigger className="gap-4 py-5 text-left font-serif text-[24px] font-light leading-[1.1] text-[#F5F0E8] hover:no-underline sm:text-[30px]">
                  <span className="flex items-start gap-4">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/20 bg-[#0F0F0F] font-ui text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1">{item.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-14 font-ui text-[15px] leading-[1.9] text-[#888880] sm:text-[17px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeUp>
    </div>
  )
}
