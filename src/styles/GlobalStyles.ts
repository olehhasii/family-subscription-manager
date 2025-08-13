import { createGlobalStyle } from 'styled-components';

// workadound from github issue, because createGlobalStyle for some reason is not formatting with prettier
const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  /*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }
  body {
    background-color: var(--color-light);
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }
  img,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  p {
    text-wrap: pretty;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-wrap: balance;
  }
  #root {
    max-width: 1280px;
    margin: 0 auto;
    isolation: isolate;
    min-height: 100vh;
  }

  :root {
    --color-light: #fafafa;
    --color-dark: #100c08;
    --color-gray: #757575;
    --color-text-primary: #ffffff;
    --color-text-secondary: #b7b7b7ff;
    --color-text-dark: #000000;

    --text-xs: 0.625rem; /* 10px */
    --text-s: 0.75rem; /* 12px */
    --text-md: 0.875rem; /* 14px */
    --text-base: 1rem; /* 16px */

    --spacing-0: 0; /* 0px */
    --spacing-1: 0.0625rem; /* 1px */
    --spacing-2: 0.125rem; /* 2px */
    --spacing-4: 0.25rem; /* 4px */
    --spacing-6: 0.375rem; /* 6px */
    --spacing-8: 0.5rem; /* 8px */
    --spacing-10: 0.625rem; /* 10px */
    --spacing-12: 0.75rem; /* 12px */
    --spacing-14: 0.875rem; /* 14px */
    --spacing-16: 1rem; /* 16px */
    --spacing-20: 1.25rem; /* 20px */
    --spacing-24: 1.5rem; /* 24px */
    --spacing-28: 1.75rem; /* 28px */
    --spacing-32: 2rem; /* 32px */
    --spacing-36: 2.25rem; /* 36px */
    --spacing-40: 2.5rem; /* 40px */
    --spacing-48: 3rem; /* 48px */
    --spacing-56: 3.5rem; /* 56px */
    --spacing-64: 4rem; /* 64px */
  }

  :root[data-theme='dark'] {
    --bg: #121212;
    --text: #f5f5f5;
  }
`;

export default GlobalStyle;
