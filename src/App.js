import React, { useState } from "react";
import "./App.css";
import ParentComponent from "./ParentComponent";

const App = () => {
  console.log("I'm rendering App again");
  const [picker, setPicker] = useState(true);
  const childTitle = ["Child Component", "Now I'm a little happy guy! ~~( ᐛ )~~"];
  const changeTitle = () => {
    setPicker((prevState) => !prevState);
  };

  return (
    // fix: class was in the wrong location so styling wasn't applied
    <div className="App">
      <ParentComponent
        childTitle={picker ? childTitle[0] : childTitle[1]}
        handleTitleChange={changeTitle}
      />
    </div>
  );
};
export default App;
