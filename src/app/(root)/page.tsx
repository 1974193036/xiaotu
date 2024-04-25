import Search from '@/components/shared/Search'

export default function Home() {
  return (
    <>
      <div className="search-container">
        <div className="search-main">
          <Search />
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
