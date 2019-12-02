const App = () => {
  return React.createElement(
    "div", 
    {},
    React.createElement("h1", {}, "Adopt me!"));
};

const root = document.getElementById("root");
const element = React.createElement(App);
ReactDOM.render(element, root);