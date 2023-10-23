import React, { useState } from "react";

// 변수 블록들의 데이터들을 저장하는 컨텍스트

const VariableContext = React.createContext({
	items: [],
	onAddItem: () => {},
	onCheckDuplicate: () => {},
	onDeleteItem: () => {},
});

export default VariableContext;

export const VariableContextProvider = (props) => {
	const [items, setItems] = useState([]);

	const addItemHandler = (data) => {
		setItems((prev) => prev.push(data));
	};

	const removeItemHandler = (id) => {
		let newItems = items.filter((obj) => obj.id !== id);
		setItems(newItems);
	};

	return (
		<VariableContext.Provider
			value={{
				items,
				onAddItem: addItemHandler,
				onDeleteItem: removeItemHandler,
			}}
		>
			{props.children}
		</VariableContext.Provider>
	);
};
