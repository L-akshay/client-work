import ClosingCta from "@/components/ui/ClosingCta"

export default function LetsTalk() {
  return (
    <ClosingCta
      eyebrow="Let's Talk"
      heading={[
        "Ready to build a brand story",
        "that carries further?",
      ]}
      supporting="Whether you are launching, repositioning, scaling, or repairing perception, we can design the communications system around it."
      primaryCta={{ href: "/contact", label: "Start a Conversation" }}
      secondaryCta={{ href: "/projects", label: "See All Projects" }}
    />
  )
}
