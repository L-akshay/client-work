"use client"

import * as React from "react"

export default function ScrollProgressBar() {
  const [enabled, setEnabled] = React.useState(false)
  const barRef = React.useRef<HTMLDivElement | null>(null)
  const frameRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    const updateEnabled = () => setEnabled(mediaQuery.matches)

    updateEnabled()
    mediaQuery.addEventListener("change", updateEnabled)

    return () => mediaQuery.removeEventListener("change", updateEnabled)
  }, [])

  React.useEffect(() => {
    if (!enabled) return

    const updateProgress = () => {
      frameRef.current = null
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${Math.min(
          Math.max(progress, 0),
          1
        )})`
      }
    }

    const requestUpdate = () => {
      if (frameRef.current !== null) return
      frameRef.current = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener("scroll", requestUpdate, { passive: true })
    window.addEventListener("resize", requestUpdate)

    return () => {
      window.removeEventListener("scroll", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <div
      ref={barRef}
      className="fixed left-0 top-0 z-[90] h-px w-full origin-left bg-[#C9A84C]"
      style={{ transform: "scaleX(0)" }}
    />
  )
}
