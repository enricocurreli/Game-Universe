import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PageContext } from "../context/PageContext";
import useFetch from "../hooks/useFetch";
import { Result } from "../types/interfaces";
import { AiTwotoneLike } from "react-icons/ai";
import { BiSolidShow } from "react-icons/bi";
import Card from "../componentsPersonal/card/Card";
import Article from "../componentsPersonal/section/Article";
import Section from "../componentsPersonal/section/Section";
import Skeleton from "../componentsPersonal/skeleton/Skeleton";
import MyButton from "../componentsPersonal/button/MyButton";
import Title from "../componentsPersonal/title/Title";

const SearchPage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }

  const { page, nextPage, prevPage, startPage } = context;
  const { searchTerm } = useParams();
  const API_KEY = import.meta.env.VITE_API_KEY;

  const url = `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchTerm}&page=${page}&released`;

  const { data: games, isLoading } = useFetch<Result>(url);

  return (
    <Section classes={" my-10 px-16 "}>
      <Article classes={"flex flex-wrap justify-center lg:justify-start "}>
        <Title tag={"h2"} classes={"lg:ps-10  sm:text-4xl text-3xl mb-10"}>
          Results for:
          <span className="font-extrabold text-accent"> ⟨ </span> {searchTerm}{" "}
          <span className="font-extrabold text-accent "> ⟩ </span>
        </Title>
      </Article>
      <Article
        classes={
          " lg:px-10 grid lg:grid-cols-4 lg:gap-8 sm:grid-cols-2 gap-5 grid-cols-1 mb-20"
        }
      >
        {isLoading ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          games?.results.map((game, index) => {
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
            }
          })
        )}
      </Article>
      <div className="flex justify-center">
        <div className="join grid grid-cols-2 w-1/2 gap-5">
          <MyButton
            classes={"join-item btn btn-outline hover:btn-accent"}
            disabled={page == 1 ? true : false}
            click={prevPage}
          >
            Page {page - 1}
          </MyButton>

          <MyButton
            classes={"join-item btn btn-outline hover:btn-accent"}
            click={nextPage}
          >
            Page {page + 1}
          </MyButton>
        </div>
      </div>
    </Section>
  );
};

export default SearchPage;
