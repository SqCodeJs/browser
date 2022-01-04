import React from "react";
import styled from "styled-components";
import { Keyword } from "../types/types";
import { device } from "./../utils/device";

const Wrapp = styled.div`
  flex-grow: 1;
  min-width: 20%;
  margin: 2px;
  padding: 0 1%;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;

  border: 1px solid rgb(192, 193, 194);
  background-color: white;
  border-radius: 30px;
`;
const KeyWordStyled = styled.div`
  width: 90%;
  margin: 2% 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(105, 105, 105);
  font-family: arial;
  font-size: 10px;

  @media ${device.mobileM} {
    font-size: 12px;
  }
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
const CategoryStyled = styled.div`
  background-color: rgb(238, 238, 238);
  margin: 2% 1%;
  padding: 1% 3%;
  border-radius: 20px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: arial;
  font-weight: lighter;
  font-size: 6px;

  @media ${device.mobileM} {
    font-size: 8px;
  }
  @media ${device.mobileL} {
    font-size: 10px;
  }
  @media ${device.tablet} {
    font-size: 11px;
  }
  @media ${device.laptop} {
    font-size: 12px;
  }
  @media ${device.laptopL} {
    font-size: 14px;
  }
`;
const RemoveButtonWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RemoveButtonStyled = styled.button`
  font-size: 14px;
  line-height: 28px;
  width: 30px;
  margin: 1%;
  padding: 2%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: rgb(105, 105, 105);
  background-color: transparent;
  &:hover {
    background-color: rgb(238, 238, 238);
  }
`;
interface ButtonProps {
  element: Keyword;

  remove: () => void;
}

const BrowserButton: React.FC<ButtonProps> = ({ element, remove }) => {
  return (
    <Wrapp>
      <CategoryStyled>{element.category}</CategoryStyled>
      <KeyWordStyled>{element.keyword}</KeyWordStyled>
      <RemoveButtonWrapp>
        <RemoveButtonStyled onClick={remove}>x</RemoveButtonStyled>
      </RemoveButtonWrapp>
    </Wrapp>
  );
};
export default BrowserButton;
