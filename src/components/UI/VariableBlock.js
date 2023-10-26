import React, { useContext, useState } from "react";

function VariableBlock() {
  const languageCtx = useContext();
  const [name, setName] = useState("");
  const [maxNum, setMaxNum] = useState(0);
  const [minNum, setMinNum] = useState(0);
  return (
    <>
      <label htmlFor="name" />
      <input id="name" type="text" />
      <label htmlFor="minNum" />
      <input id="minNum" type="number" />
      <label htmlFor="maxNum" />
      <input id="maxNum" type="number" />
      <p>{}</p>
    </>
  );
}

export default VariableBlock;
