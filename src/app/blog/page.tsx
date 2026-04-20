import Image from "next/image"

import FadeUp from "@/components/ui/FadeUp"
import PageHero from "@/components/ui/PageHero"
import SectionLabel from "@/components/ui/SectionLabel"

const posts = [
  {
    category: "PR Strategy",
    title: "How modern brands build credibility before they buy attention",
    excerpt:
      "A look at why narrative clarity and third-party validation still outperform pure spend when trust is the real constraint.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80",
  },
  {
    category: "Social & Growth",
    title: "What changes when social strategy is treated like a system, not a calendar",
    excerpt:
      "Better planning, stronger feedback loops, and content that compounds instead of starting from zero every week.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
  },
  {
    category: "Creative",
    title: "Design cues that make a brand feel premium before anyone reads the copy",
    excerpt:
      "Typography, spacing, contrast, and composition signals shape perception faster than most teams realize.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
  },
  {
    category: "Search",
    title: "Why brand and search teams should stop planning in isolation",
    excerpt:
      "Search captures demand, but demand is often created by stronger stories, better signals, and better brand memory.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        description="Perspectives on communications, growth, creative direction, and the systems that help modern brands stay visible."
        image="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1800&q=80"
      />
      <section className="px-5 py-18 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp delay={0}>
            <SectionLabel
              label="Latest Thinking"
              title="Ideas for brands that want sharper communication."
              className="max-w-4xl"
            />
          </FadeUp>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <FadeUp key={post.title} delay={0}>
                <article className="overflow-hidden rounded-[28px] border border-[#C9A84C]/15 bg-[#161616]">
                  <div className="overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1100}
                      height={760}
                      className="h-72 w-full object-cover transition-transform duration-700 hover:scale-[1.06]"
                    />
                  </div>
                  <div className="p-8">
                    <p className="font-sans text-xs uppercase tracking-[0.24em] text-[#C9A84C]">
                      {post.category}
                    </p>
                    <h2 className="mt-4 font-serif text-3xl font-light text-[#F5F0E8]">
                      {post.title}
                    </h2>
                    <p className="mt-4 font-sans text-sm leading-relaxed text-[#888880]">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
