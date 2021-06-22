import React from "react";
import Workload from "./Workload";

// import { useState } from "react";

const WorkloadList = (props) => {
  return (
    <div>
      {props.onList.map((item) => (
        <Workload
          key={item.id}
          title={item.title}
          complexity={item.complexity}
          status={item.status}
          //   onCancel={onCancelHandler}
          //   onDone={onDoneHandler}
        />
      ))}
    </div>
  );
};

export default WorkloadList;
