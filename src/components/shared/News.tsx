'use client'

import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'
import { useState, useEffect } from 'react'
import { getNewsApi } from '@/actions'
import { useRedirect } from '@/lib/useRedirect'

const News = () => {
  const [news, setNews] = useState<{ id: string; title: string }[]>([])
  const [loading, setLoading] = useState(false)
  const { openBaidu } = useRedirect()

  useEffect(() => {
    setLoading(true)
    getNewsApi().then((res) => {
      setNews(res)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  const switchNews = () => {
    if (loading) return
    setLoading(true)
    getNewsApi().then((res) => {
      setNews(res)
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <div className="top-right-title">
        <span>热点资讯</span>
        <span className="p-14-regular flex-start cursor-pointer" onClick={switchNews}>
          <Image
            src="/assets/icons/spin.svg"
            alt="search"
            width={14}
            height={14}
            className={`mr-1 ${loading && 'animate-spin'}`}
          />
          换一换
        </span>
      </div>
      <div className="overflow-x-hidden overflow-y-auto">
        <div className="flex flex-col">
          {news.length === 0 ? (
            <>
              <Skeleton className="ml-4 mr-4 mb-4 h-[20px] rounded-full" />
              <Skeleton className="ml-4 mr-20 mb-4 h-[20px] rounded-full" />
              <Skeleton className="ml-4 mr-20 mb-4 h-[20px] rounded-full" />
            </>
          ) : (
            news.map((item, index) => {
              return (
                <div className="news-item" key={item.id}>
                  <span
                    className={`news-item_index ${index === 0 ? 'first' : ''} ${
                      index === 1 ? 'second' : ''
                    } ${index === 2 ? 'third' : ''}`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className="news-item_title"
                    onClick={() => openBaidu(item.title)}
                  >
                    {item.title}
                  </span>
                </div>
              )
            })
          )}
        </div>
      </div>
    </>
  )
}

export default News
