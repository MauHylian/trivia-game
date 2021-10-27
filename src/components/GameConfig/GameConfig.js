import React from "react";

// import classes from "./GameConfig.module.css";

import DifficultySelect from "../DifficultySelect/DifficultySelect";
import GenreSelect from "../GenreSelect/GenreSelect";
import Button from "../Button/Button";

const GameConfig = (props) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <GenreSelect onChange={props.onGenreChange} />
        <DifficultySelect onChange={props.onDifficultyChange} />
        <Button text="Start game!" onClick={props.onClick} />
      </form>
    </div>
  );
};

export default GameConfig;
