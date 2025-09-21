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
    background-color: var(--color-bg-page);
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

    --color-red: #b02525;
    --color-green: #15803d;
    --color-yellow: #ffb84d;

    --color-bg-page: #ffffff;
    --color-bg-main: #f8f9fa;
    --color-bg-accent: #e9ecef;
    --color-bg-secondary: #f1f3f4;
    --color-bg-primary: #212529;

    --color-text-primary: #212529;
    --color-text-secondary: #6c757d;
    --color-text-dark: #ffffff;

    --border: 1px solid oklch(0 0 0 / 0.1);

    --text-xs: 0.625rem; /* 10px */
    --text-s: 0.75rem; /* 12px */
    --text-md: 0.875rem; /* 14px */
    --text-base: 1rem; /* 16px */
    --text-l: 1.25rem; /* 20px */
    --text-xl: 1.5rem; /* 24px */

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
    --color-light: #fafafa;
    --color-dark: #100c08;
    --color-gray: #757575;

    --color-red: #b02525;
    --color-green: #15803d;
    --color-yellow: #ffb84d;

    --border: 1px solid oklch(100% 0 0 / 0.1);

    --color-bg-page: #0a0a0a;
    --color-bg-main: #171717;
    --color-bg-accent: #404040;
    --color-bg-secondary: #262626;
    --color-bg-primary: #e5e5e5;

    --color-text-primary: #fafafa;
    --color-text-secondary: #a1a1a1;
    --color-text-dark: #000000;
  }
`;

export default GlobalStyle;
