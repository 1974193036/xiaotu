'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'

interface SideBarItemProps {
  list: {
    id: number
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
  const [activeId, setActiveId] = useState(list[0]?.id)

  return (
    <ScrollArea className="h-[88%]">
      <ul className="header-nav_elements">
        {list.map((item) => {
          const isActive = item.id === activeId

          return (
            <li
              key={item.id}
              className={`flex whitespace-nowrap text-dark-700 ${
                isActive && 'gradient-text'
              }`}
              onClick={() => setActiveId(item.id)}
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
