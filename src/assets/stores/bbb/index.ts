import storeImage from '@/assets/stores/bbb/storeImage/bbb_image.png';
import readMore from '@/assets/stores/common/item_read_more.png';
import item1 from '@/assets/stores/bbb/itemImages/bbb_item_1.jpeg';
import item2 from '@/assets/stores/bbb/itemImages/bbb_item_2.jpeg';
import item3 from '@/assets/stores/bbb/itemImages/bbb_item_3.jpeg';
import item4 from '@/assets/stores/bbb/itemImages/bbb_item_4.jpeg';
import item5 from '@/assets/stores/bbb/itemImages/bbb_item_5.jpeg';
import item6 from '@/assets/stores/bbb/itemImages/bbb_item_6.jpeg';
import item9 from '@/assets/stores/bbb/itemImages/bbb_item_9.jpeg';
import item10 from '@/assets/stores/bbb/itemImages/bbb_item_10.jpeg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://buttersand-bbb.com/',
    right: 80,
    top: 180,
  },
  {
    title: 'B.B.B. コンセプト',
    url: 'https://buttersand-bbb.com/pages/concept',
    left: 60,
    top: 220,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/buttersand.bbb/',
    right: 200,
    bottom: 150,
  },
];

const ITEMS = [
  {
    name: '北海道発酵バターサンド B.B.B.セット［3個入り］',
    url: 'https://buttersand-bbb.com/products/%E5%8C%97%E6%B5%B7%E9%81%93%E7%99%BA%E9%85%B5%E3%83%90%E3%82%BF%E3%83%BC%E3%82%B5%E3%83%B3%E3%83%89-b-b-b-%E3%82%BB%E3%83%83%E3%83%88-3%E5%80%8B%E5%85%A5%E3%82%8A',
    image: item9,
  },
  {
    name: '北海道発酵バターサンド フレーバーセット［3種入り］',
    url: 'https://buttersand-bbb.com/products/%E5%8C%97%E6%B5%B7%E9%81%93%E7%99%BA%E9%85%B5%E3%83%90%E3%82%BF%E3%83%BC%E3%82%B5%E3%83%B3%E3%83%89-%E3%83%95%E3%83%AC%E3%83%BC%E3%83%90%E3%83%BC%E3%82%BB%E3%83%83%E3%83%88-3%E7%A8%AE%E5%85%A5%E3%82%8A',
    image: item10,
  },
  {
    name: '【季節限定】すいか',
    url: 'https://buttersand-bbb.com/products/b-b-b-%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC-1',
    image: item1,
  },
  {
    name: '【季節限定】シャイニングパイン',
    url: 'https://buttersand-bbb.com/products/b-b-b-%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC',
    image: item2,
  },
  {
    name: 'B.B.B.',
    url: 'https://buttersand-bbb.com/products/b-b-b',
    image: item3,
  },
  {
    name: 'ピュアヨーグルト',
    url: 'https://buttersand-bbb.com/products/%E3%83%94%E3%83%A5%E3%82%A2%E3%83%A8%E3%83%BC%E3%82%B0%E3%83%AB%E3%83%88',
    image: item4,
  },
  {
    name: 'Wレモン',
    url: 'https://buttersand-bbb.com/products/w%E3%83%AC%E3%83%A2%E3%83%B3',
    image: item5,
  },
  {
    name: 'Wチョコレート',
    url: 'https://buttersand-bbb.com/products/w%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88',
    image: item6,
  },
  {
    name: '',
    url: 'https://buttersand-bbb.com/',
    image: readMore,
  },
];

export const BBB = {
  name: '北海道発酵バターサンド専門店 B.B.B.',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
