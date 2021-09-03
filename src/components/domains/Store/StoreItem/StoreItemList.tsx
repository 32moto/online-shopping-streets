import { FC } from 'react';

import Panel from '@/components/common/Panel/Panel';
import Stack from '@/components/common/Layout/Stack';
import LineUp from '@/components/common/Layout/LineUp';
import StoreItem from '@/components/domains/Store/StoreItem/StoreItem';

import { StoreType } from '@/types/domains/store';
import styled from 'styled-components';
import MEDIA_QUERY from '@/constants/mediaQuery';

const StoreItemList: FC<{ items: StoreType['items'] }> = ({ items }) => {
  return (
    <Wrapper>
      <Panel>
        <Stack>
          <ItemTitle>商品一覧</ItemTitle>
          <ItemWrapper>
            <LineUp>
              {items.map((item, i) => (
                <StoreItem key={i} item={item} />
              ))}
            </LineUp>
          </ItemWrapper>
        </Stack>
      </Panel>
    </Wrapper>
  );
};

export default StoreItemList;

const Wrapper = styled.div`
  margin: 30px 0 60px;

  @media ${MEDIA_QUERY.SP} {
    margin: 15px;
  }
`;

const ItemTitle = styled.h2`
  align-self: flex-start;
  margin: 10px 30px;

  @media ${MEDIA_QUERY.SP} {
    margin: 0 5px;
    font-size: 18px;
  }
`;

const ItemWrapper = styled.div`
  margin: 10px 0 20px;

  @media ${MEDIA_QUERY.SP} {
    margin: 5px 0;
  }
`;
