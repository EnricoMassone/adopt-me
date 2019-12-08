import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};

const root = document.getElementById("root");
render(<App />, root);
