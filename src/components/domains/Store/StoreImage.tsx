import { FC } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { StoreType } from '@/types/domains/store';

export const StoreImage: FC<{
  image: StoreType['image'];
  links: StoreType['links'];
}> = ({ image, links }) => {
  return (
    <Wrapper>
      <Image src={image} placeholder="blur" />
    </Wrapper>
  );
};

export default StoreImage;

const Wrapper = styled.div`
  position: relative;
  max-width: 700px;
`;
