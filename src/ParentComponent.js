import React, { useState } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({ childTitle, handleTitleChange }) => {
  console.log("I'm rendering Parent again");
  const [value, setValue] = useState(0);

  const onClickHandler = () => {
    setValue((previousValue) => previousValue + 1);
  };

  return (
    <div className="Component">
      <h1>
        Parent State Value Change: <span className="Variable">{value}</span>
      </h1>

      <button onClick={onClickHandler}>Update State on Parent ++</button>
      <ChildComponent title={childTitle} />

      {/* new button for fun */}
      <button onClick={handleTitleChange}>Change Title</button>
    </div>
  );
};

export default ParentComponent;
