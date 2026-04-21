import Image from "next/image"
import Link from "next/link"

import type { PortfolioItem } from "@/lib/data/portfolio"
import { cn } from "@/lib/utils"

type PortfolioCardProps = {
  item: PortfolioItem
  compact?: boolean
  preview?: boolean
}

export default function PortfolioCard({
  item,
  compact = false,
  preview = false,
}: PortfolioCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-[28px] border border-[#C9A84C]/15 bg-[#161616]",
        preview
          && "relative transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-[6px] hover:shadow-[0_28px_80px_rgba(15,15,15,0.45)]"
      )}
    >
      <div className="relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={compact ? 620 : 560}
          className={cn(
            "h-[320px] w-full object-cover transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)]",
            preview
              ? "duration-[600ms] group-hover:scale-[1.05]"
              : "duration-700 group-hover:scale-[1.06]"
          )}
        />
        {preview ? (
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(15,15,15,0.45)_0%,rgba(15,15,15,0.08)_45%,rgba(15,15,15,0)_100%)] opacity-70 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:opacity-100" />
        ) : null}
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
          href={`/case-studies/${item.slug}`}
          className="mt-6 inline-flex min-h-11 items-center font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C] transition-colors duration-700 hover:text-[#F5F0E8]"
        >
          <span
            className={cn(
              "transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
              preview && "lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100"
            )}
          >
            Read More -&gt;
          </span>
        </Link>
      </div>
    </article>
  )
}
