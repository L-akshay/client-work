"use client"

const rowOne = [
  "Google",
  "Meta",
  "Times of India",
  "NDTV",
  "Reuters",
  "Bloomberg",
  "BBC",
  "Forbes",
]

const rowTwo = [
  "Economic Times",
  "Hindustan Times",
  "The Hindu",
  "Mint",
  "Zee News",
  "ABP News",
  "Business Standard",
]

function MarqueeRow({
  items,
  direction,
}: {
  items: string[]
  direction: "left" | "right"
}) {
  const duplicatedItems = [...items, ...items]

  return (
    <div className="overflow-hidden">
      <div
        className={`marquee-track ${
          direction === "left" ? "marquee-left" : "marquee-right"
        } flex w-max items-center gap-5 whitespace-nowrap py-3 hover:[animation-play-state:paused]`}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-5">
            <span className="font-serif text-2xl font-light text-[#888880]">
              {item}
            </span>
            {index < duplicatedItems.length - 1 ? (
              <span className="font-serif text-2xl text-[#C9A84C]">·</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientsMarquee() {
  return (
    <section className="border-y border-[#C9A84C]/10 bg-[#0F0F0F] py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-16">
        <p className="mb-8 text-center font-sans text-xs uppercase tracking-[0.25em] text-[#888880]">
          Our Team Has Worked With
        </p>

        <div className="mask-fade space-y-1 overflow-hidden">
          <MarqueeRow items={rowOne} direction="left" />
          <MarqueeRow items={rowTwo} direction="right" />
        </div>
      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .marquee-track {
          will-change: transform;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        .marquee-left {
          animation-duration: 35s;
          animation-name: marquee-left;
        }

        .marquee-right {
          animation-duration: 28s;
          animation-name: marquee-right;
        }

        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
