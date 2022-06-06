import classes from "./Header.module.css";
import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MealsApp</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["min-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </React.Fragment>
  );
};
export default Header;
