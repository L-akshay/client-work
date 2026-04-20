import Image from "next/image"
import Link from "next/link"

import type { PortfolioItem } from "@/lib/data/portfolio"

type PortfolioCardProps = {
  item: PortfolioItem
  compact?: boolean
}

export default function PortfolioCard({
  item,
  compact = false,
}: PortfolioCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#C9A84C]/15 bg-[#161616]">
      <div className="overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={compact ? 620 : 560}
          className="h-[320px] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.06]"
        />
      </div>

      <div className="p-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[#C9A84C]/20 px-3 py-2 font-sans text-[11px] uppercase tracking-[0.22em] text-[#C9A84C]">
            {item.category}
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#888880]">
            {item.client}
          </span>
        </div>

        <h3 className="mt-5 font-serif text-3xl font-light text-[#F5F0E8]">
          {item.title}
        </h3>
        <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
          {item.result}
        </p>
        <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
          {item.excerpt}
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C] transition-colors duration-700 hover:text-[#F5F0E8]"
        >
          Read More -&gt;
        </Link>
      </div>
    </article>
  )
}
