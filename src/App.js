import React from "react";
import Hello from "./components/Hello";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 React App Dockerized with Multi-Stage Build</h1>
      <Hello />
    </div>
  );
}

export default App;
