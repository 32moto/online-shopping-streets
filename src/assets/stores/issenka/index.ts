import storeImage from '@/assets/stores/issenka/storeImage/issenka_image.png';
import readMore from '@/assets/stores/common/item_read_more.png';
import item1 from '@/assets/stores/issenka/itemImages/issenka_item_1.jpeg';
import item2 from '@/assets/stores/issenka/itemImages/issenka_item_2.jpeg';
import item3 from '@/assets/stores/issenka/itemImages/issenka_item_3.jpeg';
import item4 from '@/assets/stores/issenka/itemImages/issenka_item_4.jpeg';
import item5 from '@/assets/stores/issenka/itemImages/issenka_item_5.jpeg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://issenka.com/',
    right: 80,
    top: 300,
  },
  {
    title: 'ISSENKA について',
    url: 'https://issenka.com/pages/issenka%E3%81%AE%E6%83%B3%E3%81%84',
    left: 60,
    top: 250,
  },
  {
    title: 'News ニュース',
    url: 'https://issenka.com/pages/news',
    right: 200,
    bottom: 120,
  },
];

const ITEMS = [
  {
    name: '柳緑花紅【抹茶・ほうじ茶テリーヌショコラ】8個 詰め合わせ 化粧箱',
    url: 'https://issenka.com/products/%E3%83%86%E3%83%AA%E3%83%BC%E3%83%8C%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%A9-4%E7%A8%AE%E8%A9%B0%E3%82%81%E5%90%88%E3%82%8F%E3%81%9B-8%E5%80%8B-%E5%8C%96%E7%B2%A7%E7%AE%B1%E3%81%AE%E3%82%B3%E3%83%94%E3%83%BC',
    image: item1,
  },
  {
    name: '柳緑【抹茶テリーヌショコラ】8個 化粧箱',
    url: 'https://issenka.com/products/%E6%9F%B3%E7%B7%91%E3%83%86%E3%83%AA%E3%83%BC%E3%83%8C%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%A9-4%E7%A8%AE%E8%A9%B0%E3%82%81%E5%90%88%E3%82%8F%E3%81%9B-8%E5%80%8B-%E5%8C%96%E7%B2%A7%E7%AE%B1',
    image: item2,
  },
  {
    name: '柳緑【抹茶テリーヌショコラ】4個 簡易包装',
    url: 'https://issenka.com/products/%E6%9F%B3%E7%B7%91%E3%83%86%E3%83%AA%E3%83%BC%E3%83%8C%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%A9-4%E7%A8%AE%E8%A9%B0%E3%82%81%E5%90%88%E3%82%8F%E3%81%9B-4%E5%80%8B-%E7%B0%A1%E6%98%93%E5%8C%85%E8%A3%85',
    image: item3,
  },
  {
    name: '花紅【ほうじ茶テリーヌショコラ】8個 化粧箱',
    url: 'https://issenka.com/products/%E8%8A%B1%E7%B4%85%E3%83%86%E3%83%AA%E3%83%BC%E3%83%8C%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%A9-2%E7%A8%AE%E8%A9%B0%E3%82%81%E5%90%88%E3%82%8F%E3%81%9B-8%E5%80%8B%E5%85%A5%E3%82%8A%E5%8C%96%E7%B2%A7%E7%AE%B1',
    image: item4,
  },
  {
    name: '花紅【ほうじ茶テリーヌショコラ】4個 簡易包装',
    url: 'https://issenka.com/products/%E8%8A%B1%E7%B4%85%E3%83%86%E3%83%AA%E3%83%BC%E3%83%8C%E3%82%B7%E3%83%A7%E3%82%B3%E3%83%A9%EF%BC%92%E7%A8%AE%E8%A9%B0%E3%82%81%E5%90%88%E3%82%8F%E3%81%9B',
    image: item5,
  },
  {
    name: '',
    url: 'https://issenka.com/collections/frontpage',
    image: readMore,
  },
];

export const ISSENKA = {
  name: 'ISSENKA',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
