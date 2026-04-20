import Image from "next/image"
import Link from "next/link"

type PageHeroProps = {
  title: string
  description?: string
  image: string
}

export default function PageHero({
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#C9A84C]/10 px-5 pt-36 pb-20 lg:px-16 lg:pt-44 lg:pb-24">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover opacity-[0.15]"
          priority
        />
        <div className="absolute inset-0 bg-[rgba(15,15,15,0.82)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-3 font-sans text-xs uppercase tracking-[0.25em] text-[#888880]">
          <Link href="/" className="transition-colors duration-700 hover:text-[#C9A84C]">
            Home
          </Link>
          <span className="text-[#C9A84C]">/</span>
          <span className="text-[#F5F0E8]">{title}</span>
        </div>

        <h1 className="mt-8 font-serif text-[clamp(48px,8vw,112px)] font-light leading-[0.92] text-[#F5F0E8]">
          {title}
        </h1>

        {description ? (
          <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-[#888880]">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
