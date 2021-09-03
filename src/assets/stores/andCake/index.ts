import storeImage from '@/assets/stores/andCake/storeImage/and_cake_image.png';
import andCakeItem1 from '@/assets/stores/andCake/itemImages/and_cake_item_1.jpeg';
import andCakeItem2 from '@/assets/stores/andCake/itemImages/and_cake_item_2.jpeg';
import andCakeItem3 from '@/assets/stores/andCake/itemImages/and_cake_item_3.jpeg';
import andCakeItem4 from '@/assets/stores/andCake/itemImages/and_cake_item_4.jpeg';
import andCakeItem5 from '@/assets/stores/andCake/itemImages/and_cake_item_5.jpeg';
import andCakeItem6 from '@/assets/stores/andCake/itemImages/and_cake_item_6.jpeg';
import andCakeItem7 from '@/assets/stores/andCake/itemImages/and_cake_item_7.jpeg';

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
    name: 'ショートケーキ ４Ｐ',
    url: 'http://andcake.jp/view/item/000000000023',
    image: andCakeItem1,
  },
  {
    name: 'ショートケーキ 大サイズ / 21.5cm / 6～7名用',
    url: 'http://andcake.jp/view/item/000000000003',
    image: andCakeItem2,
  },
  {
    name: 'ショートケーキ 小サイズ / 18.5cm / 4～5名用',
    url: 'http://andcake.jp/view/item/000000000001',
    image: andCakeItem3,
  },
  {
    name: 'チーズケーキ 三ヶ日みかん',
    url: 'http://andcake.jp/view/item/000000000002',
    image: andCakeItem4,
  },
  {
    name: 'マカロン １０Ｐ',
    url: 'http://andcake.jp/view/item/000000000008',
    image: andCakeItem5,
  },
  {
    name: 'マカロン ５Ｐ［ニュイ］',
    url: 'http://andcake.jp/view/item/000000000007',
    image: andCakeItem6,
  },
  {
    name: 'マカロン ５Ｐ［ミディ］',
    url: 'http://andcake.jp/view/item/000000000006',
    image: andCakeItem7,
  },
  // {
  //   name: 'テリーヌ ショコラ クラシック',
  //   url: 'http://andcake.jp/view/item/000000000016',
  //   image: andCakeItem8,
  // },
];

export const AND_CAKE = {
  name: 'AND CAKE',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
