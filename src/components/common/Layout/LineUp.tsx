import { FC } from 'react';
import styled from 'styled-components';

const LineUp: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default LineUp;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &::after {
    content: '';
    display: block;
    width: 30%;
    height: 0;
    margin: 5px;
  }
`;
