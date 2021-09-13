import { FC } from 'react';
import styled from 'styled-components';
import MEDIA_QUERY from '@/constants/mediaQuery';

const Contact: FC = () => {
  return (
    <Container>
      <Title>お問い合わせ</Title>
      <Description>
        不明な点ございましたら
        <br />
        <MailLink href="mailto:online.shopping.streets@gmail.com">
          online.shopping.streets@gmail.com
        </MailLink>
        <br />
        までご連絡ください。
      </Description>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 20px;

  @media ${MEDIA_QUERY.SP} {
    margin: 40px 20px;
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

const Description = styled.div`
  margin: 30px;
  text-align: center;
  line-height: 2;

  @media ${MEDIA_QUERY.SP} {
    margin: 20px;
    font-size: 14px;
  }
`;

const MailLink = styled.a`
  margin: 5px;
`;
