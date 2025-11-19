import React, { useState } from "react";
import "./styles.css";

const diceValues = {
  1: ["dice-item-center-center"],
  2: ["dice-item-top-left", "dice-item-bottom-right"],
  3: [
    "dice-item-top-left",
    "dice-item-center-center",
    "dice-item-bottom-right",
  ],
  4: [
    "dice-item-top-left",
    "dice-item-top-right",
    "dice-item-bottom-left",
    "dice-item-bottom-right",
  ],
  5: [
    "dice-item-top-left",
    "dice-item-top-right",
    "dice-item-center-center",
    "dice-item-bottom-left",
    "dice-item-bottom-right",
  ],
  6: [
    "dice-item-top-left",
    "dice-item-top-right",
    "dice-item-center-left",
    "dice-item-center-right",
    "dice-item-bottom-left",
    "dice-item-bottom-right",
  ],
};
const DiceComponent = () => {
  const [value, setValue] = useState<number>(1);
  const [roll, setRoll] = useState<number[]>([]);
  const handleClick = () => {
    const resp: number[] = [];
    for (let i = 0; i < value; i++) {
      resp.push(Math.floor(Math.random() * 6) + 1);
    }
    setRoll(resp);
  };
  console.log("roll", roll);
  return (
    <div className="wrapper">
      <div className="header">
        <div className="input-fields">
          <label htmlFor="dice-input">Number of Dice</label>
          <input
            id="dice-input"
            type="number"
            min={1}
            max={12}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(parseInt(e.target.value));
            }}
          />
        </div>
        <button onClick={handleClick}>Roll</button>
      </div>
      <div className="footer">
        {roll.map((item, index) => (
          <div key={index} className="dice">
            {diceValues[item].map((dotClass, i) => (
              <div key={i} className={`dice-item ${dotClass}`}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiceComponent;
