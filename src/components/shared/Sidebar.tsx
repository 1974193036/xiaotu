import Image from 'next/image'
import Link from 'next/link'
import { getNavApi } from '@/actions'
import SiderBarItem from './Sidebar-Item'

const SiderBar = async () => {
  const dataSource = await getNavApi()

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SiderBarItem list={dataSource} />
        </nav>
      </div>
    </aside>
  )
}

export default SiderBar
