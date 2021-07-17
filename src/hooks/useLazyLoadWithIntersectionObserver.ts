import { useEffect, useRef, useState } from 'react'

type IntersectionObserverProps = {
  distancePXWindowCallComponent: number
}

export const useLazyLoadWithIntersectionObserver = ({
  distancePXWindowCallComponent
}: IntersectionObserverProps) => {
  const [showComponent, setShowComponent] = useState(false)
  const renderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const callBackObserver = ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          setShowComponent(true)
        }
      }

      const options = {
        root: document.querySelector('#divObserver'),
        rootMargin: `0px 0px ${distancePXWindowCallComponent}px 0px`
      }

      const observer = new IntersectionObserver(callBackObserver, options)
      !!renderRef.current && observer.observe(renderRef.current)
    } catch {
      setShowComponent(true)
    }
  }, [distancePXWindowCallComponent, renderRef])

  return { showComponent, renderRef }
}
