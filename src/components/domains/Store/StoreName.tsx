import { FC } from 'react';
import styled from 'styled-components';

import { StoreType } from '@/types/domains/store';
import MEDIA_QUERY from '@/constants/mediaQuery';
import COLORS from '@/constants/colors';

export const StoreName: FC<{ name: StoreType['name'] }> = ({ name }) => {
  return <Wrapper>{name}</Wrapper>;
};

export default StoreName;

const Wrapper = styled.h2`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${COLORS.BORDER_BASE};
  padding: 10px 50px;
  box-sizing: border-box;
  margin: 50px 0 20px;

  @media ${MEDIA_QUERY.SP} {
    margin: 20px 0;
    font-size: 20px;
  }
`;
