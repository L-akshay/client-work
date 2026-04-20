"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
