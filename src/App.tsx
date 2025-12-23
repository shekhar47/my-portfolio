import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {process.env.REACT_APP_PROJECT_DESCRIPTION}{" "}
      </header>
    </div>
  );
}

export default App;
