import Link from "next/link"
import {
  BriefcaseBusiness,
  Camera,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react"

import ContactForm from "@/components/ui/ContactForm"
import FadeUp from "@/components/ui/FadeUp"
import SectionLabel from "@/components/ui/SectionLabel"

const socials = [
  { icon: Camera, href: "#" },
  { icon: Send, href: "#" },
  { icon: BriefcaseBusiness, href: "#" },
  { icon: MessageCircle, href: "#" },
]

export default function Contact() {
  return (
    <section className="px-5 py-18 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeUp delay={0}>
          <SectionLabel
            label="Contact"
            title="Let&apos;s talk about what comes next."
            description="Tell us what you are building, launching, or trying to solve. We will shape the right communications approach around it."
          />
        </FadeUp>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeUp delay={0.1}>
            <div className="rounded-[32px] border border-[#C9A84C]/15 bg-[#161616] p-8 lg:p-10">
              <ContactForm />
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-6">
              <div className="rounded-[32px] border border-[#C9A84C]/15 bg-[#161616] p-8">
                <h3 className="font-serif text-3xl font-light text-[#F5F0E8]">
                  Contact Info
                </h3>
                <div className="mt-6 space-y-5">
                  {[
                    {
                      icon: MapPin,
                      text: "387 Park Avenue South, 8th Floor, New York, NY 10016, USA",
                    },
                    { icon: Clock, text: "Monday - Friday, 9am to 6pm" },
                    { icon: Phone, text: "+1 (212) 555-0134" },
                    { icon: Mail, text: "hello@novapr.co" },
                  ].map((item) => {
                    const Icon = item.icon

                    return (
                      <div key={item.text} className="flex items-start gap-4">
                        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[#C9A84C]/20 bg-[#0F0F0F] text-[#C9A84C]">
                          <Icon className="size-4" />
                        </span>
                        <p className="pt-2 font-sans text-sm leading-relaxed text-[#888880]">
                          {item.text}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-[#C9A84C]/15 bg-[#161616]">
                <iframe
                  title="NovaPR office location"
                  src="https://www.google.com/maps?q=387%20Park%20Avenue%20South%20New%20York%20NY&output=embed"
                  className="h-[320px] w-full grayscale contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] p-6">
                  <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C]">
                    Office Hours
                  </p>
                  <p className="mt-4 font-serif text-2xl font-light text-[#F5F0E8]">
                    Mon to Fri
                  </p>
                  <p className="mt-2 font-sans text-sm text-[#888880]">
                    9:00 AM to 6:00 PM
                  </p>
                </div>

                <div className="rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] p-6">
                  <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C]">
                    Follow Us
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {socials.map((item, index) => {
                      const Icon = item.icon

                      return (
                        <Link
                          key={`${item.href}-${index}`}
                          href={item.href}
                          className="inline-flex size-11 items-center justify-center rounded-full border border-[#2A2A2A] text-[#888880] transition-all duration-700 hover:border-[#C9A84C] hover:text-[#C9A84C]"
                        >
                          <Icon className="size-4" />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
