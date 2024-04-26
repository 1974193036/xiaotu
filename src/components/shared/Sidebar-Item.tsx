'use client'

import { useState } from 'react'
import Image from 'next/image'
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

const SiderBarItem = ({ list = [] }: SideBarItemProps) => {
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
    <ul className="sidebar-nav_elements">
      {list.map((item) => {
        const isActive = item.id === activeObj.id

        return (
          <li
            key={item.id}
            className={`sidebar-nav_element group ${isActive ? 'active' : ''}`}
            onClick={handleClick.bind(null, item.id)}
          >
            <div className="sidebar-link">
              <Image
                src={item.icon}
                alt="logo"
                width={24}
                height={24}
                className={`${isActive && 'brightness-200'}`}
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
