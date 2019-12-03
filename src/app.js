import React from "react";
import { render } from "react-dom";
import Pet from "./pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel"
    })
  ]);
};

const root = document.getElementById("root");
const element = React.createElement(App);
render(element, root);
