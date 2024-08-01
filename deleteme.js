import React from "react";

const myStyles = {
  App: {
    textAlign: "center",
  },
  Component: {
    border: "3px dashed #01a76a",
    padding: "10px",
    backgroundColor: "#ffffff",
    fontFamily: "sans-serif",
    color: "#626262",
  },
  Varible: {
    color: "#fa492b",
  },
  button: {
    border: "5px solid #0c74df",
    margin: "10px",
    backgroundColor: "#0c74df",
    color: "white",
    fontWeight: "200",
    borderRadius: "5px",
  },
};

function ParentComponent({ childTitle }) {
  const [value, setValue] = React.useState(0);
  const ChildTitle = React.useMemo(() => childTitle, [childTitle]);

  return (
    <div style={myStyles.Component}>
      <h1>Parent State Value Change: <span style={myStyles.Varible}>{value}</span></h1>

      <ChildComponent title={ChildTitle} />
      <button
        style={myStyles.button}
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
    <div style={myStyles.Component}>
      <h1>
        Child Title: <span style={myStyles.Varible}>{title}</span>
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
