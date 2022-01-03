import React, { useState } from "react";
import Autocomplete from "./Autocomplete";
import styled from "styled-components";
import { Keyword } from "../types/types";
const BrowserWrapper = styled.div`
  width: 80%;
  position: relative;
  border: 1px solid red;
`;
const KeyWordsConteriner = styled.div`
  display: absolute;
  left: 0;
  top: 0;
  border: 1px solid green;
`;
interface BrowserProps {
  setAutocompleteKeywords: React.Dispatch<React.SetStateAction<Keyword[]>>;
  autocompleteKeywords: Keyword[];
}
const keyWords: Keyword[] = [
  { keyword: "Kraków", category: "location" },
  { keyword: "Poznań", category: "location" },
  { keyword: "Warszawa", category: "location" },
  { keyword: "Katowice", category: "location" },
  { keyword: "Wrocław", category: "location" },
  { keyword: "Lódz", category: "location" },
  { keyword: "Szczecin", category: "location" },
  { keyword: "Gdańsk", category: "location" },
  { keyword: "Bydgoszcz", category: "location" },
  { keyword: "Toruń", category: "location" },
  { keyword: "JavaScript", category: "skill" },
  { keyword: "Typescript", category: "skill" },
  { keyword: "Python", category: "skill" },
  { keyword: "Java", category: "skill" },
  { keyword: "Go", category: "skill" },
  { keyword: "PHP", category: "skill" },
  { keyword: "js", category: "tag" },
  { keyword: "react", category: "tag" },
  { keyword: "ts", category: "tag" },
  { keyword: "express", category: "tag" },
  { keyword: "laravel", category: "tag" },
];
const Browser: React.FC<BrowserProps> = ({
  setAutocompleteKeywords,
  autocompleteKeywords,
}) => {
  const [input, setInput] = useState<string>("");
  const [filters, setFilters] = useState<string[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target;
    setInput(newValue.value);
    if (newValue.value.length >= 2) {
      const finalKey: Keyword[] = JSON.parse(JSON.stringify(keyWords)).filter(
        (elem: Keyword) =>
          elem.keyword.toLowerCase().startsWith(input.toLowerCase())
      );
      setAutocompleteKeywords(finalKey);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("nacisnito enter");
      const newFitlers = [...filters];
      newFitlers.push(input);
      setFilters(newFitlers);

      setInput("");
    }
  };
  const renderKeyWords = () => {
    return filters.map((keyWord) => (
      <button key={keyWord} style={{ border: "1px solid black" }}>
        {keyWord}
      </button>
    ));
  };
  return (
    <BrowserWrapper>
      <KeyWordsConteriner>{renderKeyWords()}</KeyWordsConteriner>
      <Autocomplete input={input} autocompleteKeywords={autocompleteKeywords} />
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </BrowserWrapper>
  );
};
export default Browser;
