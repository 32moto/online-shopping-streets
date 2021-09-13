import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import explain from '@/assets/branding/explain.png';
import MEDIA_QUERY from '@/constants/mediaQuery';

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
          <br />
          <br />
          参加費無料で１時間程のイベントなので気軽にご参加ください！
          （※オンラインストアでの買い物はお客様負担となります）
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

  @media ${MEDIA_QUERY.SP} {
    margin: 30px 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 40px;

  @media ${MEDIA_QUERY.SP} {
    width: 100%;
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 40px;

  @media ${MEDIA_QUERY.SP} {
    width: 100%;
    margin: 0;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  padding: 10px 30px;
  border-bottom: 2px solid;

  @media ${MEDIA_QUERY.SP} {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  word-break: break-all;

  @media ${MEDIA_QUERY.SP} {
    font-size: 14px;
  }
`;
