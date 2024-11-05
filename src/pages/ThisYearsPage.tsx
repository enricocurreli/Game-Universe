import Article from "../componentsPersonal/section/Article";
import Section from "../componentsPersonal/section/Section";
import Title from "../componentsPersonal/title/Title";
import Card from "../componentsPersonal/card/Card";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { AiTwotoneLike } from "react-icons/ai";
import { BiSolidShow } from "react-icons/bi";
import Skeleton from "../componentsPersonal/skeleton/Skeleton";
import { useContext } from "react";
import { PageContext } from "../context/PageContext";
import MyButton from "../componentsPersonal/button/MyButton";
import { Result } from "../types/interfaces";

const ThisYearsPage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }

  const { page, nextPage, prevPage, startPage } = context;

  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-01-01,2024-10-30&page=${page}&page_size=16`;

  const { data: games, isLoading: loading } = useFetch<Result>(url);

  return (
    <>
      <Section classes={"mt-10 px-16 "}>
        <Article classes={"text-3xl grid lg:grid-cols-3 grid-cols-2"}>
          <Title
            tag={"h2"}
            classes={
              "lg:ps-10 lg:col-span-1 col-span-2 sm:text-4xl text-3xl mb-10"
            }
          >
            All Games 2024
          </Title>
          {/* <label htmlFor="selectGenre" className="lg:text-end lg:pe-5 text-base text-center content-center lg:mt-0 mt-10 ">Genres</label>
          <select
            className="select select-bordered w-full max-w-40 lg:mt-0 mt-10 focus:border-accent"
            onChange={(e) => setGenre(e.target.value)}
            id="selectGenre"
          >
            <option selected>all</option>
            {genres.data &&
              genres.data.results.map((genre) => {
                return <option key={genre.id}>{genre.slug}</option>;
              })}
          </select> */}
        </Article>
      </Section>
      <Section classes={"mb-10 px-16"}>
        <Article
          classes={
            "lg:px-10 grid lg:grid-cols-4 lg:gap-8 sm:grid-cols-2 gap-5 grid-cols-1 mb-20"
          }
        >
          {loading ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
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
                    
                    
                    </div>

                    <div className="card-actions justify-end">
                    <Card.Paragraph classes="flex gap-1 items-center">
                        {" "}
                        {game.rating} <AiTwotoneLike />{" "}
                      </Card.Paragraph>
                      <Link to={`/detail/${game.id}`} onClick={startPage}>
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
          <MyButton classes={"join-item btn btn-outline hover:btn-accent"} click={prevPage}>Page {page -1}</MyButton>
          
          <MyButton classes={"join-item btn btn-outline hover:btn-accent"} click={nextPage}>Page {page +1}</MyButton>
        </div>
       </div>
      </Section>
    </>
  );
};

export default ThisYearsPage;
