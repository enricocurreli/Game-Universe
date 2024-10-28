import React, { useContext, useState } from 'react'
import Section from '../componentsPersonal/section/Section'
import Article from '../componentsPersonal/section/Article'
import Title from '../componentsPersonal/title/Title'
import MyButton from '../componentsPersonal/button/MyButton'
import useFetch from '../hooks/useFetch'
import { PageContext } from '../context/PageContext'
import { Genres } from '../types/interfaces'
import Skeleton from '../componentsPersonal/skeleton/Skeleton'
import Card from '../componentsPersonal/card/Card'
import PlatformIcon from '../componentsPersonal/iconList/PlatformIcon'
import { AiTwotoneLike } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BiSolidShow } from 'react-icons/bi'

const GenresPage = () => {

  const API_KEY = import.meta.env.VITE_API_KEY;
  const {data: genres} = useFetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  const [genreBTN, setGenreBTN] = useState("All");
  const [idGen, setIdGen] = useState(0)
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }


  const {startPage,setPage,page, prevPage, nextPage } = context;
  

  const handleClick = (numb:number ,all:string)=>{

    setPage(1);
    setGenreBTN(all)
    setIdGen(numb)
  }
  let url;
  
  if(idGen != 0){
    url = `https://api.rawg.io/api/games?key=${API_KEY}&genres=${idGen}&page=${page}&page_size=16`;
  } else{

    url = `https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=16`;
  }
  const { data:games, isLoading} = useFetch(url);
  
  return (
    <>
    <Section classes={"my-10 px-16 "}>
    <Article classes={"text-3xl mb-14"}>
      <Title tag={"h1"} classes={"sm:text-5xl mb-10 text-center"}>
        {" "}
        <span className="font-extrabold text-accent"> ⟨ </span>GENRES<span className="font-extrabold text-accent "> ⟩ </span>
      </Title>
    </Article>
    <Article  classes={"text-xl mb-14 grid justify-center"}>
    <Section classes={"my-10 px-18 grid md:grid-cols-8 grid-cols-3 justify-center gap-2 "} id={"buttonSection"}>
          <MyButton classes={(genreBTN == "All" ? "shadow-none text-white font-[Electrolize] bg-accent rounded-none " : " ") + " rounded-none border-accent text-white hover:bg-accent hover:rounded-none font-[Electrolize]"} click={()=>handleClick(0,"All")}>All</MyButton>
              {
                genres &&
                genres.results.map(( genre) => {
                                     
                    return <MyButton click={()=> handleClick(genre.id,genre.name)} classes={(genreBTN == genre.name ? "shadow-none text-white font-[Electrolize] bg-accent rounded-none " : " ") + " rounded-none border-accent text-white hover:bg-accent hover:rounded-none font-[Electrolize]"} key={genre.id}>{genre.name}</MyButton>;
                 
                  
                })
              }
              
          </Section>
    </Article>
  </Section>
  <Section classes={"my-20 px-16"}>
        <Article
          classes={
            "lg:px-10 grid lg:grid-cols-4 lg:gap-8 sm:grid-cols-2 gap-5 grid-cols-1 mb-20"
          }
        >
          {isLoading ? (
              <>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              <Skeleton/>
              </>
          ) : (
            games &&
            games.results.map((game) => {
              return (
                <Card key={game.id}>
                  {" "}
                  <Card.Img
                    src={game.background_image}
                    alt={"car!"}
                    classes={"h-64 w-full rounded-t-2xl "}
                  />
                  <div className="card-body ">
                    <Card.Title tag="h2" classes={"card-title lg:truncate"}>
                      {game.name}
                    </Card.Title>
                    <div className="flex justify-around">
                      <PlatformIcon platforms={game.platforms} />
                      
                    </div>

                    <div className="card-actions justify-end">
                    <Card.Paragraph classes="flex gap-1 items-center">
                        {" "}
                        {game.rating} <AiTwotoneLike />{" "}
                      </Card.Paragraph>
                      <Link to={`/detail/${game.id}`}
                      onClick={startPage}>
                        <Card.MyButton
                          classes={"btn btn-sm btn-accent rounded-none"}
                        >
                          <BiSolidShow />
                        </Card.MyButton>
                      </Link>
                    </div>
                  </div>{" "}
                </Card>
              );
            })
          )}
        </Article>
        <div className="flex justify-center">
       <div className="join grid grid-cols-2 w-1/2 gap-5">
          <MyButton classes={"join-item btn btn-outline hover:btn-accent"} disabled={page == 1 ? true : false} click={prevPage}>Page {page -1}</MyButton>
          
          <MyButton classes={"join-item btn btn-outline hover:btn-accent"} click={nextPage}>Page {page +1}</MyButton>
        </div>
       </div>
        </Section>
  </>
  )
}

export default GenresPage