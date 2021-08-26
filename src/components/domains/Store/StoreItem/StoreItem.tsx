import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { StoreItemType } from '@/types/domains/store';
import COLORS from '@/constants/colors';
import MEDIA_QUERY from '@/constants/mediaQuery';

const StoreItem: FC<{ item: StoreItemType }> = ({ item }) => {
  return (
    <Link href={item.url} target="_blank" rel="noopener noreferrer">
      <Image src={item.image} alt={item.name} placeholder="blur" />
      <Mask>
        <Name>{item.name}</Name>
      </Mask>
    </Link>
  );
};

export default StoreItem;

const Link = styled.a`
  position: relative;
  display: flex;
  width: 30%;
  height: 30%;
  margin: 5px;
`;

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  font-size: 14px;
  color: ${COLORS.WHITE};
  word-break: break-all;

  @media ${MEDIA_QUERY.SP} {
    font-size: 11px;
    padding: 10px;
  }
`;
