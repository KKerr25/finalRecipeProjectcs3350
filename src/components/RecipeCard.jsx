import Classes from "./RecipeCard.module.css";
import AddButton from "./AddButton";

const Card = (props) => {
  return <div className={Classes.card}> {props.children} </div>;
};

export default Card;
