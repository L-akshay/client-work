import Contact from "@/components/sections/Contact"
import PageHero from "@/components/ui/PageHero"

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let&apos;s Talk"
        description="Tell us what you are building, launching, or trying to solve. We will help map the right communication strategy around it."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=80"
      />
      <Contact />
    </>
  )
}
