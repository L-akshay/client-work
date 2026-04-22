export type ContactOption = {
  label: "Email" | "LinkedIn" | "For Press Enquiries"
  title: string
  description: string
  value: string
  href: string
  external?: boolean
}

export type ContactExpectation = {
  title: string
  timeframe: string
  description: string
}

export type ContactTopic = {
  title: string
  description: string
}

export type ContactQuestion = {
  question: string
  answer: string
}

export type ContactReason = {
  title: string
  description: string
}

export const contactPageIntro = {
  label: "Page 6 | Contact",
  title: "Start With a Conversation",
  description:
    "The most useful first step is always a direct discussion about your situation. A real conversation with someone who can give you an honest assessment of what communications strategy could do for your goals.",
}

export const contactStrategyConsultation = {
  label: "Primary Contact: Strategy Consultation",
  title: "A direct assessment of where communications strategy can genuinely help.",
  paragraphs: [
    "A strategy consultation is a 30-minute conversation covering your current communications position, your commercial objectives, and the specific challenge or opportunity you are trying to address.",
    "At the end, you will have a clear sense of whether PR is the right lever for your goals, what an engagement with NovaPR would look like, and what results are realistically achievable in what timeframe.",
    "No obligation follows. Some consultations confirm that PR is the right investment and we agree to scope an engagement. Others clarify that a different approach would better serve your goals, and we say so. Either outcome is useful for you.",
  ],
  highlights: [
    {
      title: "30 minutes",
      description: "Structured conversation focused on goals, position, and pressure points.",
    },
    {
      title: "No obligation",
      description: "If PR is not the right lever, we will tell you directly.",
    },
    {
      title: "Within 2 business days",
      description: "Most consultations are scheduled inside that window after request.",
    },
  ],
}

export const contactOptions: ContactOption[] = [
  {
    label: "Email",
    title: "Detailed enquiries, RFPs, or first questions.",
    description:
      "For detailed enquiries, RFP submissions, or initial questions before scheduling a call. We respond within one business day.",
    value: "hello@novapr.co",
    href: "mailto:hello@novapr.co",
  },
  {
    label: "LinkedIn",
    title: "Professional introductions through your network.",
    description:
      "For professional introductions and initial contact from the network. We check and respond to LinkedIn messages during business hours.",
    value: "linkedin.com/company/novapr",
    href: "https://www.linkedin.com/company/novapr",
    external: true,
  },
  {
    label: "For Press Enquiries",
    title: "Direct access for journalists and commentary requests.",
    description:
      "Journalists seeking expert commentary on communications, PR industry matters, or brand strategy can reach us directly. We respond to media enquiries within four hours during business hours.",
    value: "press@novapr.co",
    href: "mailto:press@novapr.co",
  },
]

export const contactExpectationsIntro = {
  label: "What To Expect",
  title: "The first response is senior, direct, and substantive.",
  description:
    "When you reach out to NovaPR, you are contacted by a senior member of the team, not an account coordinator or business development representative. The first conversation is prepared, practical, and focused on your communications landscape rather than a generic agency pitch.",
}

export const contactExpectations: ContactExpectation[] = [
  {
    title: "Strategy consultation booking",
    timeframe: "Confirmed within 4 business hours",
    description: "Most requests are scheduled within 2 business days of first contact.",
  },
  {
    title: "Email enquiry response",
    timeframe: "Within 1 business day",
    description: "Useful for detailed briefs, RFPs, and questions before scheduling a call.",
  },
  {
    title: "LinkedIn message",
    timeframe: "Within 1 business day",
    description: "Responses are handled during business hours for network-led introductions.",
  },
  {
    title: "Press enquiry",
    timeframe: "Within 4 hours",
    description: "Media requests are prioritized during business hours for timely commentary.",
  },
]

export const contactConversationTopicsIntro = {
  label: "What We Cover In The First Conversation",
  title: "A useful first call should leave you clearer than before it started.",
  description:
    "The first conversation covers the commercial context, the communications gap, and the level of urgency around the situation you are navigating now.",
}

export const contactConversationTopics: ContactTopic[] = [
  {
    title: "Current media presence",
    description:
      "Where you currently stand in the editorial landscape and the gap between where you are and where you need to be.",
  },
  {
    title: "Commercial objectives",
    description:
      "What the business is trying to achieve and how communications strategy could realistically connect to that outcome.",
  },
  {
    title: "Challenge or opportunity",
    description:
      "The specific launch, market entry, reputation issue, funding event, or visibility gap driving the conversation.",
  },
  {
    title: "Realistic engagement shape",
    description:
      "What a credible scope, timeline, and investment range would look like if the work is a fit.",
  },
  {
    title: "Immediate communications pressure",
    description:
      "Any active or anticipated situation that may require faster strategic attention or reactive preparation.",
  },
  {
    title: "Honest fit assessment",
    description:
      "Whether PR is the right tool for your objective right now, or whether another route would serve you better.",
  },
]

export const contactFaqs: ContactQuestion[] = [
  {
    question: "Do I need to prepare anything for the first call?",
    answer:
      "No formal preparation is needed. The more you can tell us about your commercial situation and what a successful outcome looks like, the more productive the conversation will be. But we are comfortable working from a brief description of the challenge.",
  },
  {
    question: "We are not based in the UK. Can we still work with you?",
    answer:
      "Yes. We work with clients across the UK, US, Canada, and Australia. Most client relationships are managed entirely remotely, and time zone coordination is discussed during initial scoping.",
  },
  {
    question: "We are at an early stage. Are we too small to engage?",
    answer:
      "It depends on the objective. Early-stage companies often have legitimate communications needs such as pre-funding visibility, founder profile building, or market entry preparation. We assess fit honestly during the consultation.",
  },
  {
    question: "Can we engage on a project basis rather than a retained relationship?",
    answer:
      "Yes. Some engagements are project-defined, such as a launch campaign, a crisis response, or a thought leadership programme with a defined duration. We discuss structure during the consultation based on your objectives.",
  },
  {
    question: "How confidential are our conversations?",
    answer:
      "Entirely. We do not discuss current or prospective client situations with anyone outside the direct engagement team. Confidentiality is a baseline, not a selling point.",
  },
  {
    question: "Do you sign NDAs before initial conversations?",
    answer:
      "Yes. We are willing to sign an NDA before any conversation that requires it. For most initial consultations we work under an assumption of confidentiality without a formal document, but we will sign one if your situation requires it.",
  },
]

export const contactReasonsIntro = {
  label: "Why This Conversation Is Worth Having",
  title: "Clarity is valuable even before an engagement exists.",
  description:
    "The first conversation costs nothing and commits you to nothing. It is simply the most efficient way to determine whether NovaPR can genuinely help with what you are trying to achieve.",
}

export const contactReasons: ContactReason[] = [
  {
    title: "Clarity on whether PR is the right investment",
    description:
      "Not every commercial challenge requires a PR solution. We are direct about this and will tell you if another approach is more likely to serve your goals.",
  },
  {
    title: "Honest timeline expectations",
    description:
      "We will tell you what is achievable in 90 days, six months, and 12 months based on your starting position rather than promising unrealistic momentum to win a retainer.",
  },
  {
    title: "No pressure to proceed",
    description:
      "The consultation is informational in both directions. We are assessing fit as much as you are, because engagements that start without it rarely produce good results.",
  },
  {
    title: "Immediate strategic value",
    description:
      "Most consultations produce at least one concrete insight or reframing of the communications challenge that is useful immediately, whether or not an engagement follows.",
  },
]
