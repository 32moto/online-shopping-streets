import storeImage from '@/assets/stores/cocoKyoto/storeImage/coco_kyoto_image.png';
import readMore from '@/assets/stores/common/item_read_more.png';
import item1 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_1.jpg';
import item2 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_2.jpeg';
import item3 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_3.jpeg';
import item4 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_4.jpeg';
import item5 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_5.jpeg';
import item6 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_6.jpeg';
import item7 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_7.jpeg';
import item8 from '@/assets/stores/cocoKyoto/itemImages/coco_kyoto_item_8.jpeg';

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
    image: item1,
  },
  {
    name: 'カカオフルーツチーズケーキ【６個入り】',
    url: 'https://shop.coco-cacao.jp/items/21174625',
    image: item2,
  },
  {
    name: 'Chocolate Terrine 抹茶',
    url: 'https://shop.coco-cacao.jp/items/13260869',
    image: item3,
  },
  {
    name: 'ＣＯＣＯチョコロールケーキ',
    url: 'https://shop.coco-cacao.jp/items/21043630',
    image: item4,
  },
  {
    name: 'シュトロイゼルガトーショコラ',
    url: 'https://shop.coco-cacao.jp/items/26977513',
    image: item5,
  },
  {
    name: 'Chocolate Terrine',
    url: 'https://shop.coco-cacao.jp/items/12387610',
    image: item6,
  },
  {
    name: '京味　詰合4種',
    url: 'https://shop.coco-cacao.jp/items/34609052',
    image: item7,
  },
  {
    name: 'Brownie【くるみ】5個入り',
    url: 'https://shop.coco-cacao.jp/items/37687166',
    image: item8,
  },
  {
    name: '',
    url: 'https://shop.coco-cacao.jp/',
    image: readMore,
  },
];

export const COCO_KYOTO = {
  name: 'COCO KYOTO',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
