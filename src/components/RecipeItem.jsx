import Classes from "./Recipeitem.module.css";

const RecipeItem = (props) => {
  return (
    <li className={Classes.recipe}>
      <div>
        <h3>{props.name}</h3>
        <h4>Description</h4>
        <div className={Classes.description}> {props.description}</div>
        <h4>Time</h4>
        <div className={Classes.description}>{props.time}</div>
        <h4>Ingridents</h4>
        <div className={Classes.description}>{props.ingridients}</div>
      </div>
    </li>
  );
};

export default RecipeItem;
