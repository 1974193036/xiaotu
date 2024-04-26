import { useEffect, useRef } from 'react'

export const useJumpPos = (id: string) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      const ele = document.getElementById(id)
      const elePosition = ele?.getBoundingClientRect().top || 0
      const offsetPosition = elePosition + window.scrollY - 75
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      isMounted.current = true
    }
  }, [id])
}
