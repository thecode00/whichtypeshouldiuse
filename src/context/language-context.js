import React from "react";

const LanguageContext = React.createContext({
	language: "",
	onCheckType: () => {},
});

export default LanguageContext;

export const LanguageContextProvider = (props) => {
	const checkDataType = (minNumber, maxNumber) => {
		minNumber = parseInt(minNumber);
		maxNumber = parseInt(maxNumber);
		console.log(minNumber, maxNumber);
		if (-32768 <= minNumber && maxNumber <= 32767) {
			return "short";
		} else if (-2147483648 <= minNumber && maxNumber <= 2147483647) {
			return "int";
		} else if (
			-9223372036854775808n <= minNumber &&
			maxNumber <= 9223372036854775807n
		) {
			return "long long";
		}
		return "None";
	};
	return (
		<LanguageContext.Provider
			value={{ language: "c++", onCheckType: checkDataType }}
		>
			{props.children}
		</LanguageContext.Provider>
	);
};
