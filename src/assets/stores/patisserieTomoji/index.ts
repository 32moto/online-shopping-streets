import storeImage from '@/assets/stores/patisserieTomoji/storeImage/patisserie_tomoji_image.png';
import patisserieTomojiItem1 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_1.jpeg';
import patisserieTomojiItem2 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_2.jpeg';
import patisserieTomojiItem3 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_3.jpeg';
import patisserieTomojiItem4 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_4.jpeg';
import patisserieTomojiItem5 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_5.jpeg';
import patisserieTomojiItem6 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_6.jpeg';
import patisserieTomojiItem7 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_7.jpeg';
import patisserieTomojiItem8 from '@/assets/stores/patisserieTomoji/itemImages/patisserie_tomoji_item_8.jpeg';

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
    image: patisserieTomojiItem1,
  },
  {
    name: '贅沢マドレーヌセット',
    url: 'https://ec.patisserie-tomoji.com/items/28018040',
    image: patisserieTomojiItem2,
  },
  {
    name: 'マドレーヌ・リュクス（4個セット）',
    url: 'https://ec.patisserie-tomoji.com/items/28297280',
    image: patisserieTomojiItem3,
  },
  {
    name: '塩マドレーヌ（4個セット）',
    url: 'https://ec.patisserie-tomoji.com/items/28297321',
    image: patisserieTomojiItem4,
  },
  {
    name: 'Tomoji焼き菓子アソート',
    url: 'https://ec.patisserie-tomoji.com/items/28297200',
    image: patisserieTomojiItem5,
  },
  {
    name: '焼菓子詰め合わせA　(小)',
    url: 'https://ec.patisserie-tomoji.com/items/27789596',
    image: patisserieTomojiItem6,
  },
  {
    name: 'ケーク・フリュイ',
    url: 'https://ec.patisserie-tomoji.com/items/28018095',
    image: patisserieTomojiItem7,
  },
  {
    name: 'テリーヌ・ショコラ',
    url: 'https://ec.patisserie-tomoji.com/items/28018134',
    image: patisserieTomojiItem8,
  },
];

export const PATISSERIE_TOMOJI = {
  name: 'Patisserie Tomoji',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
