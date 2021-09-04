import storeImage from '@/assets/stores/patisserieTomoji/storeImage/patisserie_tomoji_image.png';
import item1 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_1.jpeg';
import item2 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_2.jpeg';
import item3 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_3.jpeg';
import item4 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_4.jpeg';
import item5 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_5.jpeg';
import item6 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_6.jpeg';
import item7 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_7.jpeg';
import item8 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_8.jpeg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://ec.patisserie-tomoji.com/',
    right: 80,
    top: 280,
  },
  {
    title: 'Patisserie Tomoji について',
    url: 'https://www.patisserie-tomoji.com/about/',
    left: 60,
    top: 340,
  },
  {
    title: '公式サイトへ',
    url: 'https://www.patisserie-tomoji.com/',
    right: 150,
    bottom: 120,
  },
];

const ITEMS = [
  {
    name: 'ふわとろスフレチーズケーキ',
    url: 'https://ec.patisserie-tomoji.com/items/29407741',
    image: item1,
  },
  {
    name: '贅沢マドレーヌセット',
    url: 'https://ec.patisserie-tomoji.com/items/28018040',
    image: item2,
  },
  {
    name: 'マドレーヌ・リュクス（4個セット）',
    url: 'https://ec.patisserie-tomoji.com/items/28297280',
    image: item3,
  },
  {
    name: '塩マドレーヌ（4個セット）',
    url: 'https://ec.patisserie-tomoji.com/items/28297321',
    image: item4,
  },
  {
    name: 'Tomoji焼き菓子アソート',
    url: 'https://ec.patisserie-tomoji.com/items/28297200',
    image: item5,
  },
  {
    name: '焼菓子詰め合わせA　(小)',
    url: 'https://ec.patisserie-tomoji.com/items/27789596',
    image: item6,
  },
  {
    name: 'ケーク・フリュイ',
    url: 'https://ec.patisserie-tomoji.com/items/28018095',
    image: item7,
  },
  {
    name: 'テリーヌ・ショコラ',
    url: 'https://ec.patisserie-tomoji.com/items/28018134',
    image: item8,
  },
];

export const PATISSERIE_TOMOJI = {
  name: 'Patisserie Tomoji',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
