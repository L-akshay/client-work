"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import SupabaseSetupNotice from "@/components/portal/SupabaseSetupNotice"
import { createClient } from "@/lib/supabase/client"
import { hasSupabaseEnv } from "@/lib/supabase/config"
import type { Profile } from "@/lib/supabase/types"

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    if (!hasSupabaseEnv()) {
      return
    }

    const supabase = createClient()

    async function route() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.replace("/login")
        return
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("id,email,full_name,company_name,role")
        .eq("id", user.id)
        .single<Profile>()

      if (profile?.role === "admin") {
        router.replace("/dashboard/admin")
      } else {
        router.replace("/dashboard/client")
      }
    }

    route()
  }, [router])

  if (!hasSupabaseEnv()) {
    return <SupabaseSetupNotice />
  }

  return (
    <section className="flex min-h-[calc(100vh-92px)] items-center justify-center px-5 py-32 lg:px-16">
      <p className="font-ui text-[11px] uppercase tracking-[0.34em] text-[#C9A84C]">
        Loading workspace...
      </p>
    </section>
  )
}
