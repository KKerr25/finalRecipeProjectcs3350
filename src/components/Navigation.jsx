import { NavLink } from "react-router-dom";
import Classes from "./Navigation.module.css";
import foodPhoto from "../images/A-variety-of-delicious-food-pictures1.jpg";

function Navigation() {
  return (
    <>
      <header className={Classes.header}>
        <nav>
          <ul className={Classes.list}>
            <li>
              <NavLink to="/">Recipe Book</NavLink>
            </li>
          </ul>
          <img className={Classes.img} src={foodPhoto} alt="" />
        </nav>
      </header>
    </>
  );
}

export default Navigation;
