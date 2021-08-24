import { createGlobalStyle } from 'styled-components';
import COLORS from '@/constants/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    color: ${COLORS.TEXT_BASE};
  }
  
  body {
    margin: 0;
    background-color: rgb(250, 250, 250);
  }
`;
