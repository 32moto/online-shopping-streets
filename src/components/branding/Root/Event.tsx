import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import eventImage from '@/assets/branding/2021092526_logo.png';
import MEDIA_QUERY from '@/constants/mediaQuery';
import COLORS from '@/constants/colors';

const Event: FC = () => {
  return (
    <Container>
      <Title>今後の開催予定</Title>
      <Ul>
        <Li>
          <ImageWrapper>
            <Image src={eventImage} placeholder="blur" />
          </ImageWrapper>
          <TextWrapper>
            <EventTitle>お取り寄せスイーツが集まる オンライン商店街</EventTitle>
            <DescriptionWrapper>
              <Date>開催日時：2021/9/25(土)、26(日) 12:00 〜 24:00</Date>
              <CampaignWrapper>
                <CampaignTitle>プレゼントキャンペーン</CampaignTitle>
                <CampaignDescription>
                  今回のオンライン商店街経由でお買い物をすると、
                  抽選で10組の方に Amazon ギフト券(1,000円)をプレゼント！
                </CampaignDescription>
              </CampaignWrapper>
            </DescriptionWrapper>
          </TextWrapper>
        </Li>
      </Ul>
      <LinkButton
        href="https://calendly.com/online-shopping-streets/sweets"
        target="_blank"
        rel="noopener noreferrer"
      >
        無料で参加申し込みする
      </LinkButton>
    </Container>
  );
};

export default Event;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  list-style: none;
  margin: 10px 0 20px;
  padding: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: center;

  @media ${MEDIA_QUERY.SP} {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 170px;
  margin: 20px;

  > div > img {
    border-radius: 6px;
  }

  @media ${MEDIA_QUERY.SP} {
    margin: 10px;
  }
`;

const TextWrapper = styled.div`
  margin: 20px;

  @media ${MEDIA_QUERY.SP} {
    margin: 0 20px;
  }
`;

const EventTitle = styled.h3`
  font-size: 24px;
  margin: 0;

  @media ${MEDIA_QUERY.SP} {
    font-size: 20px;
  }
`;

const DescriptionWrapper = styled.div`
  margin: 5px 0;
  max-width: 510px;
`;

const Date = styled.p`
  margin: 0;
  font-weight: bold;

  @media ${MEDIA_QUERY.SP} {
    font-size: 15px;
  }
`;

const CampaignWrapper = styled.div`
  margin: 10px 0;
  border: 3px solid #f7931e;
  border-radius: 12px;
`;

const CampaignTitle = styled.h4`
  margin: 0;
  background-color: #f7931e;
  border-radius: 8px 8px 0 0;
  padding: 3px 10px;
  color: ${COLORS.WHITE};

  @media ${MEDIA_QUERY.SP} {
    font-size: 16px;
  }
`;

const CampaignDescription = styled.p`
  margin: 0;
  padding: 10px;

  @media ${MEDIA_QUERY.SP} {
    font-size: 14px;
  }
`;

const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
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
