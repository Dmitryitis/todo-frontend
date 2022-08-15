import { useEffect } from "react"

interface PropsObserver {
  enabled: boolean | undefined
  onIntersect: any
  root: any
  rootMargin: string
  target: any
  threshold: number
}

export default function useIntersectionObserver({
  enabled = true,
  onIntersect,
  root,
  rootMargin = "0px",
  target,
  threshold = 0.1,
}: PropsObserver) {
  useEffect(() => {
    if (!enabled) {
      return
    }

    console.log(32)

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        root: root && root.current,
        rootMargin,
        threshold,
      },
    )

    const el = target && target.current

    if (!el) {
      return
    }

    observer.observe(el)

    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(el)
    }
  }, [target.current, enabled])
}
