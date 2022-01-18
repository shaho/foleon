import { useState } from "react";

import { SearchWrapper, Box, SearchButton, SerachInput } from "./styles";

interface SearchProps {
  searchFormSubmitted: (input: string) => void;
}

export default function Search({
  searchFormSubmitted,
}: SearchProps): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchFormSubmitted(searchValue.trim());
  };

  return (
    <SearchWrapper>
      <Box>
        <form onSubmit={(e) => handleSearch(e)}>
          <SerachInput
            type="text"
            className="input"
            name=""
            onChange={handleChange}
            placeholder="Type somthing to search..."
            value={searchValue}
          />
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </Box>
    </SearchWrapper>
  );
}
