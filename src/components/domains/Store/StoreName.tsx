import { FC } from 'react';
import styled from 'styled-components';

import { StoreType } from '@/types/domains/store';

export const StoreName: FC<{ name: StoreType['name'] }> = ({ name }) => {
  return <Wrapper>{name}</Wrapper>;
};

export default StoreName;

const Wrapper = styled.h2`
  display: flex;
  justify-content: center;
  width: 200px;
  border-bottom: 2px solid;
`;
