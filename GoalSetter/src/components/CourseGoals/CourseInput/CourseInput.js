import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [validInput, setValidInput] = useState(true);
  let validationMsg = !validInput ? (
    <p style={{ color: !validInput ? "red" : "black" }}>
      write your goal first then add it!
    </p>
  ) : (
    <p></p>
  );

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValidInput(false);
    } else {
      setValidInput(true);
      props.onAddGoal(enteredValue);
    }
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!validInput ? "invalid" : ""}`}>
        <label>Course Goal</label>
        {validationMsg}
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
