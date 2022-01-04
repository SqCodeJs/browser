import React from "react";
import { Keyword } from "../types/types";
import styled from "styled-components";
import { device } from "../utils/device";
interface WrappProps {
  //   input: string;
  autocompleteKeywords: Keyword[];
}
const Wrapp = styled.div<WrappProps>`
  margin: 0;
  width: 100%;
  position: absolute;
  border: 1px solid rgb(218, 223, 225);
  display: ${(props) =>
    props.autocompleteKeywords.length > 0 ? "flex" : "none"};
  align-items: center;
  justify-content: center;
`;
const ListStyled = styled.ul`
  width: 95%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  list-style: none;
`;
const LiStyled = styled.li`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const KeyWordStyled = styled.div`
  width: 100%;
  padding: 1%;

  color: rgb(105, 105, 105);

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
const CategoryStyled = styled.div`
  padding: 1% 2%;
  border-radius: 20px;
  text-transform: uppercase;

  background-color: rgb(238, 238, 238);
  font-family: arial;
  font-weight: lighter;
  font-size: 6px;

  @media ${device.mobileL} {
    font-size: 7px;
  }
  @media ${device.tablet} {
    font-size: 8px;
  }
  @media ${device.laptop} {
    font-size: 9px;
  }
  @media ${device.laptopL} {
    font-size: 10px;
  }
`;
interface AutocompleteProps {
  autocompleteKeywords: Keyword[];
  input: string;
  isActive: boolean;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  autocompleteKeywords,
  input,
  isActive,
}) => {
  return (
    <Wrapp autocompleteKeywords={autocompleteKeywords}>
      <ListStyled>
        {autocompleteKeywords.map((e) => (
          <LiStyled key={e.keyword}>
            <KeyWordStyled>{e.keyword}</KeyWordStyled>
            <CategoryStyled>{e.category}</CategoryStyled>
          </LiStyled>
        ))}
      </ListStyled>
    </Wrapp>
  );
};
export default Autocomplete;
