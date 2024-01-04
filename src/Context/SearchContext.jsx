import { Children, createContext, useState } from "react";

export const SearchContextValue = createContext(null);

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
    // console.log(searchValue);
  return (
    <SearchContextValue.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContextValue.Provider>
  );
};
