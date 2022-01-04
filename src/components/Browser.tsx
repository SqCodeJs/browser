import React, { useState } from "react";
import Autocomplete from "./Autocomplete";
import BrowserButton from "./BrowserButton";
import styled from "styled-components";
import { Keyword } from "./../types/types";
import { device } from "./../utils/device";
import { keyWords } from "../temp/KeyWords";
interface BrowserWrapperProps {
  autocomplete: number;
}
const BrowserWrapper = styled.div<BrowserWrapperProps>`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
`;
interface InputContenierProps {
  active: boolean;
  autocomplete: number;
}
const InputContenier = styled.div<InputContenierProps>`
  width: 100%;
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 1px solid rgb(218, 223, 225);
  border-radius: ${(props) =>
    props.autocomplete > 0 ? "20px 20px 0px 0px" : "none"};
  background-color: ${(props) =>
    props.active ? "rgb(255,255,255)" : "rgb(218, 223, 225)"};
  &:hover {
    background-color: ${(props) =>
      props.active ? "rgb(255,255,255)" : "rgb(202, 202, 202)"};
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
  font-size: 12px;

  @media ${device.mobileL} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
  @media ${device.laptopL} {
    font-size: 20px;
  }
`;
const AutocompleteWrapper = styled.div`
  width: 100%;
  display: flex;
`;

interface BrowserProps {
  filters: Keyword[];
  setFilters: React.Dispatch<React.SetStateAction<Keyword[]>>;
}

const Browser: React.FC<BrowserProps> = ({ filters, setFilters }) => {
  const [input, setInput] = useState<string>("");
  const [autocompleteKeywords, setAutocompleteKeywords] = useState<Keyword[]>(
    []
  );
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cursor, setCursor] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target;
    setInput(newValue.value);

    const finalKey: Keyword[] = JSON.parse(JSON.stringify(keyWords)).filter(
      (elem: Keyword) =>
        elem.keyword.toLowerCase().startsWith(newValue.value.toLowerCase())
    );
    if (newValue.value.length < 2) {
      setAutocompleteKeywords([]);
    } else if (newValue.value.length >= 2) setAutocompleteKeywords(finalKey);
  };
  const handleArrowDown = () => {
    if (cursor === autocompleteKeywords.length - 1) {
      setCursor(0);
    } else setCursor((prev) => prev + 1);
  };
  const handleArrowUp = () => {
    if (cursor === 0) {
      setCursor(autocompleteKeywords.length - 1);
    } else {
      setCursor((prev) => prev - 1);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (input.length > 15) {
      setInput("");
      alert("string is to long ");
      return;
    }

    if (e.key === "Enter") {
      if (
        autocompleteKeywords.length > 0 &&
        !filters.some((e) => e.keyword === autocompleteKeywords[cursor].keyword)
      ) {
        setFilters((prev) => prev.concat(autocompleteKeywords[cursor]));
      } else if (autocompleteKeywords.length === 0) {
        if (!filters.some((e) => e.keyword === input)) {
          setFilters((prev) =>
            prev.concat({ category: "tag", keyword: input })
          );
        }
      }

      setInput("");
      setCursor(0);
      setAutocompleteKeywords([]);
    }
    if (e.key === "ArrowDown") {
      handleArrowDown();
    }
    if (e.key === "ArrowUp") {
      handleArrowUp();
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
    <BrowserWrapper autocomplete={autocompleteKeywords.length}>
      <InputContenier
        active={isActive}
        autocomplete={autocompleteKeywords.length}
      >
        {renderKeyWords()}
        <Input
          type="text"
          value={input}
          placeholder="location, skill, tag"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsActive(true)}
        />
      </InputContenier>
      <AutocompleteWrapper>
        <Autocomplete
          input={input}
          setInput={setInput}
          cursor={cursor}
          setCursor={setCursor}
          autocompleteKeywords={autocompleteKeywords}
          filters={filters}
          setFilters={setFilters}
        />
      </AutocompleteWrapper>
    </BrowserWrapper>
  );
};
export default Browser;
