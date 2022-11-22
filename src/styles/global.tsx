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
        background-color: #0c0d40;
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
        cursor: default;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        /* background-image: url("data:image/svg+xml,%3Csvg width='100%' height='2938' viewBox='0 0 871 2938' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_113_3041' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='382' width='100%' height='1424'%3E%3Crect y='382' width='100%' height='1424' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_113_3041)'%3E%3Ccircle cy='1077' r='637' fill='url(%23paint0_radial_113_3041)'/%3E%3C/g%3E%3Cmask id='mask1_113_3041' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='1' y='1656' width='870' height='1282'%3E%3Crect x='1' y='1656' width='870' height='1282' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask1_113_3041)'%3E%3Ccircle cx='436' cy='2297' r='641' fill='url(%23paint1_radial_113_3041)'/%3E%3C/g%3E%3Cmask id='mask2_113_3041' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='319' y='0' width='550' height='1094'%3E%3Crect x='319' width='550' height='1094' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask2_113_3041)'%3E%3Ccircle cx='996' cy='269' r='635' fill='url(%23paint2_radial_113_3041)'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_113_3041' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(0 1077) rotate(90) scale(637)'%3E%3Cstop stop-color='%23327AE7'/%3E%3Cstop offset='1' stop-color='%230C0D40'/%3E%3C/radialGradient%3E%3CradialGradient id='paint1_radial_113_3041' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(436 2297) rotate(90) scale(641)'%3E%3Cstop stop-color='%235728EE'/%3E%3Cstop offset='1' stop-color='%230C0D40'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_113_3041' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(996 269) rotate(90) scale(635)'%3E%3Cstop stop-color='%23968CDA'/%3E%3Cstop offset='1' stop-color='%230C0D40'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E%0A"); */
      }
    `}
  />
);
