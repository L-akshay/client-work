export type PortfolioCategory = "PR" | "Social" | "Creative" | "Influencer"

export type PortfolioItem = {
  id: number
  slug: string
  category: PortfolioCategory
  client: string
  title: string
  result: string
  excerpt: string
  image: string
  challenge: string
  solution: string
  outcome: string
  metrics: {
    value: string
    label: string
  }[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "way2news-brand-narrative",
    category: "PR",
    client: "Way2News",
    title: "National brand narrative launch for a high-growth news platform",
    result: "180+ stories secured across leading national and regional outlets",
    excerpt:
      "We built a multi-angle launch narrative that positioned the brand as both culturally relevant and commercially credible.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    challenge:
      "Way2News needed to establish national credibility fast in a crowded news aggregator market with skeptical media.",
    solution:
      "We built a three-layer narrative — founder story, product differentiation, and cultural relevance — then activated it across 40+ journalist relationships simultaneously.",
    outcome:
      "180+ stories secured across leading national and regional outlets within 90 days of launch.",
    metrics: [
      { value: "180+", label: "Stories Secured" },
      { value: "90", label: "Days to Launch" },
      { value: "40+", label: "Media Outlets" },
    ],
  },
  {
    id: 2,
    slug: "physics-wallah-social",
    category: "Social",
    client: "Physics Wallah",
    title: "Social momentum campaign built for education-category dominance",
    result: "3.2x engagement growth across campaign-led content windows",
    excerpt:
      "The content system combined high-frequency ideas with sharper performance feedback loops to keep momentum compounding.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    challenge:
      "Physics Wallah needed social content that could sustain momentum across competitive exam seasons without burning out the audience.",
    solution:
      "We designed a content system built around weekly themes, student success signals, and platform-native formats that fed performance feedback loops.",
    outcome:
      "3.2x engagement growth across campaign-led content windows over two quarters.",
    metrics: [
      { value: "3.2x", label: "Engagement Growth" },
      { value: "2", label: "Quarters" },
      { value: "60+", label: "Content Formats" },
    ],
  },
  {
    id: 3,
    slug: "gm-modular-creative",
    category: "Creative",
    client: "GM Modular",
    title: "Premium creative refresh for a legacy brand entering a new phase",
    result: "Unified launch system rolled out across digital, press, and events",
    excerpt:
      "We translated a complex product story into an editorial visual language that felt premium, modern, and campaign-ready.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    challenge:
      "GM Modular had strong products but a dated visual identity that undersold their premium positioning in the market.",
    solution:
      "We conducted a full brand signal audit and rebuilt the visual language from typography to campaign art direction, creating a system that worked across digital, press, and events.",
    outcome:
      "Unified launch system rolled out across digital, press, and events within 6 weeks.",
    metrics: [
      { value: "6", label: "Weeks to Rollout" },
      { value: "3", label: "Channels Unified" },
      { value: "100%", label: "Brand Consistency" },
    ],
  },
  {
    id: 4,
    slug: "coin-fantasy-influencer",
    category: "Influencer",
    client: "Coin Fantasy",
    title: "Creator-led awareness drive built around trust and mass relevance",
    result: "12M+ campaign impressions with above-benchmark engagement",
    excerpt:
      "The program mixed macro reach with niche trust to deliver visibility that felt credible rather than overproduced.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80",
    challenge:
      "Coin Fantasy needed mass awareness in the fantasy sports category without appearing overproduced or inauthentic to a skeptical young audience.",
    solution:
      "We mixed macro creators for reach with niche voices for trust, building a two-tier program that felt native to each platform while staying on-brand.",
    outcome:
      "12M+ campaign impressions with above-benchmark engagement rates across all creator tiers.",
    metrics: [
      { value: "12M+", label: "Impressions" },
      { value: "9.6%", label: "Avg Engagement" },
      { value: "2-tier", label: "Creator Strategy" },
    ],
  },
  {
    id: 5,
    slug: "heal-foundation-pr",
    category: "PR",
    client: "Heal Foundation",
    title: "Cause-led communications strategy for sustained awareness",
    result: "4.1x uplift in media pickup across issue-focused campaigns",
    excerpt:
      "We aligned data, human stories, and advocacy positioning to make every campaign story easier for media to carry forward.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
    challenge:
      "Heal Foundation needed consistent media presence for cause-led campaigns that competed with faster-moving commercial news cycles.",
    solution:
      "We aligned data stories, human impact narratives, and advocacy positioning into a repeatable campaign framework that gave media clear hooks every cycle.",
    outcome:
      "4.1x uplift in media pickup across issue-focused campaigns over six months.",
    metrics: [
      { value: "4.1x", label: "Media Pickup Lift" },
      { value: "6", label: "Months" },
      { value: "30+", label: "Stories Published" },
    ],
  },
  {
    id: 6,
    slug: "grabon-creator-commerce",
    category: "Influencer",
    client: "GrabOn",
    title: "Creator and commerce activation tuned for conversion moments",
    result: "6.1x improvement in content reuse value across paid and owned media",
    excerpt:
      "We built a creator layer that gave the campaign stronger trust signals and more flexible assets for amplification.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    challenge:
      "GrabOn needed creator content that drove conversion moments, not just awareness, during high-intent shopping windows.",
    solution:
      "We built a creator brief system focused on trust signals and flexible asset creation, allowing content to be repurposed across paid, owned, and earned channels.",
    outcome:
      "6.1x improvement in content reuse value with stronger conversion signals across all media layers.",
    metrics: [
      { value: "6.1x", label: "Content Reuse Value" },
      { value: "3", label: "Media Layers" },
      { value: "40+", label: "Creator Assets" },
    ],
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
