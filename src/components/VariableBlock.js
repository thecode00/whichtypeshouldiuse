import React, { useState } from "react";

// TODO: Standardize formatting settings between Windows laptop and MacBook

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
			<input
				type="number"
				value={minNumber}
				onChange={handleMinNumber}
				required
			></input>
			<>&lt;=</>
			<input type="text" id="v-name" required></input>
			<>&lt;=</>
			<input
				type="number"
				value={maxNumber}
				onChange={handleMaxNumber}
				required
			></input>
		</div>
	);
}

export default VariableBlock;
