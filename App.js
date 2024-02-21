import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title">Title</h1>;

const HeadingComponent = () => (
  <div id="container">
    <h1 className="header">React Functional Component</h1>
    <Title />
    <Title></Title>
    {Title()}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
