'use client'
import { useEffect, useRef } from "react"
import { trackingVisitor } from "@/app/lib/api"

export function VisitorTracker() {
  const tracked = useRef(false)

  useEffect(() => {
    if (tracked.current) return
    tracked.current = true

    async function track() {
      await trackingVisitor()
    }

    track()
  }, [])

  return null
}
