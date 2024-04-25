import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import MobileNavItem from './MobileNav-item'
import { getNavApi } from '@/actions'

const MobileNav = async () => {
  const dataSource = await getNavApi()

  return (
    <header className="header">
      <Link href="/" className="sidebar-logo lg:hidden">
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src="/assets/images/logo-text.svg"
                  alt="logo"
                  width={152}
                  height={23}
                />
                <MobileNavItem list={dataSource} />
              </>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default MobileNav
