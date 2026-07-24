import { statsTicker } from "@/lib/data/stats"

function Counter({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  return (
    <div className="px-4 py-8 text-center lg:px-8">
      <p className="font-serif text-6xl font-light text-[#0F0F0F] sm:text-7xl">
        {value}
        {suffix}
      </p>
      <p className="mt-4 font-ui text-[11px] uppercase tracking-[0.32em] text-[#0F0F0F]">
        {label}
      </p>
    </div>
  )
}

export default function StatsTicker() {
  return (
    <section className="relative overflow-hidden bg-[#C9A84C] px-5 py-10 lg:px-16 lg:py-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-full w-px bg-[#0F0F0F]/8" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-[#0F0F0F]/8" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-0 divide-y divide-[#0F0F0F]/20 md:grid-cols-2 md:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {statsTicker.map((stat) => (
          <Counter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  )
}
