import React, { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ParentComponent childTitle={"Child Component"} />
    </div>
  );
}

export default App

const ParentComponent = ({ childTitle }) => {
  const [value, setValue] = useState(0);

  const onClickHandler = () => {
    setValue((previousValue) => previousValue + 1);
  };

  return (
    <div className="Component">
      <h1>
        Parent State Value Change: <span className="Variable">{value}</span>
      </h1>
      <ChildComponent title={childTitle} handleOnClick={onClickHandler} />
    </div>
  );
}

const ChildComponent = (props) => {
  const { title, handleOnClick } = props;
  return (
    <div className="Component">
      <h1>
        Child Title: <span className="Variable">{title}</span>
      </h1>
      <button onClick={handleOnClick}>Update State on Parent ++</button>
    </div>
  );
};
