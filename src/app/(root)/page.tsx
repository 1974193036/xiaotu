import { getNavApi, getTopNavApi } from '@/actions'
import Search from '@/components/shared/Search'
import TopNav from '@/components/shared/TopNav'
import News from '@/components/shared/News'
import LinkContent from '@/components/shared/link-content'

export default async function Home() {
  const res = await Promise.all([getNavApi(), getTopNavApi()])
  const navData = res[0]
  const topData = res[1]

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
          <div className="top-left" id="top-left">
            {topData.map((item) => {
              return <TopNav key={item.id} type={item.type} list={item.children} />
            })}
          </div>
          <div className="top-right">
            <News />
          </div>
        </div>

        <div className="link-container">
          <LinkContent source={navData} />
        </div>
      </div>
    </>
  )
}
