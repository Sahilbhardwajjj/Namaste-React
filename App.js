const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading1" }, "Hello from h1 tag"),
    React.createElement("h2", { id: "heading2" }, "Hello from h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "Hello from h1 tag"),
    React.createElement("h2", { id: "heading2" }, "Hello from h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//object(React element) is changed to all the elements tag by render fn and then put it into root(div tag)
//render tag replaces not appends
root.render(heading);
