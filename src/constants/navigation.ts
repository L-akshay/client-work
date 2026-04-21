import { services } from "@/lib/data/services"

export const navigationLinks: {
  label: string
  href: string
  hasDropdown: boolean
}[] = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "About Us", href: "/about", hasDropdown: false },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies", hasDropdown: false },
  { label: "Blog", href: "/blog", hasDropdown: false },
  { label: "Contact Us", href: "/contact", hasDropdown: false },
]

export const serviceNavigationLinks = services.map((service) => ({
  label: service.shortLabel,
  href: `/services/${service.slug}`,
}))

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
]
