import React, { useState } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";
import PropTypes from 'prop-types'

const ParentComponent = ({ childTitle, handleTitleChange }) => {
  console.log("I'm rendering Parent again");
  const [value, setValue] = useState(0);

  const countIncrementor = () => {
    setValue((previousValue) => previousValue + 1);
  };

  return (
    <div className="Component">
      <h1>
        Parent State Value Change: <span className="Variable">{value}</span>
      </h1>
      <button onClick={countIncrementor}>Update State on Parent ++</button>

      <ChildComponent title={childTitle} />

      {/* new button for fun */}
      <button onClick={handleTitleChange}>Change Title</button>
    </div>
  );
};

ParentComponent.propTypes = {
  childTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};

export default ParentComponent;