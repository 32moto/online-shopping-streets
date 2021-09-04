import storeImage from '@/assets/stores/minifilm/storeImage/minifilm_image.png';
import minifilmItem1 from '@/assets/stores/minifilm/itemImages/minifilm_item_1.jpeg';
import minifilmItem2 from '@/assets/stores/minifilm/itemImages/minifilm_item_2.jpeg';
import minifilmItem3 from '@/assets/stores/minifilm/itemImages/minifilm_item_3.jpeg';
import minifilmItem4 from '@/assets/stores/minifilm/itemImages/minifilm_item_4.jpeg';
import minifilmItem5 from '@/assets/stores/minifilm/itemImages/minifilm_item_5.jpeg';
import minifilmItem6 from '@/assets/stores/minifilm/itemImages/minifilm_item_6.jpeg';
import minifilmItem7 from '@/assets/stores/minifilm/itemImages/minifilm_item_7.jpeg';
import minifilmItem8 from '@/assets/stores/minifilm/itemImages/minifilm_item_8.jpeg';

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
    image: minifilmItem1,
  },
  {
    name: 'フロマージュキュイ【ベイクドチーズケーキ】',
    url: 'https://minifilm.base.shop/items/50523020',
    image: minifilmItem2,
  },
  {
    name: 'レーズンバターサンドショコラ　6個入り',
    url: 'https://minifilm.base.shop/items/49076521',
    image: minifilmItem3,
  },
  {
    name: 'ライチフランボワーズバターサンド　6個入り　【夏季限定】',
    url: 'https://minifilm.base.shop/items/47661506',
    image: minifilmItem4,
  },
  {
    name: 'プラリネバターサンド ６個入り',
    url: 'https://minifilm.base.shop/items/44425982',
    image: minifilmItem5,
  },
  {
    name: 'レーズンバターサンド６個入り',
    url: 'https://minifilm.base.shop/items/42136282',
    image: minifilmItem6,
  },
  {
    name: 'ケークフリュイルージュ　【パウンドケーキ　ベリー】',
    url: 'https://minifilm.base.shop/items/46359130',
    image: minifilmItem7,
  },
  {
    name: 'フィナンシエ 単品',
    url: 'https://minifilm.base.shop/items/43964273',
    image: minifilmItem8,
  },
];

export const AND_OIMO_TOKYO = {
  name: '& OIMO TOKYO',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
