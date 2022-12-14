import { Fragment } from "react";

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table of food." />
      </div>
    </Fragment>
  );
};

export default Header;
