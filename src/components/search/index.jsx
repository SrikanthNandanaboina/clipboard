import React from "react";
import SearchIcon from "./searchIcon";
import { SearchIconWrapper, SearchInput, SearchWrapper } from "./styles";

const Search = ({ setSearchText }) => {
  return (
    <SearchWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInput
        type="text"
        placeholder="Search for any job, title, keywords or company"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </SearchWrapper>
  );
};

export default Search;
