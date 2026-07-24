"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [enabled, setEnabled] = React.useState(false)
  const [visible, setVisible] = React.useState(false)
  const visibleRef = React.useRef(false)
  const frameRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    const updateEnabled = () => {
      const shouldEnable = mediaQuery.matches
      setEnabled(shouldEnable)
      if (!shouldEnable) {
        visibleRef.current = false
        setVisible(false)
        if (frameRef.current !== null) {
          window.cancelAnimationFrame(frameRef.current)
          frameRef.current = null
        }
      }
    }

    updateEnabled()
    mediaQuery.addEventListener("change", updateEnabled)

    return () => mediaQuery.removeEventListener("change", updateEnabled)
  }, [])

  React.useEffect(() => {
    if (!enabled) return

    const updateVisible = () => {
      frameRef.current = null
      const nextVisible = window.scrollY > 400
      if (nextVisible !== visibleRef.current) {
        visibleRef.current = nextVisible
        setVisible(nextVisible)
      }
    }

    const handleScroll = () => {
      if (frameRef.current !== null) return
      frameRef.current = window.requestAnimationFrame(updateVisible)
    }

    updateVisible()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-5 z-[70] inline-flex size-12 items-center justify-center rounded-full border border-[#C9A84C] bg-[#0F0F0F] text-[#C9A84C] shadow-[0_0_0_1px_rgba(201,168,76,0.12)] transition-colors duration-700 hover:bg-[#C9A84C] hover:text-[#0F0F0F] lg:right-8 lg:bottom-8"
          aria-label="Back to top"
        >
          <ChevronUp className="size-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
