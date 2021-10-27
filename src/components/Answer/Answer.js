import classes from "./Answer.module.css";

const Answer = (props) => {
  return (
    <div
      className={classes.card}
      style={props.style}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
};

export default Answer;
