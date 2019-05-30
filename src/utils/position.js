import {css } from 'styled-components'

// CSS Helper
export const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + "px"};
  left: 0;
`;