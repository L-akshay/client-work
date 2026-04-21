export default function Loading() {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0F0F0F]/96 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-5">
        <p className="font-serif text-4xl font-light tracking-[0.08em] text-[#F5F0E8] sm:text-5xl">
          Nova<span className="text-[#C9A84C]">PR</span>
        </p>
        <div className="flex items-center gap-2">
          <span className="size-2 animate-pulse rounded-full bg-[#C9A84C]" />
          <span
            className="size-2 animate-pulse rounded-full bg-[#C9A84C]"
            style={{ animationDelay: "150ms" }}
          />
          <span
            className="size-2 animate-pulse rounded-full bg-[#C9A84C]"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  )
}
