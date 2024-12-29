import style from "./Button-container.module.css";

const ButtonContainer = ({onButtonClick}) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={`${style["button-container"]}`}>
      {buttonNames.map((buttonName, idx) => (
        <button className={`${style["button"]}`} onClick={() => onButtonClick(buttonName)}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
