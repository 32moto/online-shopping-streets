import storeImage from '@/assets/stores/andCake/storeImage/and_cake_image.png';
import item1 from '@/assets/stores/andCake/itemImages/and_cake_item_1.jpeg';
import item2 from '@/assets/stores/andCake/itemImages/and_cake_item_2.jpeg';
import item3 from '@/assets/stores/andCake/itemImages/and_cake_item_3.jpeg';
import item4 from '@/assets/stores/andCake/itemImages/and_cake_item_4.jpeg';
import item5 from '@/assets/stores/andCake/itemImages/and_cake_item_5.jpeg';
import item6 from '@/assets/stores/andCake/itemImages/and_cake_item_6.jpeg';
import item7 from '@/assets/stores/andCake/itemImages/and_cake_item_7.jpeg';
import item8 from '@/assets/stores/andCake/itemImages/and_cake_item_8.jpeg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'http://andcake.jp/',
    right: 80,
    top: 250,
  },
  {
    title: 'AND CAKE について',
    url: 'http://andcake.jp/view/company',
    left: 60,
    top: 300,
  },
  {
    title: 'NEWS お知らせ',
    url: 'http://andcake.jp/view/news/list',
    right: 170,
    bottom: 120,
  },
];

const ITEMS = [
  {
    name: '【期間限定】ケーク オ マロン',
    url: 'http://andcake.jp/view/item/000000000032',
    image: item8,
  },
  {
    name: 'ショートケーキ ４Ｐ',
    url: 'http://andcake.jp/view/item/000000000023',
    image: item1,
  },
  {
    name: 'ショートケーキ 大サイズ / 21.5cm / 6～7名用',
    url: 'http://andcake.jp/view/item/000000000003',
    image: item2,
  },
  {
    name: 'ショートケーキ 小サイズ / 18.5cm / 4～5名用',
    url: 'http://andcake.jp/view/item/000000000001',
    image: item3,
  },
  {
    name: 'チーズケーキ 三ヶ日みかん',
    url: 'http://andcake.jp/view/item/000000000002',
    image: item4,
  },
  {
    name: 'マカロン １０Ｐ',
    url: 'http://andcake.jp/view/item/000000000008',
    image: item5,
  },
  {
    name: 'マカロン ５Ｐ［ニュイ］',
    url: 'http://andcake.jp/view/item/000000000007',
    image: item6,
  },
  {
    name: 'マカロン ５Ｐ［ミディ］',
    url: 'http://andcake.jp/view/item/000000000006',
    image: item7,
  },
];

export const AND_CAKE = {
  name: 'AND CAKE',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
