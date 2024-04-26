'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useJumpPos } from '@/lib/useJumpPos'

interface SideBarItemProps {
  list: {
    id: string
    title: string
    icon: string
    children: {
      id: number
      title: string
      icon: string
      desc: string
      href: string
    }[]
  }[]
}

const MobileNavItem = ({ list = [] }: SideBarItemProps) => {
  const [activeObj, setActiveObj] = useState({
    id: list[0]?.id,
    type: 'click'
  })

  const handleClick = (id: string) => {
    setActiveObj({
      id,
      type: 'click'
    })
  }

  useJumpPos(activeObj, setActiveObj)

  return (
    <ScrollArea className="h-[88%]">
      <ul className="header-nav_elements">
        {list.map((item) => {
          const isActive = item.id === activeObj.id

          return (
            <li
              key={item.id}
              className={`flex whitespace-nowrap text-dark-700 ${
                isActive && 'gradient-text'
              }`}
              onClick={handleClick.bind(null, item.id)}
            >
              <div className="sidebar-link cursor-pointer">
                <Image src={item.icon} alt="logo" width={24} height={24} />
                {item.title}
              </div>
            </li>
          )
        })}
      </ul>
    </ScrollArea>
  )
}

export default MobileNavItem
