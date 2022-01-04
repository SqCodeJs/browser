import React, { useState } from "react";
import Autocomplete from "./Autocomplete";
import BrowserButton from "./BrowserButton";
import styled from "styled-components";
import { Keyword } from "./../types/types";
import { device } from "./../utils/device";
const BrowserWrapper = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;

  border: 1px solid rgb(218, 223, 225);
`;
interface InputContenierProps {
  active: boolean;
}
const InputContenier = styled.div<InputContenierProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  background-color: ${(props) =>
    props.active ? "rgb(255,255,255)" : "rgb(218, 223, 225)"};
  &:hover {
    background-color: ${(props) =>
      props.active ? "rgb(255,255,255)" : "rgb(236, 236, 236)"};
  }
`;
const Input = styled.input`
  padding: 1%;
  border: none;
  flex-grow: 1;
  cursor: pointer;
  color: rgb(105, 105, 105);
  background-color: transparent;
  &:focus {
    outline: none;
  }
  font-size: 10px;

  @media ${device.mobileL} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  @media ${device.laptopL} {
    font-size: 18px;
  }
`;
const AutocompleteWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const KeyWordsConteriner = styled.div`
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
  const [isActive, setIsActive] = useState<boolean>(false);
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
    if (input.length > 15) {
      setInput("");
      alert("za dlugi ciag znakow");
      return;
    }
    if (e.key === "Enter") {
      console.log("nacisnito enter");
      const newFitlers = [...filters];
      newFitlers.push(input);
      setFilters(newFitlers);

      setInput("");
    }
  };
  const renderKeyWords = () => {
    return filters.map((keyWord, i) => (
      <BrowserButton
        key={i}
        element={keyWord}
        remove={() => setFilters(filters.filter((e) => e !== keyWord))}
      />
    ));
  };
  return (
    <BrowserWrapper>
      <InputContenier active={isActive}>
        {renderKeyWords()}
        <Input
          type="text"
          value={input}
          placeholder="location, skill, tag"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsActive(false)}
          onFocus={() => setIsActive(true)}
        />
      </InputContenier>
      <AutocompleteWrapper>
        <Autocomplete
          input={input}
          isActive={isActive}
          autocompleteKeywords={autocompleteKeywords}
        />
      </AutocompleteWrapper>
    </BrowserWrapper>
  );
};
export default Browser;
