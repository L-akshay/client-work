"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, BadgeCheck, LockKeyhole, ShieldCheck } from "lucide-react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SupabaseSetupNotice from "@/components/portal/SupabaseSetupNotice"
import { hasSupabaseEnv } from "@/lib/supabase/config"

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!hasSupabaseEnv()) {
      return
    }

    // If already signed in, skip straight to the dashboard.
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
    const email = String(formData.get("email") ?? "").trim()
    const password = String(formData.get("password") ?? "")

    if (!email || !password) {
      setError("Email and password are required.")
      return
    }

    setSubmitting(true)
    const supabase = createClient()
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      setError(signInError.message || "Those login details did not work.")
      setSubmitting(false)
      return
    }

    router.replace("/dashboard")
  }

  return (
    <section className="relative min-h-[calc(100vh-92px)] overflow-hidden px-5 pt-36 pb-20 lg:px-16 lg:pt-40">
      <div className="absolute inset-0 bg-[#0F0F0F]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(201,168,76,1)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,1)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/45 to-transparent" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A84C]/20 bg-[#161616]/80 px-4 py-2 font-ui text-[10px] uppercase tracking-[0.24em] text-[#C9A84C]">
            <ShieldCheck className="size-3.5" />
            Client Portal
          </div>
          <h1 className="mt-8 font-serif text-[clamp(48px,8vw,104px)] font-light leading-[0.92] text-[#F5F0E8]">
            Secure access for project work.
          </h1>
          <p className="mt-6 max-w-xl font-ui text-base leading-[1.9] text-[#A9A196]">
            Clients see assigned project updates. Admins manage clients,
            projects, and published progress from one protected workspace.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {["Role based routing", "Protected by Supabase Auth"].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-l border-[#C9A84C]/25 pl-4 font-ui text-sm text-[#B8B0A2]"
              >
                <BadgeCheck className="size-4 text-[#C9A84C]" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[#C9A84C]/15 bg-[#161616]/95 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-8 lg:p-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-[#C9A84C]">
                Sign in
              </p>
              <h2 className="mt-3 font-serif text-4xl font-light text-[#F5F0E8]">
                Welcome back.
              </h2>
            </div>
            <span className="inline-flex size-12 items-center justify-center rounded-full border border-[#C9A84C]/20 bg-[#0F0F0F] text-[#C9A84C]">
              <LockKeyhole className="size-5" />
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-ui text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]">
                Email
              </label>
              <Input
                id="email"
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
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
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
              {submitting ? "Signing In..." : "Sign In"}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>

          <p className="mt-6 font-ui text-sm leading-relaxed text-[#888880]">
            Accounts are created in Supabase Auth. A user with profile role
            admin enters the admin workspace; everyone else enters the client
            portal.
          </p>

          <p className="mt-4 font-ui text-sm text-[#888880]">
            Need an account?{" "}
            <Link href="/signup" className="text-[#C9A84C] transition-colors hover:text-[#F5F0E8]">
              Create one
            </Link>
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex font-ui text-[11px] uppercase tracking-[0.24em] text-[#C9A84C]"
          >
            Back to site
          </Link>
        </div>
      </div>
    </section>
  )
}
