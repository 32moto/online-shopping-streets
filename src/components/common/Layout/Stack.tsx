import { FC } from 'react';
import styled from 'styled-components';

const Stack: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Stack;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
