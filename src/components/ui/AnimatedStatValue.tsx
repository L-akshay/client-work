"use client"

import * as React from "react"
import { animate, useInView, useMotionValue } from "framer-motion"

type AnimatedStatValueProps = {
  value: number
  suffix?: string
  delay?: number
  duration?: number
  className?: string
}

export default function AnimatedStatValue({
  value,
  suffix = "",
  delay = 0,
  duration = 1.4,
  className,
}: AnimatedStatValueProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const motionValue = useMotionValue(0)
  const [display, setDisplay] = React.useState(0)

  React.useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplay(Math.round(latest))
    })

    return unsubscribe
  }, [motionValue])

  React.useEffect(() => {
    if (!isInView) {
      return
    }

    const controls = animate(motionValue, value, {
      duration,
      delay,
      ease: "easeOut",
    })

    return () => controls.stop()
  }, [delay, duration, isInView, motionValue, value])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
