import React from "react";
import "./App.css";

function ParentComponent({ childTitle }) {
  const [value, setValue] = React.useState(0);
  const ChildTitle = React.useMemo(() => childTitle, [childTitle]);

  return (
    <div className="Component">
      <h1>
        Parent State Value Change: <span className="Varible">{value}</span>
      </h1>

      <ChildComponent title={ChildTitle} />
      <button
        onClick={() => {
          setValue((value) => value + 1);
        }}
      >
        Update State on Parent ++
      </button>
    </div>
  );
}

const ChildComponent = function ({ title }) {
  return (
    <div className="Component">
      <h1>
        Child Title: <span className="Varible">{title}</span>
      </h1>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <ParentComponent childTitle={"Child Component"} className="App" />
    </div>
  );
}
