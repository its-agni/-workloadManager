import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [enteredComplexity, setEnteredComplexity] = useState("");

  const complexityChangeHandler = (event) => {
    setEnteredComplexity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const updatedData = {
      title: "work" + Math.random().toLocaleString(),
      complexity: enteredComplexity,
      status: "pending",
    };
    props.onSaveUpdatedData(updatedData);

    setEnteredComplexity("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Set complexity</label>
      <select onChange={complexityChangeHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div>
        <button type="submit">Start Work</button>
      </div>
    </form>
  );
};

export default Form;
