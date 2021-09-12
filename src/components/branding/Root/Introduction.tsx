import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import explain from '@/assets/branding/explain.png';

const Introduction: FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={explain} placeholder="blur" />
      </ImageWrapper>
      <TextWrapper>
        <Title>オンライン商店街とは？</Title>
        <Paragraph>
          オンライン商店街 とは Spatial Chat
          (https://spatial.chat)というオンラインのビデオ通話サービスを利用して、
          お客様が家族・友人とコミュニケーションを取りながらオンラインストアで買い物ができるイベントになります。
        </Paragraph>
      </TextWrapper>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 30px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 560px;
  margin: 40px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 560px;
  margin: 40px;
`;

const Title = styled.h2`
  font-size: 30px;
  padding: 10px 30px;
  border-bottom: 2px solid;
`;

const Paragraph = styled.p`
  font-size: 20px;
`;
