import Navbar from "../componentsPersonal/navbar/Navbar";
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Card from "../componentsPersonal/card/Card";
import Footer from "../componentsPersonal/footer/Footer";
import Img from "../componentsPersonal/img/Img";
import Paragraph from "../componentsPersonal/paragraph/Paragraph";
import Article from "../componentsPersonal/section/Article";
import Title from "../componentsPersonal/title/Title";
import Section from "../componentsPersonal/section/Section";
// import PlatformIcon from "../componentsPersonal/iconList/PlatformIcon";
import { BorderBeam } from "../components/ui/border-beam";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import useGameScreenshots from "../hooks/useGameScreenshots";
import useGameDLC from "../hooks/useGameDLC";

const DetailGamePage = () => {


  const API_KEY = import.meta.env.VITE_API_KEY;
  const { id } = useParams();

  const {data: game} = useGameDetails(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

  const { data: dlc, isLoading: loadingDLC } = useGameDLC(`https://api.rawg.io/api/games/${id}/additions?key=${API_KEY}`);

  const { data: screenshots, isLoading: loadingScreen } = useGameScreenshots(`https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`);


  console.log(dlc);
  
  

  return (
    <>
      <Navbar />
      <Section classes={"relative"}>
        <Img src={game?.background_image} classes={"imgDetail"} alt={game?.name} />
        <Article
          classes={
            "backdrop-blur-lg bg-base-200/70  px-10 py-6 shadow-xl sm:max-h-[500px] sm:w-1/2  absolute md:right-[25%] md:top-[35%] max-h-[400px] w-full top-[25%]"
          }
        >
            <BorderBeam size={260} duration={10} delay={9} />

          <Title tag={"h3"} classes={"text-center text-3xl  mb-6"}>
          <span className="font-extrabold text-accent"> ⟨ </span> {game?.name} <span className="font-extrabold text-accent"> ⟩ </span>
          </Title>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-5 ">
            <Paragraph classes={"text-accent"}>
              Available for:{" "}
              {/* <PlatformIcon platforms={game?.platforms} /> */}
            </Paragraph>
            <Paragraph classes={"text-accent"}>
              Genres:{" "}
              {game?.genres.map((el) => {
                return (
                  <li className="font-bold list-none" key={el.id}>
                    {" "}
                    {el.name}
                  </li>
                );
              })}
            </Paragraph>
            <Paragraph classes={"text-accent"}>
              Publishers:{" "}
              <div className="font-bold">
                {" "}
                {game?.publishers.map((el) => el.name)}{" "}
              </div>{" "}
            </Paragraph>
            <Paragraph classes={"text-accent"}>
              Released: <div className="font-bold">{game?.released ? format(new Date(game.released), "dd MMMM yyyy", { locale: enGB }) : " "}</div>
            </Paragraph>
            <Paragraph classes={"text-accent"}>
              Rating : <div className="font-bold">{game?.rating} / 5</div>
            </Paragraph>
            <Paragraph classes={"text-accent"}>
              Ratings Count :{" "}
              <div className="font-bold">{game?.ratings_count}</div>
            </Paragraph>
            {/* {profile && (
              <div
                className="lg:tooltip w-25"
                data-tip={
                  favorite ? "Remove to my Wishlist" : "Add to my Wishlist"
                }
              >
                <Button
                  classes={"text-white border-none bg-accent"}
                  click={handleFavorite}
                >
                  {favorite ? <FaHeart /> : <FaRegHeart />}
                </Button>
              </div>
            )}  */}
          </div>
        </Article>
      </Section>
 
      {/* CARDS END */}
      <Section
        classes={"md:px-24 px-10  my-28"}
      >
        <Article classes={"mt-30"}>
          <Title tag={"h1"} classes={"text-3xl mb-8 "}>
            {" "}
            <span className="font-extrabold text-accent"> ⟨ </span>About<span className="font-extrabold text-accent"> ⟩ </span>
          </Title>
          <Paragraph classes={""}>{game?.description_raw}</Paragraph>
          <Paragraph classes={"mt-5"}>
            tags:{" "}
            <span className="px-3">
              {game?.tags
                ? game.tags.map((tag) => (
                    <div
                      key={tag.id}
                      className="badge badge-accent badge-outline px-3 mx-1 my-1"
                    >
                      {tag.name}
                    </div>
                  ))
                : " "}
            </span>
          </Paragraph>
        </Article>
      </Section>
      <Section classes={"md:px-24 px-10 my-28"}>
        <Article classes={"mt-30"}>
          <Title tag={"h1"} classes={"text-3xl mb-8"}>
            {" "}
            <span className="font-extrabold text-accent"> ⟨ </span>Screenshots <span className="font-extrabold text-accent"> ⟩ </span>
          </Title>
        </Article>
        <Article classes={"grid md:grid-cols-2 gap-8"}>
          <div className="grid grid-cols-1 col-span-2 gap-4">
            {loadingScreen ? (
              <div className="h-screen w-[100%] flex justify-center absolute  left-0 top-0 loaderCstm">
                <div className="loading loading-bars  bg-accent lg:w-24 w-14"></div>
              </div>
            ) : (
              screenshots &&
              screenshots.results.map((el, i) => {
                if (i == 5) {
                  return <Img alt={el.name} key={el.id} src={el.image} />;
                }
              })
            )}
          </div>
          <div className="grid grid-cols-1">
            {loadingScreen ? (
              <div className="h-screen w-[100%] flex justify-center absolute  left-0 top-0 loaderCstm">
                <div className="loading loading-bars  bg-accent lg:w-24 w-14"></div>
              </div>
            ) : (
              screenshots && <Img src={screenshots.results[0].image} />
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {loadingScreen ? (
              <div className="h-screen w-[100%] flex justify-center absolute  left-0 top-0 loaderCstm">
                <div className="loading loading-bars  bg-accent lg:w-24 w-14"></div>
              </div>
            ) : (
              screenshots &&
              screenshots.results.map((el, i) => {
                if (i > 0 && i < 5) {
                  return <Img alt={el.name} key={el.id} src={el.image} />;
                }
              })
            )}
          </div>
        </Article>
      </Section>
      {/* ABOUT END */}
      <Section classes={"md:px-24 px-10 my-28"}>
        <Article classes={"mt-30"}>
          <Title tag={"h1"} classes={"text-3xl mb-8 "}>
            {" "}
            <span className="font-extrabold text-accent"> ⟨ </span>DLC<span className="font-extrabold text-accent"> ⟩ </span>
          </Title>
        </Article>
        <Article classes={"grid md:grid-cols-3 gap-8"}>
          {loadingDLC ? (
            <div className="h-screen w-[100%] flex justify-center absolute  left-0 top-0 loaderCstm">
              <div className="loading loading-bars  bg-accent lg:w-24 w-14"></div>
            </div>
          ) : (
            dlc &&
            dlc.results?.map((DLC) => {
              console.log(DLC);
              
              return (
                <Card key={DLC.id}>
                {" "}
                <Card.Img
                  src={DLC.background_image}
                  alt={DLC.name}
                  classes={"h-64 w-full rounded-t-2xl "}
                />
                <div className="card-body ">
                  <Card.Title tag="h2" classes={"card-title"}>
                    {DLC.name}
                  </Card.Title>
                </div>{" "}
              </Card>
                
              );
            })
          )}
        </Article>
      </Section>
      {/* END DLC */}
   
      {/* { profile &&
      ( <Section classes={"md:px-24 px-10 my-28"}>
          <Article classes={"mt-30"}>
            <Title tag={"h1"} classes={"text-3xl mb-8 text-accent"}>
              {" "}
              Reviews
            </Title>
          </Article> */}
      {/* REVIEW SECTION */}
      {/* <ReviewsSection game={game} profile={profile} /> 

       </Section>
      ) 
    }
      {/* END REVIEWS */}
      <Footer />
    </>
  );
};

export default DetailGamePage;