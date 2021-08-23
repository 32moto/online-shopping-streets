import { FC } from 'react';

import Panel from '@/components/common/Panel/Panel';
import Stack from '@/components/common/Layout/Stack';
import LineUp from '@/components/common/Layout/LineUp';
import StoreItem from '@/components/domains/Store/StoreItem/StoreItem';

import { StoreType } from '@/types/domains/store';

const StoreItemList: FC<{ items: StoreType['items'] }> = ({ items }) => {
  return (
    <Panel>
      <Stack>
        <h2>Items</h2>
        <LineUp>
          {items.map((item, i) => (
            <StoreItem key={i} item={item} />
          ))}
        </LineUp>
      </Stack>
    </Panel>
  );
};

export default StoreItemList;
