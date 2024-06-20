import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
  /* Grey */
  --color-grey-0: #ffffff;
  --color-grey-50: #f8f9fa;
  --color-grey-100: #f1f3f5;
  --color-grey-200: #e9ecef;
  --color-grey-300: #dee2e6;
  --color-grey-400: #ced4da;
  --color-grey-500: #adb5bd;
  --color-grey-600: #6c757d;
  --color-grey-700: #495057;
  --color-grey-800: #343a40;
  --color-grey-900: #212529;

  --color-purple-100: #ede9fe;
  --color-purple-700: #7c3aed;

  --color-blue-100: #e0ebf5;
  --color-blue-700: #0369a1;
  --color-green-100: #d4edda;
  --color-green-700: #28a745;
  --color-yellow-100: #fff3cd;
  --color-yellow-700: #ffc107;
  --color-silver-100: #e9ecef;
  --color-silver-700: #495057;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #f8d7da;
  --color-red-700: #dc3545;
  --color-red-800: #c82333;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  &.dark-mode {
    --color-grey-0: #181a1b;
    --color-grey-50: #202326;
    --color-grey-100: #2c2f33;
    --color-grey-200: #3c4147;
    --color-grey-300: #4b5158;
    --color-grey-400: #5a6068;
    --color-grey-500: #6c737c;
    --color-grey-600: #858a91;
    --color-grey-700: #9da2a8;
    --color-grey-800: #b5b9bd;
    --color-grey-900: #ced0d3;

    --color-purple-100: #5b21b6;
    --color-purple-700: #d8b4fe;

    --color-blue-100: #1a1a2e;
    --color-blue-700: #e0ebf5;
    --color-green-100: #1b4332;
    --color-green-700: #95d5b2;
    --color-yellow-100: #5e4325;
    --color-yellow-700: #ffc107;
    --color-silver-100: #495057;
    --color-silver-700: #f1f3f5;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;

    --color-red-100: #311a1a;
    --color-red-700: #ff4d4d;

    --color-red-800: #c82333;

    --backdrop-color: rgba(0, 0, 0, 0.3);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

    --image-grayscale: 10%;
    --image-opacity: 90%;
  }
  
  /* Brand Colors */
  --color-brand-50: #f3e8ff;
  --color-brand-100: #e9d5ff;
  --color-brand-200: #d8b4fe;
  --color-brand-500: #a855f7;
  --color-brand-600: #9333ea;
  --color-brand-700: #7e22ce;
  --color-brand-800: #6b21a8;
  --color-brand-900: #581c87;
  
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;