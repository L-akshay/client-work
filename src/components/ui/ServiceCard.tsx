import Image from "next/image"
import Link from "next/link"

import type { Service } from "@/lib/data/services"

type ServiceCardProps = {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#C9A84C]/15 bg-[#161616]">
      <div className="overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={720}
          height={540}
          className="h-64 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.06]"
        />
      </div>

      <div className="p-8">
        <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C]">
          {service.eyebrow}
        </p>
        <h3 className="mt-4 font-serif text-3xl font-light text-[#F5F0E8]">
          {service.title}
        </h3>
        <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
          {service.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {service.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-[#C9A84C]/20 px-3 py-2 font-sans text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]"
            >
              {keyword}
            </span>
          ))}
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="mt-7 inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C] transition-colors duration-700 hover:text-[#F5F0E8]"
        >
          Explore Service -&gt;
        </Link>
      </div>
    </article>
  )
}
