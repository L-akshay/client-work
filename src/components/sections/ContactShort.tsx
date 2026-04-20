import Link from "next/link"

import ContactForm from "@/components/ui/ContactForm"
import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"

export default function ContactShort() {
  return (
    <section className="px-5 py-18 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <FadeUp delay={0}>
          <SectionLabel
            label="Contact"
            title="Start the conversation."
            description="Share a few details and we will come back with the right next step."
            align="center"
            className="max-w-3xl"
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-12 rounded-[32px] border border-[#C9A84C]/15 bg-[#161616] p-8 lg:p-10">
            <ContactForm compact />
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C] transition-colors duration-700 hover:text-[#F5F0E8]"
            >
              See full contact -&gt;
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
