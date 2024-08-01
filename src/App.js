import React, { useState, } from "react";
import "./App.css";
import ParentComponent from './ParentComponent'

const App = () => {
  console.log("I'm rendering App again")
  const [picker, setPicker] = useState(true)
  const childTitle = ["Child Component", "something else"];
  const changeTitle = () => {
    setPicker(prevState => !prevState);
  }
  
  return (
    // fix: class was in the wrong location so styling wasn't applied
    <div className="App">
      <ParentComponent childTitle={picker ? childTitle[0] : childTitle[1]} />
      <button onClick={changeTitle}>Change Title</button>
    </div>
  );
}
export default App;