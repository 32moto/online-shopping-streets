import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import inStore from '@/assets/branding/in_store.png';
import MEDIA_QUERY from '@/constants/mediaQuery';

const Recommend: FC = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>こんな方にオススメ！</Title>
        <Ul>
          <Li>最近友達と買い物に行けていない</Li>
          <Li>家族と離れて暮らしている</Li>
          <Li>子育て等、お家のことで中々買い物に行けない</Li>
          <Li>コロナ禍により外出を自粛している</Li>
        </Ul>
      </TextWrapper>
      <ImageWrapper>
        <Image src={inStore} placeholder="blur" />
      </ImageWrapper>
    </Container>
  );
};

export default Recommend;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 30px;

  @media ${MEDIA_QUERY.SP} {
    flex-direction: column-reverse;
    margin: 30px 20px;
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

const Ul = styled.ul`
  font-size: 18px;

  @media ${MEDIA_QUERY.SP} {
    font-size: 14px;
    padding-left: 15px;
  }
`;

const Li = styled.li`
  margin: 10px;

  @media ${MEDIA_QUERY.SP} {
    margin: 5px;
  }
`;
