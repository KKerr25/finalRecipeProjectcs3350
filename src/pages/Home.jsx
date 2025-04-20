import Classes from "./Home.module.css";
import { NavLink } from "react-router-dom";
import Pasta from "../images/pasta.jpg";
import Barbeque from "../images/barbeque.jpg";
import Dessert from "../images/dessert.jpg";
import Dinner from "../images/dinner.jpg";
import Lunch from "../images/lunch.jpg";
import Breakfast from "../images/breakfast.jpg";
import MexicanFood from "../images/mexican.jpg";
import GreekFood from "../images/greek.jpg";
import ItalianFood from "../images/italian.jpg";

const HomePage = () => {
  const categories = [
    { id: 1, name: "Pasta", background: Pasta },
    { id: 2, name: "Barbeque", background: Barbeque },
    { id: 3, name: "Dessert", background: Dessert },
    { id: 4, name: "Dinner", background: Dinner },
    { id: 5, name: "Lunch", background: Lunch },
    { id: 6, name: "Breakfast", background: Breakfast },
    { id: 7, name: "Mexican", background: MexicanFood },
    { id: 8, name: "Greek", background: GreekFood },
    { id: 9, name: "Italian", background: ItalianFood },
  ];

  return (
    <div className={Classes.main}>
      <h2>Recipe Categories</h2>
      <div className={Classes.gridContainer}>
        {categories.map((cls) => (
          <NavLink
            to={`/Recipe/${cls.id}`}
            className={`${Classes.gridItem} ${Classes[`gridItem${cls.id}`]}`}
            style={{
              backgroundImage: cls.background
                ? `url(${cls.background})`
                : "none",
            }}
            key={cls.id}
          >
            <div className={Classes.hoverText}>{cls.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
