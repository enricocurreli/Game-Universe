import { ReactNode } from "react";
import Img from "../img/Img";
import Paragraph from "../paragraph/Paragraph";
import Title from "../title/Title";
import "./Card.css";
import MyButton from "../button/MyButton";

type CardProps = {

  children:  ReactNode;
}

const Card = ({children}:CardProps) => {
  return (
    <div className="card glass sm:w-72 md:w-80 lg:w-64 hover:shadow-2xl hover:opacity-80 hover:-translate-y-2 transition-all">
        {children}
    </div>
  );
};
Card.Paragraph = Paragraph;
Card.Title = Title;
Card.Img = Img;
Card.MyButton = MyButton;
export default Card;
