import { useState } from "react";
import "./App.css";
import Card from "./component/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-300 m-4"> Tailwind CSS</h1>
      <Card readme="Click Me" />
      <Card readme="Read More" />
    </>
  );
}

export default App;
