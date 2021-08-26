import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { STORES } from '@/assets/stores/stores';
import background from '@/assets/stores/store_background.png';

import Stack from '@/components/common/Layout/Stack';
import StoreName from '@/components/domains/Store/StoreName';
import StoreImage from '@/components/domains/Store/StoreImage';
import StoreItemList from '@/components/domains/Store/StoreItem/StoreItemList';

const Store: NextPage = () => {
  const router = useRouter();
  const storeName = router.query.storeName as string;
  const store = fetchStore(storeName);

  if (!store) return <></>;

  return (
    <Container>
      <Wrapper>
        <Stack>
          <StoreName name={store.name} />
          <StoreImage image={store.image} links={store.links} />
          <StoreItemList items={store.items} />
        </Stack>
      </Wrapper>
    </Container>
  );
};

const fetchStore = (storeName: string) => {
  return STORES[storeName];
};

export default Store;

const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 1),
      rgba(250, 250, 250, 1),
      rgba(250, 250, 250, 1)
    ),
    url(${background.src}) no-repeat scroll top / contain;
`;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
