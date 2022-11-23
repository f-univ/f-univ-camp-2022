import { css, Global } from '@emotion/react';

export const global = (
  <Global
    styles={css`
      /* Box sizing rules */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        color: white;
      }

      /* Remove default margin */
      body,
      h1,
      h2,
      h3,
      h4,
      p,
      figure,
      blockquote,
      dl,
      dd {
        margin: 0;
      }

      /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
      ul[role='list'],
      ol[role='list'] {
        list-style: none;
      }

      /* Set core root defaults */
      html:focus-within {
        scroll-behavior: smooth;
      }

      /* Set core body defaults */
      body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
      }

      /* A elements that don't have a class get default styles */
      a:not([class]) {
        text-decoration-skip-ink: auto;
      }

      /* Make images easier to work with */
      img,
      picture {
        max-width: 100%;
        display: block;
      }

      /* Inherit fonts for inputs and buttons */
      input,
      button,
      textarea,
      select {
        font: inherit;
      }

      /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
      @media (prefers-reduced-motion: reduce) {
        html:focus-within {
          scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      body {
        display: flex;
        justify-content: center;
        background-color: #0c0d40;
        cursor: default;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        background-image: url("data:image/svg+xml,%3Csvg width='829' height='830' viewBox='0 0 829 830' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='414.494' cy='414.975' r='414.256' fill='url(%23paint0_radial_171_629)'/%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_171_629' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(414.494 414.975) rotate(90) scale(414.256)'%3E%3Cstop stop-color='%236451E5'/%3E%3Cstop offset='1' stop-color='%230C0D40' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: top;
        background-size: 1rem;
      }
    `}
  />
);
