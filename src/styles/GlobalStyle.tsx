import { createGlobalStyle } from 'styled-components';
import COLORS from '@/constants/colors';

export const GlobalStyle = createGlobalStyle`
  * {
    color: ${COLORS.TEXT_BASE};
  }
  
  body {
    margin: 0;
  }
`;
