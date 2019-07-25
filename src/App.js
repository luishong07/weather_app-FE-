import React from "react";
import Header from "./containers/Header";
import MainContainer from "./containers/MainContainer";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
