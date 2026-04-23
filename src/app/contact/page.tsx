import Contact from "@/components/sections/Contact"
import PageHero from "@/components/ui/PageHero"

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Start With a Conversation"
        description="The most useful first step is a direct discussion about your situation and what communications strategy could realistically do for your goals."
        image="/images/hero/contact.jpg"
      />
      <Contact />
    </>
  )
}
