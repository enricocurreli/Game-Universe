import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { PageContext } from "../context/PageContext";
import { Link, useParams } from "react-router-dom";
import Section from "../componentsPersonal/section/Section";
import Article from "../componentsPersonal/section/Article";
import Title from "../componentsPersonal/title/Title";
import Skeleton from "../componentsPersonal/skeleton/Skeleton";
import Card from "../componentsPersonal/card/Card";
import { AiTwotoneLike } from "react-icons/ai";
import { BiSolidShow } from "react-icons/bi";
import PlatformIcon from "../componentsPersonal/iconList/PlatformIcon";
import MyButton from "../componentsPersonal/button/MyButton";
import { Tags } from "../types/interfaces";
const PlatformsPage = () => {

  const API_KEY = import.meta.env.VITE_API_KEY;
  const {id, slug, index} = useParams();
  const { data: platforms, isLoading: loading } = useFetch(
    ` https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`
  );
  const [idPlat, setIDPlat] = useState<number>(0);
  const [btnActive, setBtnActive] = useState<number>(0);

  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }

  const { setPage, startPage, prevPage, nextPage, page } = context;
  
  let url;
  
  
  if(idPlat != 0){
    url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${idPlat}&page=${page}&page_size=16`;
  } else{

    url = `https://api.rawg.io/api/games?key=${API_KEY}&parent_platforms=${id}&page=${page}&page_size=16`;
  }
  const { data:games, isLoading} = useFetch(url);
  
  const handleClick = (number:number) =>{
    setPage(1);
    startPage();
    setIDPlat(number)
    setBtnActive(number);
  }
  
  
  return (
    <>
      <Section classes={"my-10 px-16 "}>
        <Article classes={"text-3xl mb-14"}>
          <Title tag={"h1"} classes={"sm:text-5xl mb-10 text-center"}>
            {" "}
            <span className="font-extrabold text-accent"> ⟨ </span>PLATFORMS<span className="font-extrabold text-accent "> ⟩ </span>
          </Title>
          <Title tag={"h3"} classes={"sm:text-3xl mb-10 text-center"}>
            {" "}
            <span className="font-extrabold text-accent"> ⟨ </span>{slug}<span className="font-extrabold text-accent "> ⟩ </span>
          </Title>
        </Article>
      </Section>
      <Section classes={"my-10 px-16 grid grid-cols-8 justify-center gap-2 "}>
      <MyButton classes={(btnActive == 0 ? "shadow-none text-white font-[Electrolize] bg-accent rounded-none " : " ") + " rounded-none border-accent text-white hover:bg-accent hover:rounded-none font-[Electrolize]"} click={()=>handleClick(0)}>All</MyButton>
          {
            platforms &&
            platforms.results[index].platforms.map(( platform: Tags ) => {
                console.log("plat.id", platform.id);
                console.log("btnActive: ", btnActive);

                return <MyButton click={()=> handleClick(platform.id)} classes={(btnActive == platform.id ? "shadow-none text-white font-[Electrolize] bg-accent rounded-none " : " ") + " rounded-none border-accent text-white hover:bg-accent hover:rounded-none font-[Electrolize]"} key={platform.id}>{platform.name}</MyButton>;
             
              
            })
          }
          
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
  );
};

export default PlatformsPage;
