export type ProjectCategory =
  | "Product Launch"
  | "Executive Visibility"
  | "Crisis Communications"
  | "Market Entry"
  | "Investor Communications"

export type ProjectItem = {
  id: number
  slug: string
  title: string
  category: ProjectCategory
  market: string
  duration: string
  summary: string
  teaserOutcome: string
  outcomes: string[]
}

export const projectCategories: ProjectCategory[] = [
  "Product Launch",
  "Executive Visibility",
  "Crisis Communications",
  "Market Entry",
  "Investor Communications",
]

export const projectSectionIntro = {
  label: "Projects",
  title:
    "A curated look at how strategy becomes visibility.",
  supporting:
    "Selected engagements across launches, executive visibility, crisis communications, market entry, and investor communications.",
}

export const projectsPageIntro = {
  label: "Projects",
  heading:
    "A curated look at the campaigns and engagements that demonstrate how we apply PR strategy across different industries, objectives, and markets.",
  supporting:
    "These are not our most glamorous projects. They are our most instructive ones.",
  note:
    "Project portfolios in PR are awkward by nature. Confidentiality matters. Clients do not always want their communications strategy documented publicly. What we can share is a representative set of campaign types, the strategic thinking behind them, and the measurable outcomes produced. The industries and company sizes vary. The methodology does not.",
}

export const projectsClosingCta = {
  heading:
    "Every project begins with a conversation about your specific situation.",
  supporting:
    "If any of the above resonates with a challenge you are navigating, that is the right place to start.",
  button: "Schedule a Project Discussion",
}

export const projectItems: ProjectItem[] = [
  {
    id: 1,
    slug: "b2b-software-launch",
    title: "Media Launch Campaign: B2B Software Platform",
    category: "Product Launch",
    market: "US + UK",
    duration: "8 weeks",
    teaserOutcome: "14 coordinated media briefings across two markets.",
    summary:
      "A coordinated product launch campaign for a B2B software platform entering competitive US and UK markets simultaneously. The challenge was creating coherent coverage across two geographically distinct media ecosystems with different editorial priorities and relationship networks. We developed a dual-market briefing strategy with market-specific news angles that gave journalists in each market a locally relevant story connected to a single global narrative.",
    outcomes: [
      "14 coordinated media briefings across US and UK in a 3-week window",
      "Launch day coverage in 6 publications without press release mass distribution",
      "Zero conflicting narratives between US and UK coverage",
      "Product now indexed positively in category search results within 6 weeks",
    ],
  },
  {
    id: 2,
    slug: "financial-executive-thought-leadership",
    title: "Thought Leadership Programme: Financial Services Executive",
    category: "Executive Visibility",
    market: "UK + Canada",
    duration: "12 months",
    teaserOutcome: "18 bylined articles placed in target publications.",
    summary:
      "A 12-month thought leadership programme for the CEO of a financial services firm seeking editorial presence in UK and Canadian business media. Starting from zero media relationships, we developed a bylined content programme tied to regulatory and market developments in the executive's area of expertise. Editorial relationships in four target publications were developed and maintained throughout the engagement.",
    outcomes: [
      "18 bylined articles placed in target business and finance publications",
      "CEO cited as industry commentator by two journalists unprompted within 10 months",
      "Speaking invitation from a major financial services conference in month 11",
      "Firm shortlisted for industry award citing the executive's published perspective as supporting evidence",
    ],
  },
  {
    id: 3,
    slug: "consumer-healthcare-crisis",
    title: "Crisis Response Management: Consumer Healthcare Brand",
    category: "Crisis Communications",
    market: "Australia + UK",
    duration: "Active management 3 weeks, recovery 5 months",
    teaserOutcome: "Active negative coverage cycle concluded within 3 weeks.",
    summary:
      "An acute reputation event for a consumer healthcare company involving a third-party supplier failure that generated negative coverage across national media in two markets simultaneously. We were engaged on day three of active coverage. Immediate priorities were media monitoring, spokesperson briefing, and developing a response statement that acknowledged the situation without amplifying it. The recovery phase involved a structured transparency programme and a quality assurance editorial campaign.",
    outcomes: [
      "Media response statement approved and published within 48 hours of engagement start",
      "Active negative coverage cycle concluded within 3 weeks",
      "No major publication ran a follow-up negative story after the initial cycle",
      "Brand sentiment returned to neutral within 90 days based on monitoring data",
      "Crisis communications playbook delivered as a programme deliverable",
    ],
  },
  {
    id: 4,
    slug: "professional-services-us-entry",
    title: "Market Entry Campaign: Professional Services Firm in US Market",
    category: "Market Entry",
    market: "United States",
    duration: "10 months",
    teaserOutcome: "11 articles placed in US-targeted publications over 10 months.",
    summary:
      "A professional services firm with strong credentials in Europe needed editorial credibility in the US market before committing to physical expansion. US buyers in this category consistently reference media presence as a trust signal. We developed a 10-month pre-entry PR programme that established the firm's senior partners in US trade and business media before the official market entry announcement.",
    outcomes: [
      "11 articles placed in US-targeted publications over 10 months",
      "Two partner profiles in national business outlets ahead of launch",
      "US market entry announcement covered organically in 5 publications",
      "Firm reported positive brand recognition in first-round US client conversations",
    ],
  },
  {
    id: 5,
    slug: "pre-series-b-investor-visibility",
    title: "Investor Visibility Programme: Pre-Series B Startup",
    category: "Investor Communications",
    market: "UK + US",
    duration: "6 months",
    teaserOutcome: "Series B announcement covered across 11 publications.",
    summary:
      "A startup preparing for a Series B round needed media credibility in publications that institutional investors in their category actively read. Their challenge was not a lack of substance. They had strong metrics and a compelling product. The challenge was that their story had never been told publicly in a way that matched the quality of their internal narrative. We developed a structured pre-round visibility programme that gave journalists the context and narrative tools to write compelling stories independently.",
    outcomes: [
      "Founder profiled in 3 relevant publications before round announcement",
      "Series B announcement covered across 11 publications without mass press release distribution",
      "Lead investor cited company's media presence in a public statement post-round",
      "Organic follow-on coverage in 4 additional publications within 45 days of announcement",
    ],
  },
]

export const homepageFeaturedProjects: ProjectItem[] = [
  projectItems[0],
  projectItems[1],
  projectItems[4],
]
