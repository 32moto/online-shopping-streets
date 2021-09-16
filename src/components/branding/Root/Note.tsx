import { FC } from 'react';
import styled from 'styled-components';

import MEDIA_QUERY from '@/constants/mediaQuery';

const Note: FC = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>注意事項</Title>
        <Ul>
          <Li>本イベントは予約制（50分）となっております。</Li>
          <Li>
            イベントの参加費用はかかりませんが、オンラインストアでのご購入はお客様負担となります。（商店街での購入は必須ではございませんので、気に入った商品がございましたらご購入ください）
          </Li>
          <Li>複数名で参加する場合、代表者様の名前でお申し込みください。</Li>
          <Li>
            ご利用に当たり、対応しているブラウザ・端末は
            <a
              href="https://help.spatial.chat/hc/ja/articles/360017769780-%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%AE%E3%83%AA%E3%82%B9%E3%83%88"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
            をご覧ください。
          </Li>
          <Li>
            プレゼントキャンペーンの申し込み方法は別途ご案内させていただきます。
          </Li>
        </Ul>
      </TextWrapper>
    </Container>
  );
};

export default Note;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 750px;
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
