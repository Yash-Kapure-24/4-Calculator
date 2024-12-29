import style from "./App.module.css";
import Display from "./components/Display";
import Buttoncontainer from "./components/Buttoncontainer";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newVal = calVal + buttonName;
      setCalVal(newVal);
    }
  };

  return (
    <center className={style.calculator}>
      <Display displayCalValue={calVal} />
      <Buttoncontainer onButtonClick={onButtonClick} />
    </center>
  );
}

export default App;
