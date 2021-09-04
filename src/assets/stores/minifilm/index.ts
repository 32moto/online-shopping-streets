import storeImage from '@/assets/stores/minifilm/storeImage/minifilm_image.png';
import readMore from '@/assets/stores/common/item_read_more.png';
import item1 from '@/assets/stores/minifilm/itemImages/minifilm_item_1.jpeg';
import item2 from '@/assets/stores/minifilm/itemImages/minifilm_item_2.jpeg';
import item3 from '@/assets/stores/minifilm/itemImages/minifilm_item_3.jpeg';
import item4 from '@/assets/stores/minifilm/itemImages/minifilm_item_4.jpeg';
import item5 from '@/assets/stores/minifilm/itemImages/minifilm_item_5.jpeg';
import item6 from '@/assets/stores/minifilm/itemImages/minifilm_item_6.jpeg';
import item7 from '@/assets/stores/minifilm/itemImages/minifilm_item_7.jpeg';
import item8 from '@/assets/stores/minifilm/itemImages/minifilm_item_8.jpeg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://minifilm.base.shop/',
    right: 80,
    top: 250,
  },
  {
    title: 'Minifilm について',
    url: 'https://minifilm.base.shop/about',
    left: 60,
    top: 300,
  },
  {
    title: 'Youtube Channel',
    url: 'https://www.youtube.com/c/TsukaTsukaMinifilm',
    right: 170,
    bottom: 100,
  },
];

const ITEMS = [
  {
    name: 'バターサンド4種詰め合わせ　8個入り　【9月限定】',
    url: 'https://minifilm.base.shop/items/51441281',
    image: item1,
  },
  {
    name: 'フロマージュキュイ【ベイクドチーズケーキ】',
    url: 'https://minifilm.base.shop/items/50523020',
    image: item2,
  },
  {
    name: 'レーズンバターサンドショコラ　6個入り',
    url: 'https://minifilm.base.shop/items/49076521',
    image: item3,
  },
  {
    name: 'ライチフランボワーズバターサンド　6個入り　【夏季限定】',
    url: 'https://minifilm.base.shop/items/47661506',
    image: item4,
  },
  {
    name: 'プラリネバターサンド ６個入り',
    url: 'https://minifilm.base.shop/items/44425982',
    image: item5,
  },
  {
    name: 'レーズンバターサンド６個入り',
    url: 'https://minifilm.base.shop/items/42136282',
    image: item6,
  },
  {
    name: 'ケークフリュイルージュ　【パウンドケーキ　ベリー】',
    url: 'https://minifilm.base.shop/items/46359130',
    image: item7,
  },
  {
    name: 'フィナンシエ 単品',
    url: 'https://minifilm.base.shop/items/43964273',
    image: item8,
  },
  {
    name: '',
    url: 'https://minifilm.base.shop/',
    image: readMore,
  },
];

export const MINIFILM = {
  name: 'Minifilm',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
