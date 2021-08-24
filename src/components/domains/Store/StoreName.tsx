import { FC } from 'react';
import styled from 'styled-components';

import { StoreType } from '@/types/domains/store';
import MEDIA_QUERY from '@/constants/mediaQuery';

export const StoreName: FC<{ name: StoreType['name'] }> = ({ name }) => {
  return <Wrapper>{name}</Wrapper>;
};

export default StoreName;

const Wrapper = styled.h2`
  display: flex;
  justify-content: center;
  width: 200px;
  border-bottom: 2px solid;
  margin: 50px 0 20px;

  @media ${MEDIA_QUERY.SP} {
    margin: 20px 0;
    font-size: 20px;
  }
`;
