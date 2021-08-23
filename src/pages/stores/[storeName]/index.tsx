import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Stack from '@/components/common/Layout/Stack';
import StoreName from '@/components/domains/Store/StoreName';
import StoreImage from '@/components/domains/Store/StoreImage';
import StoreItemList from '@/components/domains/Store/StoreItem/StoreItemList';
import { STORES } from '@/assets/stores';
import styled from 'styled-components';

const Store: NextPage = () => {
  const router = useRouter();
  const storeName = router.query.storeName as string;
  const store = fetchStore(storeName);

  if (!store) return <>loading...</>;

  return (
    <Wrapper>
      <Stack>
        <StoreName name={store.name} />
        <StoreImage image={store.image} links={store.links} />
        <StoreItemList items={store.items} />
      </Stack>
    </Wrapper>
  );
};

const fetchStore = (storeName: string) => {
  return STORES[storeName];
};

export default Store;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
