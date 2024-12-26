import React from "react";
import ReactDOM from "react-dom/client";

//JSX-> not html in JS -> it has HTML/XML like syntax
//JSX code is transpilled by Parcel(with Babel) before it reaches the JS Engine
//JSX ->(Babel)-> React.createElement -> ReactElement(Js object) -> HTMLElement(render)
const jsxheading = (
  <h1 id="heading" className="heading" tabIndex={5}>
    Namaste React using JSX
  </h1>
);

// React Functional component -> JS fn which returns jsx code(React element)
const HeadingComponent1 = () => {
  return (
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>Hii there from h2</h2>
    </div>
  );
};
const HeadingComponent2ndway = () => (
  <h1 id="heading2">Namaste React Functional Component</h1>
);

// Merging two Components -> Component Composition
const Title = <h1>Hii there from title!!</h1>;

const HeadingnewComponent1 = () => {
  return (
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>Hii there from h2</h2>
      {Title}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(HeadingnewComponent1());
