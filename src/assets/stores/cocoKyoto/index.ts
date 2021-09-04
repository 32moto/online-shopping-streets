import storeImage from '@/assets/stores/cocoKyoto/storeImage/coco_kyoto_image.png';
import cocoKyotoItem1 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_1.jpg';
import cocoKyotoItem2 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_2.jpeg';
import cocoKyotoItem3 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_3.jpeg';
import cocoKyotoItem4 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_4.jpeg';
import cocoKyotoItem5 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_5.jpeg';
import cocoKyotoItem6 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_6.jpeg';
import cocoKyotoItem7 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_7.jpeg';
import cocoKyotoItem8 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_8.jpeg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://shop.coco-cacao.jp/',
    right: 80,
    top: 250,
  },
  {
    title: 'COCO KYOTO について',
    url: 'https://shop.coco-cacao.jp/about',
    left: 60,
    top: 290,
  },
  {
    title: 'COCO KYOTO ブログ',
    url: 'https://shop.coco-cacao.jp/blog',
    right: 170,
    bottom: 100,
  },
];

const ITEMS = [
  {
    name: '商品を購入頂く前にご確認ください',
    url: 'https://shop.coco-cacao.jp/items/27547025',
    image: cocoKyotoItem1,
  },
  {
    name: 'マドレーヌレモン6個入',
    url: 'https://shop.coco-cacao.jp/items/43468952',
    image: cocoKyotoItem2,
  },
  {
    name: 'Chocolate Terrine 抹茶',
    url: 'https://shop.coco-cacao.jp/items/13260869',
    image: cocoKyotoItem3,
  },
  {
    name: 'ＣＯＣＯチョコロールケーキ',
    url: 'https://shop.coco-cacao.jp/items/21043630',
    image: cocoKyotoItem4,
  },
  {
    name: 'シュトロイゼルガトーショコラ',
    url: 'https://shop.coco-cacao.jp/items/26977513',
    image: cocoKyotoItem5,
  },
  {
    name: 'Chocolate Terrine',
    url: 'https://shop.coco-cacao.jp/items/12387610',
    image: cocoKyotoItem6,
  },
  {
    name: '京味　詰合4種',
    url: 'https://shop.coco-cacao.jp/items/34609052',
    image: cocoKyotoItem7,
  },
  {
    name: 'Brownie【くるみ】5個入り',
    url: 'https://shop.coco-cacao.jp/items/37687166',
    image: cocoKyotoItem8,
  },
];

export const COCO_KYOTO = {
  name: 'COCO KYOTO',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
