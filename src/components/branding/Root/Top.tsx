import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import topImage from '@/assets/branding/top.png';
import background from '@/assets/stores/store_background.png';
import COLORS from '@/constants/colors';
import MEDIA_QUERY from '@/constants/mediaQuery';

const Top: FC = () => {
  const targets = ['友達', '家族'];
  const no = Math.floor(Math.random() * targets.length);

  return (
    <Container>
      <TextWrapper>
        <Title>
          オンラインで
          <br />
          {targets[no]}と買い物に
        </Title>
        <LinkButton
          href="https://calendly.com/online-shopping-streets/sweets"
          target="_blank"
          rel="noopener noreferrer"
        >
          参加申し込みする
        </LinkButton>
      </TextWrapper>
      <ImageWrapper>
        <Image src={topImage} placeholder="blur" />
      </ImageWrapper>
    </Container>
  );
};

export default Top;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  background: linear-gradient(
      30deg,
      rgba(253, 158, 29, 0.95) 0%,
      rgba(252, 199, 69, 0.8) 60%,
      rgba(255, 254, 0, 0.95) 100%
    ),
    url(${background.src}) no-repeat scroll top / cover;

  @media ${MEDIA_QUERY.TABLET} {
    flex-direction: column-reverse;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;

  @media ${MEDIA_QUERY.TABLET} {
    margin: 20px;
    align-items: center;
  }
`;

const Title = styled.h2`
  color: ${COLORS.WHITE};
  font-size: 56px;
  margin-top: 0;

  @media ${MEDIA_QUERY.TABLET} {
    text-align: center;
    font-size: 50px;
  }

  @media ${MEDIA_QUERY.SP} {
    font-size: 40px;
  }
`;

const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  padding: 15px 40px;
  box-sizing: border-box;
  background-color: rgba(255, 56, 119, 1);
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.WHITE};
  text-decoration: none;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(222, 27, 88, 1);
  }
`;

const ImageWrapper = styled.div`
  width: 600px;
  margin: 40px;

  @media ${MEDIA_QUERY.TABLET} {
    margin-bottom: 0;
  }

  @media ${MEDIA_QUERY.SP} {
    margin-top: 0px;
    width: 90%;
  }
`;
