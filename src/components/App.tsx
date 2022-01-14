import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import { Keyword } from "./../types/types";
import Browser from "./Browser";

const GlobalStyle = createGlobalStyle`
*{

	margin:0;
	padding:0;
	box-sizing:border-box;
}
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [filters, setFilters] = useState<Keyword[]>([]);
  //seach offers, articles etc by state - filters
  const state = useSelector((state) => state);
  console.log("STATE", state);
  return (
    <Wrapper>
      <GlobalStyle />
      <Browser filters={filters} setFilters={setFilters} />
    </Wrapper>
  );
}

export default App;
