"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function PageIntro() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (sessionStorage.getItem("nova_intro_seen")) {
      const t = setTimeout(() => setShow(false), 0)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem("nova_intro_seen", "1")
    }, 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f0f0f]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.05em" }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-4xl font-light text-offwhite"
          >
            Nova<span className="text-gold italic">PR</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
