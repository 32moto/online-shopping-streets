import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import entryImage1 from '@/assets/branding/startGuide/entry1.png';
import entryImage2 from '@/assets/branding/startGuide/entry2.png';
import startImage1 from '@/assets/branding/startGuide/start1.png';
import startImage2 from '@/assets/branding/startGuide/start2.png';
import startImage3 from '@/assets/branding/startGuide/start3.png';

import MEDIA_QUERY from '@/constants/mediaQuery';

const StartGuide: FC = () => {
  return (
    <Container>
      <Title>参加申し込み・利用の流れ</Title>
      <Wrapper>
        <SubTitle>参加申し込み</SubTitle>
        <ContentWrapper>
          <ItemWrapper>
            <Image src={entryImage1} placeholder="blur" />
            <Paragraph>
              このサイトの「無料で参加申し込みする」ボタンを押した後、カレンダーでご希望の日時を選び「
              Confirm 」を押します。
            </Paragraph>
          </ItemWrapper>
          <ItemWrapper>
            <Image src={entryImage2} placeholder="blur" />
            <Paragraph>
              お名前・メールアドレス・参加予定人数を入力し、内容を確認後、「
              Schedule Event 」を押すと申し込み完了となります。
            </Paragraph>
          </ItemWrapper>
        </ContentWrapper>
      </Wrapper>
      <Wrapper>
        <SubTitle id="start_guide">利用の流れ</SubTitle>
        <ContentWrapper>
          <ItemWrapper>
            <Image src={startImage1} placeholder="blur" />
            <Paragraph>
              参加申し込み後、別途お送りするURLにアクセスしていただき、お名前（ニックネームでも問題ありません）を記入し「Continue」を押します。
            </Paragraph>
          </ItemWrapper>
          <ItemWrapper>
            <Image src={startImage2} placeholder="blur" />
            <Paragraph>
              マイク及びカメラを ON/OFF
              （左側の赤いアイコンをタップ）にして「Join Space」を押します。
            </Paragraph>
          </ItemWrapper>
          <ItemWrapper>
            <Image src={startImage3} placeholder="blur" />
            <Paragraph>
              自身のアイコンを他の参加者様のアイコンへ近づけると会話ができ、お店の名前をクリックすると、各店舗の画面が開きます。
            </Paragraph>
          </ItemWrapper>
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default StartGuide;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 20px;

  @media ${MEDIA_QUERY.SP} {
    margin: 20px;
  }
`;

const Title = styled.h2`
  font-size: 26px;
  padding: 10px 30px;
  border-bottom: 2px solid;
  margin-top: 60px;

  @media ${MEDIA_QUERY.SP} {
    font-size: 20px;
  }
`;

const Wrapper = styled.div``;

const SubTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6f6f6f;
  padding-top: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;

  @media ${MEDIA_QUERY.TABLET} {
    flex-direction: column;
  }

  @media ${MEDIA_QUERY.TABLET} {
    margin: 0;
  }
`;

const ItemWrapper = styled.div`
  width: 350px;
  margin: 20px;

  > div > img {
    border-radius: 8px;
  }

  @media ${MEDIA_QUERY.TABLET} {
    width: calc(100% - 20px);
    max-width: 500px;
    margin: 10px;
  }

  @media ${MEDIA_QUERY.SP} {
    font-size: 14px;
  }
`;

const Paragraph = styled.p``;
