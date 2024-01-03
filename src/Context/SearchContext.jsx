import { Children, createContext, useState } from "react";

export const SearchContextValue = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchvalue] = useState("");
  //   console.log(searchValue);
  return (
    <SearchContextValue.Provider value={{ searchValue, setSearchvalue }}>
      {children}
    </SearchContextValue.Provider>
  );
};
