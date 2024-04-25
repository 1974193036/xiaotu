'use client'

import { useState } from 'react'
import Image from 'next/image'

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

const SiderBarItem = ({ list = [] }: SideBarItemProps) => {
  const [activeId, setActiveId] = useState(list[0]?.id)

  return (
    <ul className="sidebar-nav_elements">
      {list.map((item) => {
        return (
          <li
            key={item.id}
            className={`sidebar-nav_element group ${
              activeId === item.id ? 'active' : ''
            }`}
            onClick={() => setActiveId(item.id)}
          >
            <div className="sidebar-link">
              <Image
                src={item.icon}
                alt="logo"
                width={24}
                height={24}
                className={`${activeId === item.id && 'brightness-200'}`}
              />
              {item.title}
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default SiderBarItem
