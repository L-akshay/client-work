export type BlogPost = {
  slug: string
  category: string
  title: string
  excerpt: string
  image: string
  readTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "modern-brands-credibility",
    category: "PR Strategy",
    readTime: "5 min read",
    title: "How modern brands build credibility before they buy attention",
    excerpt:
      "A look at why narrative clarity and third-party validation still outperform pure spend when trust is the real constraint.",
    image: "/images/blog/modern-brands-credibility.jpg",
    content: `Credibility is not something you can buy outright. You can rent attention through paid media, but the moment the spend stops, so does the visibility. The brands that grow with staying power are the ones that invest in the infrastructure of trust before they scale the infrastructure of reach.

That infrastructure starts with narrative clarity. Most brands try to communicate too much too early — features, pricing, company backstory, team credentials, and mission statements all competing for the same first impression. The result is a message that leaves the audience without a clear reason to care.

The brands that earn media coverage, referrals, and long-term customer loyalty tend to do one thing well before anything else: they decide what they stand for in one sentence, and they make sure every public-facing touchpoint reflects that sentence consistently.

Third-party validation — coverage, awards, analyst mentions, customer stories — compounds this effect. When a journalist writes about your brand, they're lending their credibility to your story. When a customer shares their experience publicly, they're reducing the risk for the next buyer. These signals build over time and create a foundation that paid spend cannot replicate.

The practical takeaway: before increasing your media budget, audit your narrative. If you can't explain what your brand stands for in one clear sentence, no amount of spend will make the message land.`,
  },
  {
    slug: "social-strategy-as-system",
    category: "Social & Growth",
    readTime: "4 min read",
    title:
      "What changes when social strategy is treated like a system, not a calendar",
    excerpt:
      "Better planning, stronger feedback loops, and content that compounds instead of starting from zero every week.",
    image: "/images/blog/social-strategy-as-system.jpg",
    content: `Most social media teams operate on a calendar. They plan content week by week, react to platform trends as they emerge, and measure performance post by post. This approach produces activity, but it rarely produces momentum.

The difference between a social presence that compounds and one that flatlines is almost always structural. Brands that build audiences consistently treat social as a system — with repeatable content formats, clear audience feedback loops, and a publishing rhythm that creates expectation rather than surprise.

A content system starts with a small number of defined formats: the type of posts your audience reliably responds to, structured so they can be produced quickly and consistently. Once you have two or three formats that work, the question shifts from "what should we post today" to "how do we improve our existing formats and expand our reach."

Feedback loops matter as much as the content itself. Knowing which posts drive saves, shares, and profile visits — versus which ones generate comments but no downstream action — allows you to allocate creative energy where it compounds rather than where it just performs.

The calendar approach will always feel more urgent than it is. The system approach will always feel slower than it is. The difference shows up at month six.`,
  },
  {
    slug: "design-cues-premium-brands",
    category: "Creative",
    readTime: "6 min read",
    title:
      "Design cues that make a brand feel premium before anyone reads the copy",
    excerpt:
      "Typography, spacing, contrast, and composition signals shape perception faster than most teams realize.",
    image: "/images/blog/design-cues-premium-brands.jpg",
    content: `Perception forms in milliseconds. Before a visitor reads your headline, before they register your value proposition, before they decide whether to scroll — they have already formed an impression based entirely on visual signals.

Typography is the most powerful of these signals and the most consistently underestimated. The weight, spacing, and hierarchy of your type communicates authority or uncertainty, precision or casualness, before a single word is parsed. Brands that feel premium almost always use type with more restraint — fewer sizes, more consistent weights, and generous letter-spacing on labels and navigation.

Spacing is the second signal. Crowded layouts feel cheap regardless of the quality of the content inside them. Premium brands give their content room to breathe. The white space is not empty — it is doing active work, directing attention and signaling that the brand is not anxious to fill every pixel.

Contrast is the third. Not just color contrast, but compositional contrast: the interplay between large and small, heavy and light, image and text. Flat, evenly-weighted layouts feel safe but forgettable. Layouts with clear hierarchy and deliberate contrast feel considered.

None of this requires a large design budget. It requires decisions — made early and held consistently — about what the visual language of the brand is allowed to say.`,
  },
  {
    slug: "brand-and-search-together",
    category: "Search",
    readTime: "5 min read",
    title: "Why brand and search teams should stop planning in isolation",
    excerpt:
      "Search captures demand, but demand is often created by stronger stories, better signals, and better brand memory.",
    image: "/images/blog/brand-and-search-together.jpg",
    content: `Search is a demand-capture channel. It works by intercepting people who are already looking for something. What it cannot do on its own is create the demand it captures.

That demand is created upstream — by brand exposure, word of mouth, media coverage, social presence, and the accumulated memory people carry about your category. When someone types your brand name into a search engine, it is almost never the first time they have encountered you. The search is the endpoint of a longer journey that started somewhere else.

This is why brand teams and search teams that plan independently tend to underperform relative to teams that share data and intent signals. Brand teams have access to the stories that are landing with audiences. Search teams have access to the specific language people use when they are ready to act. When these two data sets inform each other, both channels become more effective.

Practically, this means search teams should be involved in campaign planning from the start — not to optimize press releases for keywords, but to understand what language choices will be reinforced across paid, earned, and owned media. And brand teams should treat rising search volumes around specific topics as signal that those narratives are gaining traction and deserve more investment.

The brands with the most durable organic visibility are almost always the ones with the strongest brand presence. That is not a coincidence.`,
  },
]
