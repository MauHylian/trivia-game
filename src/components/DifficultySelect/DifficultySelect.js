import React from "react";

import classes from "./DifficultySelect.module.css";

const DifficultySelect = (props) => {
  return (
    <div className={classes.select}>
      <select onChange={props.onChange} name="difficulties">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default DifficultySelect;
