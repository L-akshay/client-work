"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [enabled, setEnabled] = React.useState(false)
  const [interactive, setInteractive] = React.useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(cursorX, { stiffness: 220, damping: 28, mass: 0.5 })
  const ringY = useSpring(cursorY, { stiffness: 220, damping: 28, mass: 0.5 })

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)")
    const updateEnabled = () => setEnabled(mediaQuery.matches)

    updateEnabled()
    mediaQuery.addEventListener("change", updateEnabled)

    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
      const target = event.target as HTMLElement | null
      setInteractive(
        Boolean(
          target?.closest(
            "a, button, input, textarea, select, label, [role='button']"
          )
        )
      )
    }

    window.addEventListener("mousemove", handleMove, { passive: true })

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled)
      window.removeEventListener("mousemove", handleMove)
    }
  }, [cursorX, cursorY])

  if (!enabled) {
    return null
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[80] h-2 w-2 rounded-full bg-[#C9A84C] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[79] rounded-full border border-[#C9A84C]/70"
        animate={{
          width: interactive ? 40 : 18,
          height: interactive ? 40 : 18,
          opacity: interactive ? 1 : 0.55,
        }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  )
}
