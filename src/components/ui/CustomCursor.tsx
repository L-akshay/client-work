"use client"

import * as React from "react"

export default function CustomCursor() {
  const [enabled, setEnabled] = React.useState(false)
  const interactiveRef = React.useRef(false)
  const frameRef = React.useRef<number | null>(null)
  const pointRef = React.useRef({ x: -100, y: -100 })
  const dotRef = React.useRef<HTMLDivElement | null>(null)
  const ringRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)")
    const updateEnabled = () => {
      const shouldEnable = mediaQuery.matches
      setEnabled(shouldEnable)
      if (!shouldEnable && frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }

    updateEnabled()
    mediaQuery.addEventListener("change", updateEnabled)

    const handleMove = (event: MouseEvent) => {
      if (!mediaQuery.matches) return

      pointRef.current = { x: event.clientX, y: event.clientY }
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(() => {
          frameRef.current = null
          const transform = `translate3d(${pointRef.current.x}px, ${pointRef.current.y}px, 0) translate(-50%, -50%)`
          if (dotRef.current) {
            dotRef.current.style.transform = transform
          }
          if (ringRef.current) {
            ringRef.current.style.transform = transform
          }
        })
      }

      const target = event.target as HTMLElement | null
      const nextInteractive = Boolean(
        target?.closest(
          "a, button, input, textarea, select, label, [role='button']"
        )
      )
      if (nextInteractive !== interactiveRef.current) {
        interactiveRef.current = nextInteractive
        ringRef.current?.classList.toggle("opacity-100", nextInteractive)
        ringRef.current?.classList.toggle("opacity-[0.55]", !nextInteractive)
      }
    }

    window.addEventListener("mousemove", handleMove, { passive: true })

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled)
      window.removeEventListener("mousemove", handleMove)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[80] h-2 w-2 rounded-full bg-[#C9A84C] mix-blend-screen will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[79] size-[18px] rounded-full border border-[#C9A84C]/70 opacity-[0.55] transition-opacity duration-200 ease-out will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  )
}
