import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";
import { Router, Link } from "@reach/router";
import Details from "./details";
import ThemeContext from "./themeContext";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

const root = document.getElementById("root");
render(<App />, root);
