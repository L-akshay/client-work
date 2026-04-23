export type PortfolioCategory =
  | "SaaS"
  | "Consumer Goods"
  | "Professional Services"
  | "Fintech"

export type PortfolioResult = {
  label: string
  value: string
  detail: string
}

export type PortfolioItem = {
  id: number
  slug: string
  category: PortfolioCategory
  client: string
  title: string
  result: string
  excerpt: string
  image: string
  market: string
  engagementDuration: string
  situation: string
  strategy: string
  execution: string
  results: PortfolioResult[]
  metrics: {
    value: string
    label: string
  }[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "saas-platform-us-market-entry",
    category: "SaaS",
    client: "UK-Founded SaaS Platform",
    title: "SaaS Platform Enters Competitive US Market",
    result:
      "24 original US articles, 2.1 million estimated readers reached, and a 38% rise in inbound demo requests over 9 months.",
    excerpt:
      "A growing SaaS company needed earned authority in the United States before unfamiliar buyers would take the brand seriously against well-funded local competitors.",
    image: "/images/case-studies/saas-market-entry.jpg",
    market: "United States",
    engagementDuration: "9 months",
    situation:
      "A UK-founded SaaS company had built a strong product and a growing European customer base. The US market was the next logical step, but the brand had almost no media presence in American trade publications and no established credibility with US buyers who were unfamiliar with the company name. Their category was crowded with well-funded American competitors who dominated the editorial conversation. Entering required more than advertising. It required earned authority.",
    strategy:
      "We identified three distinct audiences: enterprise procurement teams reading vertical trade media, technology journalists covering the software category, and investor influencers active on LinkedIn and financial news platforms. Instead of distributing press releases uniformly, we built a tiered content strategy that gave each audience a reason to engage. For trade media, we developed a series of data-backed opinion pieces positioning the company's founders as category experts. For technology journalists, we arranged product briefings tied to a genuine product milestone. For investor audiences, we coordinated a CEO commentary campaign around regulatory changes affecting the software category.",
    execution:
      "Over nine months, we secured initial coverage in two US technology trade publications, developed an ongoing byline relationship with one vertical industry outlet, and managed a product launch news cycle that generated coordinated coverage across seven publications within a 72-hour window. Crisis preparation materials were developed for a regulatory question that arose mid-engagement, which the team navigated without negative press.",
    results: [
      {
        label: "Media Placements Secured",
        value: "24 original articles",
        detail: "Placed in US publications over a 9-month engagement.",
      },
      {
        label: "Audience Reach",
        value: "2.1 million readers",
        detail: "Estimated across placed articles using publisher-reported figures.",
      },
      {
        label: "Inbound Lead Impact",
        value: "+38%",
        detail: "Increase in US inbound demo requests over the engagement period.",
      },
      {
        label: "Investor Visibility",
        value: "First-time financial press coverage",
        detail: "CEO quoted in two financial technology news publications.",
      },
      {
        label: "Narrative Outcome",
        value: "Global solution positioning",
        detail:
          "The company shifted from being seen as a European platform to a global solution with proven European scale.",
      },
    ],
    metrics: [
      { value: "24", label: "US Articles" },
      { value: "2.1M", label: "Estimated Reach" },
      { value: "+38%", label: "Demo Requests" },
    ],
  },
  {
    id: 2,
    slug: "consumer-brand-reputation-rebuild",
    category: "Consumer Goods",
    client: "Consumer Goods Brand",
    title: "Consumer Brand Rebuilds Reputation After Product Recall",
    result:
      "Brand sentiment moved from net negative to net neutral within 90 days, while positive stories claimed 4 of the top 10 Google results within 6 months.",
    excerpt:
      "After a recall damaged trust and search visibility, the challenge was to rebuild credibility without looking defensive or rushing back into promotion.",
    image: "/images/case-studies/consumer-reputation-rebuild.jpg",
    market: "United Kingdom",
    engagementDuration: "6 months",
    situation:
      "A consumer goods brand had issued a product recall affecting a mid-range product line. The recall was handled correctly from a regulatory standpoint, but the media coverage had been disproportionate and remained indexed in search results. Consumer trust scores had declined visibly in brand tracking data. The company needed a structured communications recovery that rebuilt credibility without appearing defensive or dismissive of the original issue.",
    strategy:
      "Reputation recovery after a product crisis has one non-negotiable principle: transparency before promotion. We advised against any attempt to suppress the original coverage or pivot to positive stories too quickly, both of which signal defensiveness and often generate additional scrutiny. Instead, we built a structured 90-day transparency programme that led with the company's internal response measures, quality improvements made as a direct result of the recall, and consumer communication initiatives. The promotional recovery followed, not preceded, the credibility rebuilding phase.",
    execution:
      "We developed a CEO-authored accountability statement distributed through national consumer media, a quality improvement editorial series for trade publications, and a customer outreach communications package that gave the company's service team consistent messaging. A media monitoring protocol was established with clear escalation criteria. The company participated in an industry roundtable on product safety standards, earning positive contextual coverage.",
    results: [
      {
        label: "Sentiment Shift",
        value: "Net neutral in 90 days",
        detail:
          "Media monitoring moved from net negative to net neutral inside the first 90 days.",
      },
      {
        label: "Positive Coverage",
        value: "11 mentions",
        detail:
          "Positive editorial mentions landed in national consumer press within 6 months.",
      },
      {
        label: "Search Narrative",
        value: "4 of top 10 results",
        detail:
          "Positive stories occupied four of the first ten Google results for the brand name within 6 months.",
      },
      {
        label: "Consumer Trust",
        value: "Recovered to within 8 points",
        detail:
          "Internal brand tracking showed trust scores returning close to the pre-recall baseline.",
      },
      {
        label: "Crisis Preparation",
        value: "Full playbook delivered",
        detail: "A future-ready crisis communications playbook was created for the client team.",
      },
    ],
    metrics: [
      { value: "90", label: "Days to Neutral" },
      { value: "11", label: "Positive Mentions" },
      { value: "4/10", label: "Top Search Results" },
    ],
  },
  {
    id: 3,
    slug: "professional-services-thought-leadership-platform",
    category: "Professional Services",
    client: "Management Consultancy",
    title: "Professional Services Firm Builds Thought Leadership Platform",
    result:
      "22 bylined articles, two recurring publication relationships, and a 340% combined LinkedIn audience increase across partner profiles.",
    excerpt:
      "A respected consultancy was winning on referrals but losing visibility in competitive pitches because larger firms owned the editorial conversation.",
    image: "/images/case-studies/professional-services-thought-leadership.jpg",
    market: "Canada and USA",
    engagementDuration: "12 months",
    situation:
      "A mid-size management consultancy had strong client retention and a good internal reputation but was effectively invisible in the editorial conversation of its category. Larger competitors commanded thought leadership in major business publications. The firm was winning business through referrals but losing consideration in competitive pitches where brand recognition played a role. Senior partners had valuable perspectives but no established publication relationships and no content infrastructure to express them consistently.",
    strategy:
      "We identified two senior partners whose areas of expertise intersected with high-interest editorial topics in the business press: organisational change management and digital transformation governance. Rather than pursuing broad coverage, we focused on establishing genuine depth in a small number of relevant publications over 12 months. Credibility compounds in PR - a second article in the same publication is worth more than two articles in two different outlets because it signals editorial endorsement, not just one-time placement.",
    execution:
      "We developed a content calendar of six major opinion pieces per partner per year, each tied to current business news and supported by original research or client-anonymised case evidence. Journalist relationship development targeted specific editors at four target publications. Speaking opportunity submissions were coordinated with the content calendar to create reinforcing signals. A LinkedIn editorial programme ran alongside earned media to ensure partner visibility between placements.",
    results: [
      {
        label: "Publication Relationships",
        value: "2 ongoing contributor relationships",
        detail:
          "Established with major business publications relevant to the firm's category.",
      },
      {
        label: "Thought Leadership Volume",
        value: "22 bylined articles",
        detail: "Placed across target publications over a 12-month engagement.",
      },
      {
        label: "Speaking Engagements",
        value: "3 invitations received",
        detail: "Two conference speaking opportunities were ultimately accepted.",
      },
      {
        label: "Pitch Impact",
        value: "4 pitch debrief mentions",
        detail:
          "The firm reported positive brand-recognition feedback in four competitive pitch debriefs.",
      },
      {
        label: "LinkedIn Reach",
        value: "+340%",
        detail:
          "The two partner profiles grew their combined audiences by 340% during the programme.",
      },
    ],
    metrics: [
      { value: "22", label: "Bylined Articles" },
      { value: "2", label: "Contributor Relationships" },
      { value: "+340%", label: "LinkedIn Audience Growth" },
    ],
  },
  {
    id: 4,
    slug: "fintech-series-a-media-visibility",
    category: "Fintech",
    client: "Fintech Startup",
    title: "Startup Achieves Media Visibility Before Series A Round",
    result:
      "The Series A announcement was covered by 9 publications without press release distribution, followed by 3 organic mentions after the round closed.",
    excerpt:
      "The company needed institutional media credibility before investor conversations intensified, with a founder story journalists could tell without heavy company control.",
    image: "/images/case-studies/fintech-investor-visibility.jpg",
    market: "Australia and UK",
    engagementDuration: "5 months",
    situation:
      "A fintech startup approaching a Series A funding round needed institutional media credibility before investor conversations intensified. Sophisticated investors in this category do background research and often factor in the quality of a company's editorial presence when assessing brand maturity. The company had a strong product and compelling founder story but no media history and no relationships with financial or technology journalists.",
    strategy:
      "We focused the engagement on two outcomes: securing coverage in publications that investors in this category actively read, and creating a coherent founder narrative that journalists could tell without the company needing to control every word. The second objective is often underestimated. When a journalist can write a compelling story about a founder from public information alone, unprompted mentions begin to occur. The goal was to make the company easy to cover, not just willing to be covered.",
    execution:
      "A founder narrative document was developed as the strategic foundation. This covered origin story, market problem framing, and differentiation argument in journalistically usable terms. Targeted briefings were arranged with reporters at fintech, startup, and business news outlets across Australia and the UK. A data-driven research piece on payment friction in the SME sector was produced to give journalists a news hook independent of the company's own milestones.",
    results: [
      {
        label: "Pre-Round Coverage",
        value: "2 founder profiles",
        detail:
          "The founder was profiled in two relevant fintech publications before the funding round announcement.",
      },
      {
        label: "Round Announcement Reach",
        value: "9 publications",
        detail:
          "Series A coverage landed across nine outlets without distributing a press release.",
      },
      {
        label: "Journalist Relationships",
        value: "6 target reporters",
        detail:
          "Active contact was established with journalists across fintech, startup, and business outlets.",
      },
      {
        label: "Investor Commentary",
        value: "Credibility signal acknowledged",
        detail:
          "The lead investor publicly cited the company's media presence as a credibility signal.",
      },
      {
        label: "Follow-On Coverage",
        value: "3 organic mentions",
        detail:
          "Three publications mentioned the company within 60 days of the round close without outreach.",
      },
    ],
    metrics: [
      { value: "9", label: "Round Coverage Placements" },
      { value: "6", label: "Reporter Relationships" },
      { value: "3", label: "Organic Follow-On Mentions" },
    ],
  },
]

export const featuredCaseStudy = {
  client: "Page 1 | Case Studies",
  title: "Results That Speak Before We Do",
  result:
    "Four client engagements. Different industries, different goals, different starting points. The common thread is a clear PR strategy executed with editorial discipline and measurable outcomes.",
  excerpt:
    "The cases below document real client challenges, the strategic decisions we made, how we executed, and what changed as a result. We present them because the specifics are more credible than generalised claims.",
  image: "/images/case-studies/featured-results.jpg",
}
