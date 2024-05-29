import HeroBanner from "./heroBanner/HeroBanner"
import Popular from "./popular/Popular"
import "./style.scss"
import TopRated from "./topRated/TopRated"
import Trending from "./trending/Trending"
import Upcoming from "./upcoming/Upcoming"

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <Upcoming/>
      <div style={{height:1000}}></div>
    </div>
  )
}

export default Home
