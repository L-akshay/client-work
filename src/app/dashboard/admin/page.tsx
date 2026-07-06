"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Plus, Send } from "lucide-react"

import DashboardShell from "@/app/dashboard/Shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SupabaseSetupNotice from "@/components/portal/SupabaseSetupNotice"
import { createClient } from "@/lib/supabase/client"
import { hasSupabaseEnv } from "@/lib/supabase/config"
import type { Profile, Project } from "@/lib/supabase/types"

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [clients, setClients] = useState<Profile[]>([])
  const [error, setError] = useState<string | null>(null)

  async function fetchProjects() {
    const supabase = createClient()
    const { data } = await supabase
      .from("projects")
      .select("id,name,slug,client_name,status,summary,start_date,due_date,budget")
      .order("created_at", { ascending: false })
      .returns<Project[]>()
    setProjects(data ?? [])
  }

  useEffect(() => {
    if (!hasSupabaseEnv()) {
      setLoading(false)
      return
    }

    const supabase = createClient()

    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.replace("/login")
        return
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("id,email,full_name,company_name,role")
        .eq("id", user.id)
        .single<Profile>()

      if (profileData?.role !== "admin") {
        router.replace("/dashboard/client")
        return
      }

      const [{ data: projectData }, { data: clientData }] = await Promise.all([
        supabase
          .from("projects")
          .select("id,name,slug,client_name,status,summary,start_date,due_date,budget")
          .order("created_at", { ascending: false })
          .returns<Project[]>(),
        supabase
          .from("profiles")
          .select("id,email,full_name,company_name,role")
          .eq("role", "client")
          .order("created_at", { ascending: false })
          .returns<Profile[]>(),
      ])

      setProfile(profileData)
      setProjects(projectData ?? [])
      setClients(clientData ?? [])
      setLoading(false)
    }

    load()
  }, [router])

  async function handleCreateProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") ?? "").trim()
    const clientName = String(formData.get("client_name") ?? "").trim()
    const clientUserId = String(formData.get("client_user_id") ?? "").trim()
    const summary = String(formData.get("summary") ?? "").trim()
    const status = String(formData.get("status") ?? "planning").trim()

    if (!name) {
      setError("Something went wrong. Check required fields and Supabase RLS setup.")
      return
    }

    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      router.replace("/login")
      return
    }

    const { data: project, error: insertError } = await supabase
      .from("projects")
      .insert({
        name,
        slug: toSlug(name),
        client_name: clientName || null,
        summary: summary || null,
        status,
        created_by: user.id,
      })
      .select("id")
      .single()

    if (insertError || !project) {
      setError("Something went wrong. Check required fields and Supabase RLS setup.")
      return
    }

    if (clientUserId) {
      await supabase.from("project_members").insert({
        project_id: project.id,
        user_id: clientUserId,
        role: "client",
      })
    }

    form.reset()
    await fetchProjects()
  }

  async function handleCreateUpdate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const projectId = String(formData.get("project_id") ?? "").trim()
    const title = String(formData.get("title") ?? "").trim()
    const body = String(formData.get("body") ?? "").trim()
    const status = String(formData.get("status") ?? "published").trim()

    if (!projectId || !title) {
      setError("Something went wrong. Check required fields and Supabase RLS setup.")
      return
    }

    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      router.replace("/login")
      return
    }

    const { error: insertError } = await supabase.from("project_updates").insert({
      project_id: projectId,
      title,
      body: body || null,
      status,
      created_by: user.id,
      published_at: status === "published" ? new Date().toISOString() : null,
    })

    if (insertError) {
      setError("Something went wrong. Check required fields and Supabase RLS setup.")
      return
    }

    form.reset()
    await fetchProjects()
  }

  if (!hasSupabaseEnv()) {
    return <SupabaseSetupNotice />
  }

  if (loading) {
    return (
      <section className="flex min-h-[calc(100vh-92px)] items-center justify-center px-5 py-32 lg:px-16">
        <p className="font-ui text-[11px] uppercase tracking-[0.34em] text-[#C9A84C]">
          Loading workspace...
        </p>
      </section>
    )
  }

  return (
    <DashboardShell profile={profile} eyebrow="Admin" title="Project management">
      {error ? (
        <div className="mb-6 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 font-ui text-sm text-red-100">
          {error}
        </div>
      ) : null}

      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-8">
          <form
            onSubmit={handleCreateProject}
            className="rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-[#C9A84C] text-[#0F0F0F]">
                <Plus className="size-4" />
              </span>
              <h2 className="font-serif text-3xl font-light text-[#F5F0E8]">
                New project
              </h2>
            </div>

            <div className="space-y-4">
              <Input name="name" placeholder="Project name" className="min-h-12 rounded-full bg-[#111111] px-5" />
              <Input name="client_name" placeholder="Client name" className="min-h-12 rounded-full bg-[#111111] px-5" />
              <select
                name="client_user_id"
                defaultValue=""
                className="min-h-12 w-full rounded-full border border-[#2A2A2A] bg-[#111111] px-5 font-ui text-sm text-[#F5F0E8]"
              >
                <option value="">Assign client later</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.full_name || client.email || client.id}
                  </option>
                ))}
              </select>
              <select
                name="status"
                defaultValue="planning"
                className="min-h-12 w-full rounded-full border border-[#2A2A2A] bg-[#111111] px-5 font-ui text-sm text-[#F5F0E8]"
              >
                <option value="planning">Planning</option>
                <option value="active">Active</option>
                <option value="review">In Review</option>
                <option value="completed">Completed</option>
              </select>
              <Textarea name="summary" placeholder="Project summary" className="min-h-28 rounded-[22px] bg-[#111111] px-5" />
            </div>

            <Button className="mt-5 min-h-12 w-full rounded-full bg-[#C9A84C] font-ui text-[11px] uppercase tracking-[0.24em] text-[#0F0F0F]">
              Create Project
            </Button>
          </form>

          <form
            onSubmit={handleCreateUpdate}
            className="rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] p-7"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full border border-[#C9A84C]/20 text-[#C9A84C]">
                <Send className="size-4" />
              </span>
              <h2 className="font-serif text-3xl font-light text-[#F5F0E8]">
                Add update
              </h2>
            </div>

            <div className="space-y-4">
              <select
                name="project_id"
                defaultValue=""
                className="min-h-12 w-full rounded-full border border-[#2A2A2A] bg-[#111111] px-5 font-ui text-sm text-[#F5F0E8]"
              >
                <option value="" disabled>
                  Select project
                </option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
              <Input name="title" placeholder="Update title" className="min-h-12 rounded-full bg-[#111111] px-5" />
              <Textarea name="body" placeholder="Update details" className="min-h-28 rounded-[22px] bg-[#111111] px-5" />
              <select
                name="status"
                defaultValue="published"
                className="min-h-12 w-full rounded-full border border-[#2A2A2A] bg-[#111111] px-5 font-ui text-sm text-[#F5F0E8]"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>

            <Button className="mt-5 min-h-12 w-full rounded-full bg-[#C9A84C] font-ui text-[11px] uppercase tracking-[0.24em] text-[#0F0F0F]">
              Publish Update
            </Button>
          </form>
        </div>

        <div className="rounded-[28px] border border-[#C9A84C]/15 bg-[#161616] p-7">
          <h2 className="font-serif text-3xl font-light text-[#F5F0E8]">
            Projects
          </h2>
          <div className="mt-6 space-y-4">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-[22px] border border-[#2A2A2A] bg-[#111111] p-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-light text-[#F5F0E8]">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-ui text-sm text-[#888880]">
                      {project.client_name || "No client name"}
                    </p>
                  </div>
                  <span className="rounded-full border border-[#C9A84C]/20 px-3 py-1 font-ui text-[10px] uppercase tracking-[0.22em] text-[#C9A84C]">
                    {project.status}
                  </span>
                </div>
                {project.summary ? (
                  <p className="mt-4 font-ui text-sm leading-relaxed text-[#888880]">
                    {project.summary}
                  </p>
                ) : null}
              </article>
            ))}

            {!projects.length ? (
              <p className="font-ui text-sm text-[#888880]">
                No projects yet. Create the first one from the form.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}
