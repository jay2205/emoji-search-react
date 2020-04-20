import React from "react";
import "./searchinput.css";

export default function SearchInput(props) {
  function inputChangeHandler(e) {
    props.onSearchHandle(e.target.value);
  }
  return (
    <div className="component-container">
      <input
        className="component-serach-input"
        onChange={inputChangeHandler}
        value={props.value}
        placeHolder="Search Emoji"
      />
    </div>
  );
}
