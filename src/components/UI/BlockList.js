import React, { useContext } from "react";
import Card from "../Card/Card";
import VariableBlock from "./VariableBlock";
import Button from "./Button";

function BlockList() {
	const variables = [];

	const addVariableHandler = (data) => {};
	const content = variables.map((data) => <VariableBlock />);
	return (
		<Card>
			{content}
			<Button onClick={addVariableHandler} />
		</Card>
	);
}

export default BlockList;
