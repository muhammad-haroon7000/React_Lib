import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  /*
  let count = 15;
  const addValue = () => {
    // if you check in it console it updated but not in UI that's why we need react , 
    // react provide for that hooks , mul
    console.log("Clicked", count);
    count = count + 1;
  };
*/

  // let's use hooks , here i use useState hook

  const [count, setCount] = useState(15);

  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
      // console.log(count);
    }
  };
  // function to removing values from
  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Simple Count App</h1>
      <h2> Count {count} </h2>
      <p>
        {" "}
        let's suppose we have many place where we need to update the count =
        {count}
      </p>
      <button onClick={addValue}> Add Values</button>
      <button onClick={removeValue}> Remove Values </button>
    </>
  );
}

export default App;
