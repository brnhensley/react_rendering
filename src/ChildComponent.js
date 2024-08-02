import React, { memo } from "react";
import "./App.css";
import PropTypes from "prop-types";

const ChildComponent = ({title}) => {
  console.log("I'm rendering Child again");
  
  return (
    <div className="Component">
      <h1>
        Child Title: <span className="Variable">{title}</span>
      </h1>
    </div>
  );
}

ChildComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

// fix: adding memo so we don't rerender the child when 
// the parent rerenders, unless the child's props change
export default memo(ChildComponent)