import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";
import { Router, Link } from "@reach/router";
import Details from "./details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt me!</h1>

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);
