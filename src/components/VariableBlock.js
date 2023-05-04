import React, { useState } from "react";

// TODO: Standardize formatting settings between Windows laptop and MacBook

function VariableBlock() {
	const [minNumber, setMinNumber] = useState(0);
	const [maxNumber, setMaxNumber] = useState(0);
	const [minDegree, setMinDegree] = useState(1);
	const [maxDegree, setMaxDegree] = useState(1);

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
			<> ^ </>
			<input
				type="number"
				value={minDegree}
				onChange={(num) => setMinDegree(num)}
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
			<> ^ </>
			<input
				type="number"
				value={maxDegree}
				onChange={(num) => {
					setMaxDegree(num);
				}}
			></input>
		</div>
	);
}

export default VariableBlock;
