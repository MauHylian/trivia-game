import React from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <p>{props.points} points</p>
      <p>Round circles</p>
      <p>Round {props.round}/10</p>
    </header>
  );
};

export default Header;
