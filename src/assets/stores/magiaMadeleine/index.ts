import storeImage from '@/assets/stores/magiaMadeleine/storeImage/magia_madeleine_image.png';
import readMore from '@/assets/stores/common/item_read_more.png';
import item1 from '@/assets/stores/magiaMadeleine/itemImages/magia_madeleine_item_1.jpg';
import item2 from '@/assets/stores/magiaMadeleine/itemImages/magia_madeleine_item_2.jpg';
import item3 from '@/assets/stores/magiaMadeleine/itemImages/magia_madeleine_item_3.jpg';
import item4 from '@/assets/stores/magiaMadeleine/itemImages/magia_madeleine_item_4.jpg';
import item5 from '@/assets/stores/magiaMadeleine/itemImages/magia_madeleine_item_5.jpg';
import item6 from '@/assets/stores/magiaMadeleine/itemImages/magia_madeleine_item_6.jpg';
import item7 from '@/assets/stores/magiaMadeleine/itemImages/magia_madeleine_item_7.jpg';
import item8 from '@/assets/stores/magiaMadeleine/itemImages/magia_madeleine_item_8.jpg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://onlineshop.itc-magia.com/',
    right: 80,
    top: 280,
  },
  {
    title: 'マギーア マドレーヌ について',
    url: 'https://onlineshop.itc-magia.com/about',
    left: 60,
    top: 330,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/magia_madeleine',
    right: 170,
    bottom: 80,
  },
];

const ITEMS = [
  {
    name: '8種類セット',
    url: 'https://onlineshop.itc-magia.com/items/15172219',
    image: item1,
  },
  {
    name: 'マドレーヌ エクストラバニラ',
    url: 'https://onlineshop.itc-magia.com/items/17068239',
    image: item2,
  },
  {
    name: 'マドレーヌ ショコラ',
    url: 'https://onlineshop.itc-magia.com/items/17068219',
    image: item3,
  },
  {
    name: 'マドレーヌ プレーン',
    url: 'https://onlineshop.itc-magia.com/items/31821046',
    image: item4,
  },
  {
    name: 'マドレーヌ レモン',
    url: 'https://onlineshop.itc-magia.com/items/25785363',
    image: item5,
  },
  {
    name: 'マドレーヌ ミックスフルーツ',
    url: 'https://onlineshop.itc-magia.com/items/44780325',
    image: item6,
  },
  {
    name: 'マドレーヌ コーヒー',
    url: 'https://onlineshop.itc-magia.com/items/28971042',
    image: item7,
  },
  {
    name: 'マドレーヌ ラムレーズン',
    url: 'https://onlineshop.itc-magia.com/items/17068231',
    image: item8,
  },
  {
    name: '',
    url: 'https://onlineshop.itc-magia.com/',
    image: readMore,
  },
];

export const MAGIA_MADELEINE = {
  name: 'マギーア マドレーヌ',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
