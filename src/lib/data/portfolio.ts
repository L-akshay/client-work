export type PortfolioCategory = "PR" | "Social" | "Creative" | "Influencer"

export type PortfolioItem = {
  id: number
  category: PortfolioCategory
  client: string
  title: string
  result: string
  excerpt: string
  image: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "PR",
    client: "Way2News",
    title: "National brand narrative launch for a high-growth news platform",
    result: "180+ stories secured across leading national and regional outlets",
    excerpt:
      "We built a multi-angle launch narrative that positioned the brand as both culturally relevant and commercially credible.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
  },
  {
    id: 2,
    category: "Social",
    client: "Physics Wallah",
    title: "Social momentum campaign built for education-category dominance",
    result: "3.2x engagement growth across campaign-led content windows",
    excerpt:
      "The content system combined high-frequency ideas with sharper performance feedback loops to keep momentum compounding.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
  },
  {
    id: 3,
    category: "Creative",
    client: "GM Modular",
    title: "Premium creative refresh for a legacy brand entering a new phase",
    result: "Unified launch system rolled out across digital, press, and events",
    excerpt:
      "We translated a complex product story into an editorial visual language that felt premium, modern, and campaign-ready.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
  },
  {
    id: 4,
    category: "Influencer",
    client: "Coin Fantasy",
    title: "Creator-led awareness drive built around trust and mass relevance",
    result: "12M+ campaign impressions with above-benchmark engagement",
    excerpt:
      "The program mixed macro reach with niche trust to deliver visibility that felt credible rather than overproduced.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80",
  },
  {
    id: 5,
    category: "PR",
    client: "Heal Foundation",
    title: "Cause-led communications strategy for sustained awareness",
    result: "4.1x uplift in media pickup across issue-focused campaigns",
    excerpt:
      "We aligned data, human stories, and advocacy positioning to make every campaign story easier for media to carry forward.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
  },
  {
    id: 6,
    category: "Influencer",
    client: "GrabOn",
    title: "Creator and commerce activation tuned for conversion moments",
    result: "6.1x improvement in content reuse value across paid and owned media",
    excerpt:
      "We built a creator layer that gave the campaign stronger trust signals and more flexible assets for amplification.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
  },
]

export const featuredCaseStudy = {
  client: "Featured Campaign",
  title: "A cross-channel reputation and growth program built for category leadership",
  result: "50M+ media impressions and consistent share-of-voice gains over two quarters",
  excerpt:
    "Our featured work combines PR, social, creative, and creator partnerships into one disciplined system designed to move both perception and performance.",
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80",
}
