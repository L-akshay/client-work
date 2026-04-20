import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type GhostButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function GhostButton({
  href,
  children,
  className,
}: GhostButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center rounded-full border border-[#C9A84C]/60 px-7 py-3 font-sans text-xs tracking-[0.22em] uppercase text-[#C9A84C] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F0F0F]",
        className
      )}
    >
      <span className="flex items-center gap-2">
        {children}
        <ArrowRight className="size-4 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
