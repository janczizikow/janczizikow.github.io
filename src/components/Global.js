import React from 'react';
import { Global as EmotionGlobal, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

const Global = () => {
  const theme = useTheme();
  return (
    <EmotionGlobal
      styles={css`
        html {
          overflow-y: initial;
        }

        body {
          padding: 0;
          margin: 0;
          background: ${theme.colors.bgColor};
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }

        body.light {
          --headingColor: #2a2a30;
          --textColor: #696c7b;
          --bgColor: #fff;
          --bgGreyColor: #f9f9f9;
          --bgHeader: hsla(0, 0%, 100%, 0.96);
          --bgAlt: #2a2a30;
        }

        body.dark {
          --headingColor: #fff;
          --textColor: #adb7be;
          --bgColor: #232323;
          --bgGreyColor: #353535;
          --bgHeader: #27282a;
          --bgAlt: #27282a;
        }

        .headroom {
          height: ${theme.headerHeight};
        }

        .headroom--scrolled {
          box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
        }

        .ReactModal__Content {
          opacity: 0;
          transform: scale(0.9);
        }

        .ReactModal__Content--after-open {
          opacity: 1;
          transform: scale(1);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .ReactModal__Content--before-close {
          opacity: 0;
          transform: scale(0.9);
        }

        .lock-scroll {
          overflow: hidden;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:hover,
        select:-webkit-autofill,
        select:-webkit-autofill:focus,
        select:-webkit-autofill:hover,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:hover {
          border-radius: 0.25rem;
        }

        ::selection {
          color: #fff;
          background-color: ${theme.colors.primary};
        }
      `}
    />
  );
};

export default Global;
