import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 1.6;
  color: #777;
  background-color: rgba(255, 51, 102, 0.2);
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 100vh;
}

ul li {
  padding: 0.5rem 0;
  list-style: none;
}
`;

export default GlobalStyles;
