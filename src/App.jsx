import style from "./App.module.css";
import Display from "./components/Display";
import Buttoncontainer from "./components/Buttoncontainer";

function App() {
  return (
    <center className={style.calculator}>
      <Display />
      <Buttoncontainer />
    </center>
  );
}

export default App;
