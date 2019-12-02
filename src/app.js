const Pet = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Luna"),
      React.createElement("h2", {}, "Dog"),
      React.createElement("h2", {}, "Havanese"),
    ]
  );
};

const App = () => {
  return React.createElement(
    "div", 
    {},
    [
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(Pet),
      React.createElement(Pet),
      React.createElement(Pet)
    ]
  );
};

const root = document.getElementById("root");
const element = React.createElement(App);
ReactDOM.render(element, root);