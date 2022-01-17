import { useState } from "react";

import { SearchBox, Btn, Input } from "./styles";

interface SearchProps {
  searchFormSubmitted: (input: string) => void;
}

export default function Search({
  searchFormSubmitted,
}: SearchProps): JSX.Element {
  const [val, setVal] = useState("");

  const handleChange = (e: any) => setVal(e.target.value);

  const handleSearch = (e: any) => {
    e.preventDefault();
    searchFormSubmitted(val.trim());
  };

  return (
    <SearchBox>
      <form onSubmit={(e) => handleSearch(e)}>
        <Input
          type="text"
          className="input"
          name=""
          onChange={handleChange}
          placeholder="Type somthing to search"
          value={val}
        />
        <Btn type="submit">Search</Btn>
      </form>
    </SearchBox>
  );
}
