import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Custom_react from "./Custom_React_com.jsx";

function MyApp() {
  return (
    <div>
      <h1>Calling simple function</h1>
    </div>
  );
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Click me to Visit Google
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  anotherElement
  <anotherELement/>
  );
