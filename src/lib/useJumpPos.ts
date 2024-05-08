import { debounce } from 'lodash-es'
import { useEffect, useRef } from 'react'

export const useJumpPos = (
  activeObj: { id: string; type: string },
  setActiveObj: Function
) => {
  const isMounted = useRef(false)

  const { id, type } = activeObj

  // useEffect(() => {
  //   const eles = document.getElementById('link-content-inner')
  //   const children = eles?.children || []
  //   let io: IntersectionObserver | null

  //   if ('IntersectionObserver' in window && eles && children.length > 0) {
  //     io = new IntersectionObserver(
  //       (entries) => {
  //         // 观察了很多个元素，entries内有很多项
  //         let targetElement: Element | null = null
  //         entries.forEach((entry) => {
  //           // console.log(entry.isIntersecting, entry.target, entry)
  //           if (entry.boundingClientRect.top < 0) {
  //             if (!entry.isIntersecting) {
  //               // 向下滚动
  //               targetElement = entry.target.nextElementSibling
  //             } else {
  //               // 向上滚动
  //               targetElement = entry.target
  //             }
  //           }
  //           if (targetElement) {
  //             const id = targetElement.getAttribute('id')
  //             setActiveObj({
  //               id,
  //               type: 'scroll'
  //             })
  //           }
  //         })
  //       },
  //       {
  //         threshold: 0,
  //         rootMargin: '-40px 0px 0px 0px'
  //       }
  //     )

  //     Array.from(children).forEach((item) => {
  //       io && io.observe(item)
  //     })
  //   }

  //   return () => {
  //     io && io.disconnect()
  //     io = null
  //   }

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  useEffect(() => {
    const eles = document.getElementById('link-content-inner')
    const children = eles?.children || []
    const len = Array.from(children).length
    const range = 90

    const scrollHandler = debounce(() => {
      for (let i = 0; i < len; i++) {
        const child = children[i]
        const rect = child.getBoundingClientRect()
        // 向下滚动
        if (rect.top >= 0 && rect.top <= range) {
          const id = child.getAttribute('id')
          // console.log(id)
          setActiveObj({
            id,
            type: 'scroll'
          })
          break
        }
        // 向上滚动
        if (
          rect.top < 0 &&
          children[i + 1] &&
          children[i + 1].getBoundingClientRect().top >
            document.documentElement.clientHeight
        ) {
          const id = child.getAttribute('id')
          // console.log(id)
          setActiveObj({
            id,
            type: 'scroll'
          })
          break
        }
      }
    }, 100)

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      if (type !== 'click') return
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
  }, [id, type])
}
