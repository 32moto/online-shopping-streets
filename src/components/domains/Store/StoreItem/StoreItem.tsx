import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { StoreItemType } from '@/types/domains/store';

const StoreItem: FC<{ item: StoreItemType }> = ({ item }) => {
  return (
    <Link href={item.url} target="_blank" rel="noopener noreferrer">
      <Image src={item.image} alt={item.name} placeholder="blur" />
    </Link>
  );
};

export default StoreItem;

const Link = styled.a`
  display: flex;
  width: 30%;
  height: 30%;
  margin: 5px;
`;
