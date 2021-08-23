import { FC } from 'react';
import styled from 'styled-components';
import COLORS from '@/constants/colors';

const Panel: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Panel;

const Wrapper = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background-color: ${COLORS.WHITE};
`;
