import React from "react";
import "./Workload.css";
import { useState } from "react";

const Workload = (props) => {
  const [status, setStatus] = useState(props.status);
  const onCancelHandler = (event) => {
    setStatus("cancelled");
  };
  const onDoneHandler = (event) => {
    setStatus("success");
  };
  const onResetHandler = (event) => {
    setStatus(props.status);
  };

  return (
    <div>
      <div className="container">
        <label>{props.title}</label>
        <p>complexity : {props.complexity}</p>
        <h4>Status : {status}</h4>
        <button type="button" value="cancel" onClick={onCancelHandler}>
          Cancel
        </button>
        <button type="button" value="done" onClick={onDoneHandler}>
          Mark Done
        </button>
        <button type="reset" value="reset" onClick={onResetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Workload;
