import React from "react";

const LanguageContext = React.createContext({
  language: {},
});

const LanguageContextProvider = (props) => {
  return <LanguageContext.Provider>{props.children}</LanguageContext.Provider>;
};

export default LanguageContextProvider;
