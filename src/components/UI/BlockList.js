import React, { useContext } from "react";
import VariableContext from "../../store/variable-context";
import Card from "../Card/Card";
import VariableBlock from "./VariableBlock";

function BlockList() {
	const ctx = useContext(VariableContext);
	// TODO: 각 변수별 블록 컴포넌트 구현
	return <Card>BlockList</Card>;
}

export default BlockList;
