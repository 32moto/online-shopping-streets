import { FC } from 'react';
import styled from 'styled-components';

const Header: FC = () => {
  return <Wrapper>オンライン商店街</Wrapper>;
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
`;
