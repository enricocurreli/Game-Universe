import Section from "../componentsPersonal/section/Section";
import Article from "../componentsPersonal/section/Article";
import { Link } from "react-router-dom";
import Card from "../componentsPersonal/card/Card";
import useFetch from "../hooks/useFetch";
import { BiSolidShow } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";
import Skeleton from "../componentsPersonal/skeleton/Skeleton";
import routes from "../router/routes";
import { useContext } from "react";
import { PageContext } from "../context/PageContext";

const HomePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }

  const { startPage } = context;

  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-09-01,2024-10-26&platforms=4,187,18,1,186,7`;

  const url1 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-01-01,2024-10-26&platforms=4,187,18,1,186,7`;

  const url2 = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2025-01-01,2025-10-26&platforms=4,187,18,1,186,7`;

  const { data, isLoading } = useFetch(url);
  const { data:games, isLoading:loding} = useFetch(url1);
  const { data:gamesNext, isLoading:lodingNext} = useFetch(url2);

  
  
  return (
    <>
    <Section classes={" my-10 px-16 "}>
      <Article classes={"flex flex-wrap justify-center lg:justify-start "}>
        <Link
          to={routes.newReleases}
          className={"lg:ps-10 hover:text-gray-400 sm:text-4xl text-3xl mb-10"}
        >
          New Releases <span className="font-extrabold text-accent">⟩</span>
        </Link>
      </Article>
      <Article
        classes={
          " lg:px-10 grid lg:grid-cols-4 lg:gap-8 sm:grid-cols-2 gap-5 grid-cols-1 mb-20"
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
          data &&
          data.results.map((game, index) => {
            
            if (index < 4) {
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

                    {/* <PlatformIcon platforms={platform} />  */}
                    
                    </div>

                    <div className="card-actions justify-end">
                    <Card.Paragraph classes="flex gap-1 items-center">  {game.rating} <AiTwotoneLike /> </Card.Paragraph>
                    <Link
                      to={`/detail/${game.id}`} onClick={startPage}>
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
            }
          })
        )}
      </Article>
    </Section>

    {/* 2024 Section */}

    <Section classes={"px-16"}>
      <Article classes={"flex flex-wrap justify-center lg:justify-start "}>
        <Link
          to={routes.thisYears}
          className={"lg:ps-10 hover:text-gray-400 sm:text-4xl text-3xl mb-10"}
        >
          2024 Releases <span className="font-extrabold text-accent">⟩</span>
        </Link>
      </Article>
      <Article
        classes={
          " lg:px-10 grid lg:grid-cols-4 lg:gap-8 sm:grid-cols-2 gap-5 grid-cols-1 mb-20"
        }
      >
        {loding ? (
            <>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            </>
        ) : (
          games &&
          games.results.map((game, index) => {
            if (index < 4) {
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
                    
                    
                    </div>

                    <div className="card-actions justify-end">
                    <Card.Paragraph classes="flex gap-1 items-center">  {game.rating} <AiTwotoneLike /> </Card.Paragraph>
                    <Link
                      to={`/detail/${game.id}`}>
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
            }
          })
        )}
      </Article>
    </Section>

    {/* Next Releases  */}

    <Section classes={"px-16"}>
      <Article classes={"flex flex-wrap justify-center lg:justify-start"}>
        <Link
          to={routes.nextReleases}
          className={"lg:ps-10 hover:text-gray-400 sm:text-4xl text-3xl mb-10"}
        >
          Next Releases <span className="font-extrabold text-accent">⟩</span>
        </Link>
      </Article>
      <Article
        classes={
          " lg:px-10 grid lg:grid-cols-4 lg:gap-8 sm:grid-cols-2 gap-5 grid-cols-1 mb-20"
        }
      >
        {lodingNext ? (
            <>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            </>
        ) : (
          gamesNext &&
          gamesNext.results.map((game, index) => {
            if (index < 4) {
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
                   
                    
                    </div>
                    <span className="indicator-item badge badge-accent text-white">🔥 {game.released} 🔥</span>
                    <div className="card-actions justify-end">
                      <Link
                      to={`/detail/${game.id}`}>
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
            }
          })
        )}
      </Article>
    </Section>
    </>
    
    
  );
};

export default HomePage;
