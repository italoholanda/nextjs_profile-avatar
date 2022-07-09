import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-cyan: #21C0E3;
    --white: #FDFDFD;
    --black: #0A0A0A;
    --grey-darkest: #111111;
    --grey-dark: #1E1E1E;
    --grey-lighten: #404040;
    --grey-light: #D9D9D9;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--grey-dark);
    color: var(--white);
  }
`

export default GlobalStyles
