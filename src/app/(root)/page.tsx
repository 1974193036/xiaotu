import { getTopNavApi } from '@/actions'
import Search from '@/components/shared/Search'
import TopNav from '@/components/shared/TopNav'

export default async function Home() {
  const dataSource = await getTopNavApi()

  return (
    <>
      <div className="search-container">
        <div className="search-main">
          <div className="search-title">
            Your Creative Vision with Imaginify
          </div>
          <Search />
          <div className="search-favorite">
            <div className="search-favorite-item">midjourney</div>
            <div className="search-favorite-item">suno</div>
            <div className="search-favorite-item">Promit</div>
            <div className="search-favorite-item">vue</div>
            <div className="search-favorite-item">react</div>
            <div className="search-favorite-item">nodejs</div>
            <div className="search-favorite-item">angularjs</div>
            <div className="search-favorite-item">AI应用</div>
            <div className="search-favorite-item">shadcn</div>
          </div>
        </div>
      </div>
      <div className="wrapper-inner">
        <div className="top-container">
          <div className="top-left">
            {dataSource.map((item) => {
              return <TopNav key={item.id} type={item.type} list={item.children} />
            })}
          </div>
          <div className="top-right bg-red-500">热点资讯</div>
        </div>

        <div className="text-[30px] h-[600px] bg-blue-100 mt-10">回家</div>
      </div>
    </>
  )
}
