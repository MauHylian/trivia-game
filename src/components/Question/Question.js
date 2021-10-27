import classes from "./Question.module.css";

const Question = (props) => {
  return <div className={classes.question}>{props.text}</div>;
};

export default Question;
