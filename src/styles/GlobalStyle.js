import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

 :root {
    --white: #FFFFFF;
    --main: #e5e5e5;
    --colorInput: #6c6c80;
    --black0: #202020;
    --black1: #404040;
    --black2: #8c8c8c;
    --black3: #b9b9b9;
    --red: #FF1510;
    --pink: #FDECEC;
    --green: #E7F6E7;
    --purple: #5a2d82;
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  @media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  min-width: 380px;
  background: var(--background);
  color: var(--text);
}

body,
input,
select,
textarea,
button {
  font: 400 1rem 'Montserrat', sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

`;
