import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <div className="search-container">
        <div className="search-main">
          <div className="search-area">
            {/* <div className="bg-white h-[50px] rounded-none rounded-l-md text-dark-600">11</div>
            <div className="h-[50px] w-[90px] rounded-none rounded-r-md">22</div> */}
            <Input className="search-field" placeholder="" /> 
            <Button variant="destructive" className="search-button">
              <Image
                src="/assets/icons/search.svg"
                alt="search"
                width={22}
                height={22}
              />
            </Button>
          </div>
          <div className="search-keyword"></div>
        </div>
      </div>
      <div className="wrapper-inner">
        <div className="text-[30px] h-[600px] bg-yellow-100">home Tools</div>
        <div className="text-[30px] h-[600px] bg-blue-100 mt-10">回家</div>
        <br className="clear-both" />
      </div>
    </>
  )
}
