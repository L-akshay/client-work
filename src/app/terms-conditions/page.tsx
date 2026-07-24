import type { Metadata } from "next"

import LegalPage from "@/components/legal/LegalPage"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for prforbrand.",
}

const sections = [
  {
    title: "Use of This Website",
    body: [
      "By using this website, you agree to use it lawfully and in a way that does not interfere with its operation, security, or availability.",
      "The content on this website is provided for general information about prforbrand and our services. It does not create a client relationship unless a separate written agreement is signed.",
    ],
  },
  {
    title: "Services and Proposals",
    body: [
      "Any service scope, pricing, timelines, deliverables, and responsibilities will be governed by the relevant proposal, statement of work, or agreement between prforbrand and the client.",
      "Website descriptions of services are illustrative and may change based on client needs, strategy, and engagement terms.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All website text, visuals, branding, layouts, and other materials are owned by prforbrand or used with permission unless otherwise stated.",
      "You may not copy, reproduce, distribute, or modify website materials without prior written permission.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "We aim to keep website information accurate and available, but we do not guarantee that the site will always be error-free, uninterrupted, or fully up to date.",
      "To the fullest extent permitted by law, prforbrand is not liable for losses arising from use of, or reliance on, this website.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these terms, contact us at Hello@prforbrand.com.",
      "You can also call us at 9871670798 or write to VILLAGE IMALIYAKA, GAUTAM BUDH NAGAR, PIN: 201310, UTTAR PRADESH, INDIA.",
    ],
  },
]

export default function TermsConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="These terms outline the basic conditions for using the prforbrand website and engaging with our published materials."
      updated="June 1, 2026"
      sections={sections}
    />
  )
}
