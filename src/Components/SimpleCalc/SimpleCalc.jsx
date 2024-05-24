import React, { useState } from "react";
import "./SimpleCalc.css";
import { evaluate } from "mathjs";

const SimpleCalc = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevValue) => prevValue + value);
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput("Error!");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackSpace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="calc">
        <input
          value={input}
          type="text"
          placeholder="0"
          id="inputBox"
          readOnly
        />
        <div>
          <button onClick={() => handleClear()} className="function">
            AC
          </button>
          <button onClick={() => handleBackSpace()} className="function">
            C
          </button>
          <button onClick={() => handleButtonClick("%")} className="function">
            %
          </button>
          <button onClick={() => handleButtonClick("/")} className="function">
            /
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button onClick={() => handleButtonClick("*")} className="function">
            x
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("-")} className="function">
            -
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("+")} className="function">
            +
          </button>
        </div>
        <div>
          <button className="function">Adv.</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button onClick={handleCalculate} className="function">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalc;
