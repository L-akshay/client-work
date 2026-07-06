"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import SupabaseSetupNotice from "@/components/portal/SupabaseSetupNotice"
import { createClient } from "@/lib/supabase/client"
import { hasSupabaseEnv } from "@/lib/supabase/config"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    if (!hasSupabaseEnv()) {
      setChecking(false)
      return
    }

    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        router.replace("/login")
        return
      }
      setChecking(false)
    })
  }, [router])

  if (!hasSupabaseEnv()) {
    return <SupabaseSetupNotice />
  }

  if (checking) {
    return (
      <section className="flex min-h-[calc(100vh-92px)] items-center justify-center px-5 py-32 lg:px-16">
        <p className="font-ui text-[11px] uppercase tracking-[0.34em] text-[#C9A84C]">
          Loading workspace...
        </p>
      </section>
    )
  }

  return <>{children}</>
}
