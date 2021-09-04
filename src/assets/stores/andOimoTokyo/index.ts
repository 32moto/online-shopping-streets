import storeImage from '@/assets/stores/andOimoTokyo/storeImage/and_oimo_tokyo_image.png';
import item1 from '@/assets/stores/andOimoTokyo/itemImages/and_oimo_tokyo_item_1.png';
import item2 from '@/assets/stores/andOimoTokyo/itemImages/and_oimo_tokyo_item_2.png';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://www.and-oimo-tokyo.com/',
    right: 80,
    top: 250,
  },
  {
    title: 'News',
    url: 'https://www.and-oimo-tokyo.com/news',
    left: 80,
    top: 300,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/and_oimo_tokyo/',
    right: 170,
    bottom: 100,
  },
];

const ITEMS = [
  {
    name: '蜜芋バスクチーズケーキ',
    url: 'https://www.and-oimo-tokyo.com/product-page/mitsuimobasque',
    image: item1,
  },
  {
    name: '蜜芋バスクチーズケーキ（ギフトラッピング）',
    url: 'https://www.and-oimo-tokyo.com/product-page/mitsuimobasque-gift',
    image: item2,
  },
];

export const AND_OIMO_TOKYO = {
  name: '& OIMO TOKYO',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
