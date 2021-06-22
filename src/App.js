import React, { useState } from "react";
import "./App.css";
import WorkloadList from "./components/Workload/WorkloadList";
import NewList from "./components/ComplexityForm.js/NewList";

function App() {
  const list = [
    { id: 0, title: "work#0", complexity: "10", status: "success" },
    { id: 1, title: "work#1", complexity: "1", status: "cancelled" },
    { id: 2, title: "work#2", complexity: "8", status: "cancelled" },
    { id: 3, title: "work#3", complexity: "5", status: "pending" },
  ];

  const [currentList, setList] = useState(list);

  const addData = (newData) => {
    setList((prevState) => {
      return [newData, ...prevState];
    });
  };

  return (
    <div className="App">
      <h1>Workload Manager</h1>
      <NewList onAddData={addData} />
      <WorkloadList onList={currentList} />
    </div>
  );
}

export default App;
