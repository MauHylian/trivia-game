import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      style={props.style}
    >
      {props.text}
    </button>
  );
};

export default Button;
