import Link from 'next/link'
// import Image from 'next/image'

interface TopNavProps {
  type: string
  list: {
    id: string
    title: string
    href: string
    icon: string
  }[]
}

const TopNav = ({ type, list = [] }: TopNavProps) => {
  const typeMap = {
    收: 'bg-indigo-600',
    买: 'bg-purple-500',
    寄: 'bg-pink-400'
  } as Record<string, string>

  const bg = typeMap[type] || 'bg-purple-500'

  return (
    <div className="top-left-item">
      <span
        className={`top-left-item_tag ${bg}`}
      >
        {type}
      </span>
      <div className="top-left-item_list">
        {list.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.href}
              prefetch={false}
              target="blank"
              className="top-left-item_link"
            >
              <span className="top-left-item_icon">
                {/* <Image
                  src="/assets/images/nuxt-icon.png"
                  alt="icon"
                  width={32}
                  height={32}
                /> */}
              </span>
              <span className="top-left-item_title">{item.title}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TopNav
