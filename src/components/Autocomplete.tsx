import React from "react";
import { Keyword } from "../types/types";

interface AutocompleteProps {
  autocompleteKeywords: Keyword[];
  input: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  autocompleteKeywords,
  input,
}) => {
  return (
    <div>
      {input.length >= 2
        ? autocompleteKeywords &&
          autocompleteKeywords.map((e) => (
            <div key={e.keyword}>{e.keyword}</div>
          ))
        : null}
    </div>
  );
};
export default Autocomplete;
