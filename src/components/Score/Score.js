import React from "react";
import Button from "../Button/Button";

import classes from "./Score.module.css";

const Score = (props) => {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className={classes.scoreContainer}>
      <p className={classes.score}>
        <p>Thank you for playing</p>
        <p>Your score: {props.score}</p>
        <Button text="Play again" onClick={handleClick} />
      </p>
    </div>
  );
};

export default Score;
