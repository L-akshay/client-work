import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type GoldButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function GoldButton({
  href,
  children,
  className,
}: GoldButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border border-[#C9A84C] bg-[#C9A84C] px-7 py-3 font-sans text-xs tracking-[0.22em] uppercase text-[#0F0F0F] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-[1.02]",
        className
      )}
    >
      <span className="absolute inset-y-0 left-[-28%] w-1/4 -skew-x-12 bg-[rgba(245,240,232,0.24)] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:left-[110%]" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="size-4 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
