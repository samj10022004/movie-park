import { useEffect, useState } from "react"
import "./style.scss"
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
const HeroBanner = () => {
  const {data,loading}=useFetch("/movie/upcoming");
  const navigate=useNavigate();
  const [background,setBackground]=useState("");
  const [query,setQuery]=useState("");

  const {url}=useSelector((state)=>state.home);

  useEffect(()=>{
    const bg=url.backdrop+data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg);
  },[data])



  const searchQueryHandler=(event)=>{
    if(event.key==="Enter"&&query.length>0){
      navigate(`/search/${query}`)
    }
    
  }
  

  return (
    <div>
      <div className="heroBanner">
        {!loading &&<div className="backdrop-img">
          <Img src={background}/>
        </div>}
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">Millions of movie, Tv shows and people to discover. Explore now.</span>
            <div className="searchInput">
              <input type="text" placeholder="Search for a movie or tv show...." required onKeyUp={searchQueryHandler} onChange={(e)=>setQuery(e.target.value)} />
              <button >Search</button>   
            </div>
          </div>
        </ContentWrapper>
        
      </div>
    </div>
  )
}

export default HeroBanner
