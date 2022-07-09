import { createGlobalStyle } from 'styled-components'

export const typoSystem =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

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
    --grey-medium: #1A1A1A;
    --grey-darkest-alpha: rgba(17, 17, 17, .8);
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: "IBM Plex Sans", ${typoSystem};
    background: var(--grey-dark);
    color: var(--white);
  }

  h1 {
    font-size: 1.3rem;
    font-family: "IBM Plex Mono", ${typoSystem};
  }
`

export default GlobalStyles
