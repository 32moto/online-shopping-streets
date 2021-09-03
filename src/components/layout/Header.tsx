import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import logo from '@/assets/common/logo.png';
import COLORS from '@/constants/colors';
import MEDIA_QUERY from '@/constants/mediaQuery';

const Header: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={logo} placeholder="blur" />
      </ImageWrapper>
      <Title>オンライン商店街</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 40px;
  box-sizing: border-box;
  background-color: ${COLORS.WHITE};
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.6);

  @media ${MEDIA_QUERY.SP} {
    padding: 0 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-left: 10px;
`;
