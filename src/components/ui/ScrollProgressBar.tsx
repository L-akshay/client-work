"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.5,
  })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-px w-full origin-left bg-[#C9A84C]"
      style={{ scaleX }}
    />
  )
}
