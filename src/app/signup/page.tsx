"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, UserPlus } from "lucide-react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SupabaseSetupNotice from "@/components/portal/SupabaseSetupNotice"
import { hasSupabaseEnv } from "@/lib/supabase/config"

function getSignupErrorMessage(message?: string) {
  if (message?.toLowerCase().includes("email rate limit")) {
    return "Supabase email rate limit exceeded. Turn off Confirm Email in Authentication -> Providers -> Email, then wait for the current rate-limit window to clear before trying again."
  }

  if (message?.toLowerCase().includes("email signups are disabled")) {
    return "Email signup is disabled in Supabase. Enable Email/Password and Allow new users to sign up in Authentication -> Providers -> Email."
  }

  return (
    message ||
    "We could not create that account. Try another email or password."
  )
}

export default function SignupPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!hasSupabaseEnv()) {
      return
    }

    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        router.replace("/dashboard")
      }
    })
  }, [router])

  if (!hasSupabaseEnv()) {
    return <SupabaseSetupNotice />
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const formData = new FormData(event.currentTarget)
    const fullName = String(formData.get("full_name") ?? "").trim()
    const companyName = String(formData.get("company_name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const password = String(formData.get("password") ?? "")

    if (!fullName || !email || !password) {
      setError("Name, email, and password are required.")
      return
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.")
      return
    }

    setSubmitting(true)
    const supabase = createClient()
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          company_name: companyName || null,
        },
      },
    })

    if (signUpError) {
      setError(getSignupErrorMessage(signUpError.message))
      setSubmitting(false)
      return
    }

    if (data.session) {
      router.replace("/dashboard")
      return
    }

    setError(
      "Account created, but Supabase email confirmation is still enabled. Disable Confirm Email in Authentication -> Providers -> Email so new users can sign in immediately without a confirmation email."
    )
    setSubmitting(false)
  }

  return (
    <section className="relative min-h-[calc(100vh-92px)] overflow-hidden px-5 pt-36 pb-20 lg:px-16 lg:pt-40">
      <div className="absolute inset-0 bg-[#0F0F0F]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(201,168,76,1)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,1)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/45 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_0.8fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="font-ui text-[11px] uppercase tracking-[0.34em] text-[#C9A84C]">
            Create Account
          </p>
          <h1 className="mt-8 font-serif text-[clamp(48px,8vw,104px)] font-light leading-[0.92] text-[#F5F0E8]">
            Start with a client workspace.
          </h1>
          <p className="mt-6 max-w-xl font-ui text-base leading-[1.9] text-[#A9A196]">
            New accounts are created as clients and can sign in immediately
            when Supabase email confirmation is disabled.
          </p>
        </div>

        <div className="border border-[#C9A84C]/15 bg-[#161616]/95 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#C9A84C]">
                Signup
              </p>
              <h2 className="mt-3 font-serif text-4xl font-light text-[#F5F0E8]">
                Create access.
              </h2>
            </div>
            <span className="inline-flex size-12 items-center justify-center rounded-full border border-[#C9A84C]/20 bg-[#0F0F0F] text-[#C9A84C]">
              <UserPlus className="size-5" />
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-ui text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">
                Full Name
              </label>
              <Input
                id="full_name"
                name="full_name"
                autoComplete="name"
                placeholder="Your name"
                required
                className="mt-3 min-h-13 rounded-none border-[#2A2A2A] bg-[#111111] px-5 text-[#F5F0E8] placeholder:text-[#6F6A61]"
              />
            </div>
            <div>
              <label className="font-ui text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">
                Company
              </label>
              <Input
                id="company_name"
                name="company_name"
                autoComplete="organization"
                placeholder="Company name"
                className="mt-3 min-h-13 rounded-none border-[#2A2A2A] bg-[#111111] px-5 text-[#F5F0E8] placeholder:text-[#6F6A61]"
              />
            </div>
            <div>
              <label className="font-ui text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">
                Email
              </label>
              <Input
                id="signup_email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                required
                className="mt-3 min-h-13 rounded-none border-[#2A2A2A] bg-[#111111] px-5 text-[#F5F0E8] placeholder:text-[#6F6A61]"
              />
            </div>
            <div>
              <label className="font-ui text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">
                Password
              </label>
              <Input
                id="signup_password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="At least 8 characters"
                minLength={8}
                required
                className="mt-3 min-h-13 rounded-none border-[#2A2A2A] bg-[#111111] px-5 text-[#F5F0E8] placeholder:text-[#6F6A61]"
              />
            </div>

            {error ? (
              <p className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 font-ui text-sm text-red-100">
                {error}
              </p>
            ) : null}

            <Button
              type="submit"
              disabled={submitting}
              className="min-h-13 w-full rounded-none bg-[#C9A84C] font-ui text-[11px] uppercase tracking-[0.26em] text-[#0F0F0F] hover:bg-[#E0C061] disabled:opacity-60"
            >
              {submitting ? "Creating..." : "Create Account"}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>

          <p className="mt-6 font-ui text-sm text-[#888880]">
            Already have access?{" "}
            <Link href="/login" className="text-[#C9A84C] transition-colors hover:text-[#F5F0E8]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
