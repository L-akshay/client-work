"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function PageLoader() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    let shouldShowLoader = false

    try {
      const hasSeenLoader = window.sessionStorage.getItem("novapr-loader-seen")

      if (hasSeenLoader) {
        return
      }

      shouldShowLoader = true
      window.sessionStorage.setItem("novapr-loader-seen", "true")
    } catch {
      shouldShowLoader = true
    }

    if (!shouldShowLoader) {
      return
    }

    const showTimer = window.setTimeout(() => setVisible(true), 0)
    const hideTimer = window.setTimeout(() => setVisible(false), 1200)

    return () => {
      window.clearTimeout(showTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-[#0f0f0f]"
        >
          <p className="font-serif text-4xl font-medium tracking-[0.08em] text-offwhite sm:text-5xl">
            Nova<span className="text-gold">PR</span>
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
