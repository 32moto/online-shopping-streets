import storeImage from '@/assets/stores/minifilm/storeImage/minifilm_image.png';
import minifilm1 from '@/assets/stores/minifilm/itemImages/minifilm_1.jpeg';
import minifilm2 from '@/assets/stores/minifilm/itemImages/minifilm_2.jpeg';
import minifilm3 from '@/assets/stores/minifilm/itemImages/minifilm_3.jpeg';
import minifilm4 from '@/assets/stores/minifilm/itemImages/minifilm_4.jpeg';
import minifilm5 from '@/assets/stores/minifilm/itemImages/minifilm_5.jpeg';
import minifilm6 from '@/assets/stores/minifilm/itemImages/minifilm_6.jpeg';
import minifilm7 from '@/assets/stores/minifilm/itemImages/minifilm_7.jpeg';
import minifilm8 from '@/assets/stores/minifilm/itemImages/minifilm_8.jpeg';

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
    bottom: 150,
  },
];

const ITEMS = [
  {
    name: 'バターサンド4種詰め合わせ　8個入り　【9月限定】',
    url: 'https://minifilm.base.shop/items/51441281',
    image: minifilm1,
  },
  {
    name: 'フロマージュキュイ【ベイクドチーズケーキ】',
    url: 'https://minifilm.base.shop/items/50523020',
    image: minifilm2,
  },
  {
    name: 'レーズンバターサンドショコラ　6個入り',
    url: 'https://minifilm.base.shop/items/49076521',
    image: minifilm3,
  },
  {
    name: 'ライチフランボワーズバターサンド　6個入り　【夏季限定】',
    url: 'https://minifilm.base.shop/items/47661506',
    image: minifilm4,
  },
  {
    name: 'プラリネバターサンド ６個入り',
    url: 'https://minifilm.base.shop/items/44425982',
    image: minifilm5,
  },
  {
    name: 'レーズンバターサンド６個入り',
    url: 'https://minifilm.base.shop/items/42136282',
    image: minifilm6,
  },
  {
    name: 'ケークフリュイルージュ　【パウンドケーキ　ベリー】',
    url: 'https://minifilm.base.shop/items/46359130',
    image: minifilm7,
  },
  {
    name: 'フィナンシエ 単品',
    url: 'https://minifilm.base.shop/items/43964273',
    image: minifilm8,
  },
];

export const MINIFILM = {
  name: 'Minifilm',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
