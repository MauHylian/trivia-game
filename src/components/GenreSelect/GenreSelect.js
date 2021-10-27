import React from "react";

import classes from "./GenreSelect.module.css";

const GenreSelect = (props) => {
  return (
    <div className={classes.select}>
      <select onChange={props.onChange} name="genre">
        <option value="9">General knowledge</option>
        <option value="10">Books</option>
        <option value="11">Film</option>
        <option value="12">Music</option>
        <option value="14">Television</option>
        <option value="15">Videogames</option>
        <option value="17">Science and nature</option>
        <option value="18">Computers</option>
        <option value="23">History</option>
        <option value="25">Art</option>
        <option value="27">Animals</option>
        <option value="28">Vehicles</option>
        <option value="29">Comics</option>
        <option value="30">Gadgets</option>
      </select>
    </div>
  );
};

export default GenreSelect;
