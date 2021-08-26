import { createGlobalStyle } from 'styled-components';
import COLORS from '@/constants/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    color: ${COLORS.TEXT_BASE};
    font-family: 'Noto Sans', 'Noto Sans JP', sans-serif;
  }
  
  body {
    margin: 0;
  }
`;
