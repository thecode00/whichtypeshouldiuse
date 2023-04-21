import React, { useState } from "react";

function VariableBlock() {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);

  const handleMinNumber = (num) => {
    setMinNumber(num);
  };
  const handleMaxNumber = (num) => {
    setMaxNumber(num);
  };
  return (
    <div>
      <input type="number" value={minNumber} onChange={handleMinNumber}></input>
      <>&lt;=</>
      <input type="text" id="v-name"></input>
      <>&lt;=</>
      <input type="number" value={maxNumber} onChange={handleMaxNumber}></input>
    </div>
  );
}

export default VariableBlock;
