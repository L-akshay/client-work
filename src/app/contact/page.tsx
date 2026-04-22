import Contact from "@/components/sections/Contact"
import PageHero from "@/components/ui/PageHero"

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Start With a Conversation"
        description="The most useful first step is a direct discussion about your situation and what communications strategy could realistically do for your goals."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=80"
      />
      <Contact />
    </>
  )
}
