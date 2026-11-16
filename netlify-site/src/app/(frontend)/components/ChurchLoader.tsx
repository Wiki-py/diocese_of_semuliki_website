"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

export function ChurchLoader({
  label = "Loading",
  decorative = false,
}: {
  label?: string
  decorative?: boolean
}) {
  return (
    <span
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : label}
      className="church-loader"
      role={decorative ? undefined : "status"}
    >
      <span className="church-loader__ring" />
      <svg
        aria-hidden="true"
        className="church-loader__cross"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          d="M13 4h6v8h7v6h-7v10h-6V18H6v-6h7V4Z"
          fill="currentColor"
        />
      </svg>
      {!decorative && <span className="sr-only">{label}</span>}
    </span>
  )
}

export function RouteChangeLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const delayedShow = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fallbackHide = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const clearTimers = () => {
      if (delayedShow.current) clearTimeout(delayedShow.current)
      if (fallbackHide.current) clearTimeout(fallbackHide.current)
      delayedShow.current = null
      fallbackHide.current = null
    }

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) {
        return
      }

      const link = event.target.closest("a[href]")
      if (
        !link ||
        !(link instanceof HTMLAnchorElement) ||
        link.hasAttribute("download") ||
        (link.target !== "" && link.target !== "_self")
      ) {
        return
      }

      const destination = new URL(link.href, window.location.href)
      if (
        destination.origin !== window.location.origin ||
        (destination.pathname === window.location.pathname &&
          destination.search === window.location.search)
      ) {
        return
      }

      clearTimers()
      delayedShow.current = setTimeout(() => setVisible(true), 120)
      fallbackHide.current = setTimeout(() => {
        setVisible(false)
        clearTimers()
      }, 12000)
    }

    document.addEventListener("click", handleClick, true)
    return () => {
      document.removeEventListener("click", handleClick, true)
      clearTimers()
    }
  }, [])

  useEffect(() => {
    setVisible(false)
    if (delayedShow.current) clearTimeout(delayedShow.current)
    if (fallbackHide.current) clearTimeout(fallbackHide.current)
    delayedShow.current = null
    fallbackHide.current = null
  }, [pathname])

  return (
    <div
      aria-hidden={!visible}
      className="route-change-loader"
      data-visible={visible ? "true" : undefined}
    >
      <ChurchLoader label="Loading page" />
    </div>
  )
}
