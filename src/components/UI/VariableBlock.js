import React, { useContext, useState } from "react";
import LanguageContext from "../../context/language-context";

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
		<>
			<label htmlFor="name" />
			<input id="name" type="text" onBlur={nameChangeHandler} />
			<label htmlFor="minNum" />
			<input
				id="minNum"
				type="number"
				value={minNum}
				onChange={minNumberChangeHandler}
			/>
			<label htmlFor="maxNum" />
			<input
				id="maxNum"
				type="number"
				value={maxNum}
				onChange={maxNumberChangeHandler}
			/>
			<p>{type}</p>
		</>
	);
}

export default VariableBlock;
