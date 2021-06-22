import React from "react";
import Form from "./Form";

const NewList = (props) => {
  const saveUpdatedData = (enteredData) => {
    const newData = { ...enteredData, id: Math.random().toString() };
    props.onAddData(newData);
  };
  return (
    <div>
      <Form onSaveUpdatedData={saveUpdatedData} />
    </div>
  );
};

export default NewList;
