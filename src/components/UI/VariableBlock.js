import React, { useContext, useState } from "react";
import LanguageContext from "../../context/language-context";
import classes from "./VariableBlock.module.css";

function VariableBlock() {
  const languageCtx = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [maxNum, setMaxNum] = useState(0);
  const [minNum, setMinNum] = useState(0);
  const [type, setType] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const minNumberChangeHandler = (event) => {
    setMinNum(event.target.value);
    setType(languageCtx.onCheckType(event.target.value, maxNum));
  };

  const maxNumberChangeHandler = (event) => {
    setMaxNum(event.target.value);
    setType(languageCtx.onCheckType(minNum, event.target.value));
  };
  return (
    <div className={classes.block}>
      <div className={classes["display-block"]}>
        <label htmlFor="name">Variable name</label>
        <input id="name" type="text" onBlur={nameChangeHandler} />
      </div>
      <div className={classes["display-block"]}>
        <label htmlFor="minNum">Min number</label>
        <input
          id="minNum"
          type="number"
          value={minNum}
          onChange={minNumberChangeHandler}
        />
      </div>
      <div className={classes["display-block"]}>
        <label htmlFor="maxNum">Max number</label>
        <input
          id="maxNum"
          type="number"
          value={maxNum}
          onChange={maxNumberChangeHandler}
        />
      </div>
      <div className={classes["display-block"]}>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default VariableBlock;
