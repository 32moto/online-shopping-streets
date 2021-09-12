import { FC } from 'react';
import styled from 'styled-components';
import COLORS from '@/constants/colors';
import MEDIA_QUERY from '@/constants/mediaQuery';

const Footer: FC = () => {
  return <Container>© 2021 online shopping streets</Container>;
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  padding: 0 40px;
  box-sizing: border-box;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);
  font-size: 14px;

  @media ${MEDIA_QUERY.SP} {
    padding: 0 20px;
  }
`;
