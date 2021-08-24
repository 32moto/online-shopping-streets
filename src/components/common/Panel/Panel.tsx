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
  border-radius: 16px;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.2);
`;
