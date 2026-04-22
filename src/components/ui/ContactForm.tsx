import { Building2, Mail, Phone, User } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { services } from "@/lib/data/services"
import { cn } from "@/lib/utils"

function Field({
  icon: Icon,
  placeholder,
  type = "text",
}: {
  icon: typeof User
  placeholder: string
  type?: string
}) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#C9A84C]" />
      <Input
        type={type}
        placeholder={placeholder}
        className="min-h-14 rounded-full border-[#2A2A2A] bg-[#161616] pl-11 font-ui text-[#F5F0E8] placeholder:text-[#888880] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:border-[#C9A84C]/40 focus-visible:border-[#C9A84C] focus-visible:ring-[rgba(201,168,76,0.16)]"
      />
    </div>
  )
}

function SelectField({
  className,
  defaultLabel,
  options,
}: {
  className?: string
  defaultLabel: string
  options: string[]
}) {
  return (
    <select
      defaultValue=""
      className={cn(
        "min-h-14 w-full appearance-none rounded-full border border-[#2A2A2A] bg-[#161616] px-5 font-sans text-sm text-[#F5F0E8] outline-none transition-colors duration-700 focus:border-[#C9A84C]",
        "font-ui hover:border-[#C9A84C]/40",
        className
      )}
    >
      <option value="" disabled>
        {defaultLabel}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

type ContactFormProps = {
  compact?: boolean
  primarySelectLabel?: string
  primarySelectOptions?: string[]
  secondarySelectLabel?: string
  secondarySelectOptions?: string[]
  messagePlaceholder?: string
  submitLabel?: string
}

export default function ContactForm({
  compact = false,
  primarySelectLabel = "Service Interested In",
  primarySelectOptions = services.map((service) => service.title),
  secondarySelectLabel = "Budget Range",
  secondarySelectOptions = ["Under 2L", "2L - 5L", "5L - 10L", "10L+"],
  messagePlaceholder = "Tell us what you are building, launching, or solving.",
  submitLabel = "Submit Inquiry",
}: ContactFormProps) {
  return (
    <form className="space-y-4">
      <div className={cn("grid gap-4", !compact && "md:grid-cols-2")}>
        <Field icon={User} placeholder="Full Name" />
        <Field icon={Mail} placeholder="Email Address" type="email" />
      </div>

      <div className={cn("grid gap-4", !compact && "md:grid-cols-2")}>
        <Field icon={Phone} placeholder="Phone Number" type="tel" />
        <Field icon={Building2} placeholder="Company Name" />
      </div>

      <div className={cn("grid gap-4", !compact && "md:grid-cols-2")}>
        <SelectField defaultLabel={primarySelectLabel} options={primarySelectOptions} />
        <SelectField defaultLabel={secondarySelectLabel} options={secondarySelectOptions} />
      </div>

      <Textarea
        rows={compact ? 5 : 7}
        placeholder={messagePlaceholder}
        className="rounded-[28px] border-[#2A2A2A] bg-[#161616] px-5 py-4 font-ui text-[#F5F0E8] placeholder:text-[#888880] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:border-[#C9A84C]/40 focus-visible:border-[#C9A84C] focus-visible:ring-[rgba(201,168,76,0.16)]"
      />

      <button
        type="submit"
        className="group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full border border-[#C9A84C] bg-[#C9A84C] px-6 py-4 font-ui text-[11px] uppercase tracking-[0.3em] text-[#0F0F0F] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_16px_30px_rgba(201,168,76,0.2)]"
      >
        <span className="absolute inset-y-0 left-[-28%] w-1/4 -skew-x-12 bg-[rgba(245,240,232,0.24)] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:left-[110%]" />
        <span className="relative z-10">{submitLabel}</span>
      </button>
    </form>
  )
}
