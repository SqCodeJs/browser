import React from "react";
import { Keyword } from "../types/types";
import styled from "styled-components";
import { device } from "../utils/device";
interface WrappProps {
  autocompleteKeywords: number;
}
const Wrapp = styled.div<WrappProps>`
  margin: 0;
  width: 100%;
  position: absolute;
  border: 1px solid rgb(218, 223, 225);
  display: ${(props) => (props.autocompleteKeywords > 0 ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;
const ListStyled = styled.ul`
  width: 100%;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  list-style: none;
`;
interface LiStyledProps {
  active: boolean;
}
const LiStyled = styled.div<LiStyledProps>`
  width: 100%;
  padding: 1% 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: ${(props) =>
    props.active ? "rgb(221, 218, 218)" : "rgb(255, 255, 255)"};
`;
const KeyWordStyled = styled.div`
  width: 100%;
  padding: 1%;
  z-index: 99;
  color: rgb(105, 105, 105);
  letter-spacing: 1px;
  font-family: arial;
  font-size: 10px;

  @media ${device.mobileM} {
    font-size: 11px;
  }
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
const CategoryStyled = styled.li<LiStyledProps>`
  margin: 0 1%;
  padding: 1% 2%;
  border-radius: 20px;
  text-transform: uppercase;
  z-index: 999;
  background-color: ${(props) =>
    !props.active ? "rgb(221, 218, 218)" : "rgb(255, 255, 255)"};
  font-family: arial;
  letter-spacing: 1px;

  font-size: 8px;

  @media ${device.mobileL} {
    font-size: 9px;
  }
  @media ${device.tablet} {
    font-size: 10px;
  }
  @media ${device.laptop} {
    font-size: 11px;
  }
  @media ${device.laptopL} {
    font-size: 12px;
  }
`;
interface AutocompleteProps {
  autocompleteKeywords: Keyword[];
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  cursor: number;
  setCursor: React.Dispatch<React.SetStateAction<number>>;
  filters: Keyword[];
  setFilters: React.Dispatch<React.SetStateAction<Keyword[]>>;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  autocompleteKeywords,
  input,
  setInput,
  cursor,
  setCursor,
  filters,
  setFilters,
}) => {
  return (
    <Wrapp autocompleteKeywords={autocompleteKeywords.length}>
      <ListStyled>
        {input.length >= 2
          ? autocompleteKeywords.map((element, i) => (
              <LiStyled
                key={i}
                active={cursor === i ? true : false}
                onMouseEnter={() => setCursor(i)}
                onClick={() => {
                  if (
                    !filters.some(
                      (e) => e.keyword === autocompleteKeywords[cursor].keyword
                    )
                  ) {
                    setFilters((prev) => prev.concat(element));
                    setCursor(0);
                    setInput("");
                  } else setInput("");
                }}
              >
                <KeyWordStyled>{element.keyword}</KeyWordStyled>
                <CategoryStyled active={cursor === i ? true : false}>
                  {element.category}
                </CategoryStyled>
              </LiStyled>
            ))
          : null}
      </ListStyled>
    </Wrapp>
  );
};
export default Autocomplete;
