export type ServiceProcessStep = {
  title: string
  description: string
}

export type ServiceMetric = {
  value: string
  label: string
  detail: string
}

export type Service = {
  slug:
    | "public-relations"
    | "social-digital-marketing"
    | "influencer-marketing"
    | "creative-studio"
    | "seo-search-strategy"
  shortLabel: string
  title: string
  eyebrow: string
  description: string
  intro: string
  longDescription: string
  image: string
  heroImage: string
  keywords: string[]
  subServices: string[]
  process: ServiceProcessStep[]
  metrics: ServiceMetric[]
}

export const services: Service[] = [
  {
    slug: "public-relations",
    shortLabel: "Public Relations",
    title: "Public Relations",
    eyebrow: "Earned authority with narrative precision",
    description:
      "From reputation shaping to earned-media momentum, we build strategic PR programs that position brands with clarity, authority, and staying power.",
    intro:
      "We design high-trust communications programs that connect leadership, business milestones, and media opportunities into one clear public story.",
    longDescription:
      "Our PR team works across corporate communications, founder visibility, media relations, and sensitive reputation moments. We build the story architecture first, then activate the right mix of journalists, publications, speaking moments, and narratives that keep your brand in the conversation for the right reasons.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    keywords: [
      "Media Relations",
      "Corporate Communications",
      "Crisis Counsel",
      "Leadership Positioning",
    ],
    subServices: [
      "Media outreach and journalist relations",
      "Corporate communication strategy",
      "Founder and executive profiling",
      "Product launch PR",
      "Crisis response planning",
      "Awards and recognition support",
    ],
    process: [
      {
        title: "Narrative Mapping",
        description:
          "We sharpen the message, audience, and proof points that make your story media-ready.",
      },
      {
        title: "Media Architecture",
        description:
          "We identify the right outlets, editorial hooks, timing windows, and spokesperson angles.",
      },
      {
        title: "Active Outreach",
        description:
          "We run disciplined pitching, interview coordination, briefing support, and coverage follow-through.",
      },
      {
        title: "Momentum Reporting",
        description:
          "We translate coverage, sentiment, and share of voice into clear business-facing reporting.",
      },
    ],
    metrics: [
      {
        value: "180+",
        label: "National Placements",
        detail: "High-authority stories secured across top-tier and sector media.",
      },
      {
        value: "4.3x",
        label: "Share of Voice Lift",
        detail: "Measured improvement against category competitors over six months.",
      },
      {
        value: "72hr",
        label: "Crisis Turnaround",
        detail: "Rapid-response communications workflows during sensitive situations.",
      },
    ],
  },
  {
    slug: "social-digital-marketing",
    shortLabel: "Social & Digital Marketing",
    title: "Social & Digital Marketing",
    eyebrow: "Conversation, content, and conversion in one system",
    description:
      "We translate audience insight into digital systems that grow attention, shape conversations, and convert visibility into measurable action.",
    intro:
      "Our social and digital programs are built to keep brands culturally present while staying grounded in performance and reporting.",
    longDescription:
      "From content calendars and paid amplification to campaign storytelling and reporting frameworks, we create digital ecosystems that feel premium and perform consistently. Every touchpoint is designed to strengthen brand memory, audience engagement, and measurable growth.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1600&q=80",
    keywords: [
      "Social Strategy",
      "Paid Growth",
      "Content Systems",
      "Performance Reporting",
    ],
    subServices: [
      "Social media strategy and planning",
      "Performance marketing support",
      "Content marketing and campaign storytelling",
      "Community and engagement management",
      "Paid media creative coordination",
      "Reporting and optimization dashboards",
    ],
    process: [
      {
        title: "Audience and Channel Audit",
        description:
          "We identify where attention already exists and where growth will be the most efficient.",
      },
      {
        title: "Content and Campaign Design",
        description:
          "We build platform-native ideas, message pillars, and campaign assets that fit the brand voice.",
      },
      {
        title: "Launch and Optimize",
        description:
          "We coordinate posting, paid amplification, and iterative improvement using live performance signals.",
      },
      {
        title: "Measure What Matters",
        description:
          "We report on awareness, engagement, leads, and conversion to keep the work accountable.",
      },
    ],
    metrics: [
      {
        value: "310%",
        label: "Engagement Growth",
        detail: "Lift in audience interaction after a three-month content overhaul.",
      },
      {
        value: "2.8x",
        label: "Lead Efficiency",
        detail: "Improved cost-to-inquiry across paid and organic campaign layers.",
      },
      {
        value: "12M+",
        label: "Campaign Reach",
        detail: "Combined organic and paid impressions across launch cycles.",
      },
    ],
  },
  {
    slug: "influencer-marketing",
    shortLabel: "Influencer Marketing",
    title: "Influencer Marketing",
    eyebrow: "Creator partnerships with brand fit and commercial intent",
    description:
      "Our influencer programs are built on relevance, resonance, and reach, helping brands collaborate with voices that genuinely move culture.",
    intro:
      "We match brands with creators whose audience trust can drive both visibility and action, not just vanity numbers.",
    longDescription:
      "Influencer work performs best when the partnership feels believable. We combine creator discovery, narrative planning, and campaign operations to make every collaboration feel aligned with the brand while still native to the creator's world. The outcome is stronger recall, stronger trust, and stronger downstream performance.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80",
    keywords: [
      "Creator Strategy",
      "Partnership Management",
      "Launch Buzz",
      "Performance Tracking",
    ],
    subServices: [
      "Creator identification and outreach",
      "Influencer brief development",
      "Campaign negotiation and management",
      "Launch seeding and product drops",
      "Performance and compliance tracking",
      "Always-on creator advocacy programs",
    ],
    process: [
      {
        title: "Creator Fit Analysis",
        description:
          "We shortlist voices based on audience overlap, credibility, tone, and content quality.",
      },
      {
        title: "Campaign Structuring",
        description:
          "We define deliverables, messaging direction, timelines, and success benchmarks.",
      },
      {
        title: "Execution Management",
        description:
          "We coordinate approvals, posting schedules, asset delivery, and live troubleshooting.",
      },
      {
        title: "Impact Review",
        description:
          "We evaluate reach, engagement, traffic, saves, and branded search movement.",
      },
    ],
    metrics: [
      {
        value: "140+",
        label: "Creator Partnerships",
        detail: "Campaigns activated across macro, mid-tier, and niche voices.",
      },
      {
        value: "9.6%",
        label: "Average Engagement",
        detail: "Sustained above-category interaction across selected campaigns.",
      },
      {
        value: "6.1x",
        label: "Content Reuse Value",
        detail: "Additional media and social mileage from creator-generated assets.",
      },
    ],
  },
  {
    slug: "creative-studio",
    shortLabel: "Creative Studio",
    title: "Creative Studio",
    eyebrow: "Visual systems that make a premium first impression",
    description:
      "We craft identities, visual systems, and brand worlds that feel premium, memorable, and unmistakably aligned with your market position.",
    intro:
      "Our creative studio shapes the visual and verbal expression that helps brands look composed, distinctive, and campaign-ready.",
    longDescription:
      "Whether you need a sharper brand identity, campaign art direction, launch visuals, or social-first creative, we build design systems that carry authority across channels. The work is rooted in strategy, then expressed through typography, composition, language, and assets that feel deliberately premium.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80",
    keywords: [
      "Brand Identity",
      "Campaign Design",
      "Art Direction",
      "Content Production",
    ],
    subServices: [
      "Brand identity refresh and systems",
      "Campaign art direction",
      "Social content design",
      "Pitch and presentation design",
      "Launch visuals and brand assets",
      "Photography and video direction",
    ],
    process: [
      {
        title: "Brand Signal Audit",
        description:
          "We review the current visual language, category references, and audience expectations.",
      },
      {
        title: "Creative Direction",
        description:
          "We establish mood, typography, composition cues, and visual rules for consistency.",
      },
      {
        title: "Asset Production",
        description:
          "We create the design toolkit, campaign assets, and layouts needed for rollout.",
      },
      {
        title: "Application Support",
        description:
          "We guide teams on how the system translates into social, web, PR, and launch moments.",
      },
    ],
    metrics: [
      {
        value: "70+",
        label: "Campaign Systems",
        detail: "Brand and launch visual systems delivered across sectors.",
      },
      {
        value: "48hr",
        label: "Rapid Turnaround",
        detail: "Fast creative support for media opportunities and live campaigns.",
      },
      {
        value: "3.4x",
        label: "Content Efficiency",
        detail: "Improvement in reusable creative output across channels.",
      },
    ],
  },
  {
    slug: "seo-search-strategy",
    shortLabel: "SEO & Search Strategy",
    title: "SEO & Search Strategy",
    eyebrow: "Visibility that compounds over time",
    description:
      "We build search visibility with a strategic mix of technical clarity, editorial value, and content systems designed to win long-term demand.",
    intro:
      "Search is one of the highest-leverage growth channels when brand messaging, content, and technical performance work together.",
    longDescription:
      "Our search programs look beyond rankings alone. We structure content around intent, build topical authority, and strengthen site fundamentals so brands become easier to discover and easier to trust. The result is demand capture that keeps improving long after launch.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
    keywords: [
      "Technical SEO",
      "Search Intent",
      "Editorial Strategy",
      "Organic Demand",
    ],
    subServices: [
      "Technical SEO audits",
      "Keyword and intent mapping",
      "Content strategy and page briefs",
      "On-page optimization",
      "Search console and analytics review",
      "Authority-building editorial roadmaps",
    ],
    process: [
      {
        title: "Search Landscape Audit",
        description:
          "We map competitive gaps, search intent clusters, and technical performance issues.",
      },
      {
        title: "Content Opportunity Planning",
        description:
          "We prioritize pages and themes that can unlock demand with clear commercial relevance.",
      },
      {
        title: "Optimization Rollout",
        description:
          "We improve site structure, metadata, copy direction, and internal linking systems.",
      },
      {
        title: "Authority and Reporting",
        description:
          "We track growth in rankings, traffic quality, and conversion-ready organic visits.",
      },
    ],
    metrics: [
      {
        value: "220%",
        label: "Organic Growth",
        detail: "Increase in non-branded sessions after search strategy implementation.",
      },
      {
        value: "85%",
        label: "Page One Coverage",
        detail: "Priority keyword clusters ranking on page one over campaign cycles.",
      },
      {
        value: "4.9x",
        label: "Intent Match Lift",
        detail: "Better alignment between search demand and conversion pages.",
      },
    ],
  },
]

export const allServiceGroups = [
  {
    title: "Public Relations",
    items: [
      "Media Relations",
      "Investor Relations",
      "Employer Branding",
      "Crisis Management",
      "Govt & Public Affairs",
      "Awards & Recognition",
      "Corporate Communication",
      "Event & Press Conference",
      "CSR Communications",
    ],
  },
  {
    title: "Campaign & Growth",
    items: [
      "PR Campaigns",
      "Social Media Marketing",
      "Performance Marketing",
      "Content Marketing",
      "Podcast Marketing",
      "Meme Marketing",
      "Twitter Trending",
      "Social Media Management",
    ],
  },
  {
    title: "Creative & Search",
    items: [
      "Influencer Marketing",
      "Creative Studio",
      "Viral Marketing",
      "Personal Branding",
      "Wikipedia Page Creation",
      "Social Verification Support",
      "Google Knowledge Panel",
      "SEO & Search Strategy",
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
