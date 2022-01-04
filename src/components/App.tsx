import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
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

// interface Category {
//   location: string;
//   skills: string[];
//   tags: string[];
// }
type Category = "location" | "skill" | "tag";

interface Keyword {
  keyword: string;
  category: Category;
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
const copy = JSON.parse(JSON.stringify(keyWords));
function App() {
  const [autocompleteKeywords, setAutocompleteKeywords] =
    useState<Keyword[]>(copy);
  return (
    <Wrapper>
      <GlobalStyle />
      <Browser
        setAutocompleteKeywords={setAutocompleteKeywords}
        autocompleteKeywords={autocompleteKeywords}
      />
    </Wrapper>
  );
}

export default App;
