import Link from 'next/link'
import Image from 'next/Image'

interface LinkContentProps {
  source: {
    id: string
    title: string
    icon: string
    children: ChildContentProps[]
  }[]
}

interface ChildContentProps {
  id: number
  title: string
  icon: string
  desc: string
  href: string
}

const LinkContent = ({ source }: LinkContentProps) => {
  return (
    <div className="link-content">
      <div className="link-content-inner">
        {source.map((category) => {
          return (
            <div id={category.id} key={category.id} className="mb-12">
              <div className="my-4">
                <h1 className="link-content-title">
                  {category.title}
                </h1>
              </div>
              <div className="link-content-grid">
                {category.children.map((link) => (
                  <LinkItem link={link} key={link.id} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function LinkItem({ link }: { link: ChildContentProps }) {
  return (
    <Link href={link.href} target="_blank" prefetch={false}>
      <div className="link-item">
        <div className="flex-center">
          <div className="link-item-icon">
            {link.icon ? (
              <Image
                src={link.icon}
                className="object-fill"
                alt=""
                width={40}
                height={40}
              />
            ) : (
              <span className="link-item-icon-text">
                {link.title.slice(0, 1)}
              </span>
            )}
          </div>
          <span className="link-item-title">{link.title}</span>
        </div>
        <div className="link-item-desc">
          {link.desc}
        </div>
      </div>
    </Link>
  )
}


export default LinkContent
