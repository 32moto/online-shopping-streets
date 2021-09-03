import storeImage from '@/assets/stores/bbb/storeImage/bbb_image.png';
import bbbItem1 from '@/assets/stores/bbb/itemImages/bbb_item_1.jpeg';
import bbbItem2 from '@/assets/stores/bbb/itemImages/bbb_item_2.jpeg';
import bbbItem3 from '@/assets/stores/bbb/itemImages/bbb_item_3.jpeg';
import bbbItem4 from '@/assets/stores/bbb/itemImages/bbb_item_4.jpeg';
import bbbItem5 from '@/assets/stores/bbb/itemImages/bbb_item_5.jpeg';
import bbbItem6 from '@/assets/stores/bbb/itemImages/bbb_item_6.jpeg';
import bbbItem7 from '@/assets/stores/bbb/itemImages/bbb_item_7.jpeg';
import bbbItem8 from '@/assets/stores/bbb/itemImages/bbb_item_8.jpeg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://buttersand-bbb.com/',
    right: 80,
    top: 250,
  },
  {
    title: 'B.B.B. コンセプト',
    url: 'https://buttersand-bbb.com/pages/concept',
    left: 60,
    top: 300,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/buttersand.bbb/',
    right: 170,
    bottom: 120,
  },
];

const ITEMS = [
  {
    name: '【季節限定】すいか',
    url: 'https://buttersand-bbb.com/products/b-b-b-%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC-1',
    image: bbbItem1,
  },
  {
    name: '【季節限定】シャイニングパイン',
    url: 'https://buttersand-bbb.com/products/b-b-b-%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC',
    image: bbbItem2,
  },
  {
    name: 'B.B.B.',
    url: 'https://buttersand-bbb.com/products/b-b-b',
    image: bbbItem3,
  },
  {
    name: 'ピュアヨーグルト',
    url: 'https://buttersand-bbb.com/products/%E3%83%94%E3%83%A5%E3%82%A2%E3%83%A8%E3%83%BC%E3%82%B0%E3%83%AB%E3%83%88',
    image: bbbItem4,
  },
  {
    name: 'Wレモン',
    url: 'https://buttersand-bbb.com/products/w%E3%83%AC%E3%83%A2%E3%83%B3',
    image: bbbItem5,
  },
  {
    name: 'Wチョコレート',
    url: 'https://buttersand-bbb.com/products/w%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88',
    image: bbbItem6,
  },
  {
    name: 'レーズン',
    url: 'https://buttersand-bbb.com/products/%E3%83%AC%E3%83%BC%E3%82%BA%E3%83%B3',
    image: bbbItem7,
  },
  {
    name: 'プリンセスストロベリー',
    url: 'https://buttersand-bbb.com/products/%E3%83%97%E3%83%AA%E3%83%B3%E3%82%BB%E3%82%B9%E3%82%B9%E3%83%88%E3%83%AD%E3%83%99%E3%83%AA%E3%83%BC',
    image: bbbItem8,
  },
];

export const BBB = {
  name: '北海道発酵バターサンド専門店 B.B.B.',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
