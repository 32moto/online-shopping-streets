import storeImage from '@/assets/stores/matchaan/storeImage/matchaan_image.png';
import readMore from '@/assets/stores/common/item_read_more.png';
import item1 from '@/assets/stores/matchaan/itemImages/matchaan_item_1.jpeg';
import item2 from '@/assets/stores/matchaan/itemImages/matchaan_item_2.jpeg';
import item3 from '@/assets/stores/matchaan/itemImages/matchaan_item_3.jpeg';
import item4 from '@/assets/stores/matchaan/itemImages/matchaan_item_4.jpeg';
import item5 from '@/assets/stores/matchaan/itemImages/matchaan_item_5.jpeg';
import item6 from '@/assets/stores/matchaan/itemImages/matchaan_item_6.jpeg';
import item7 from '@/assets/stores/matchaan/itemImages/matchaan_item_7.jpeg';
import item8 from '@/assets/stores/matchaan/itemImages/matchaan_item_8.jpeg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://matchaan.com/',
    right: 80,
    top: 260,
  },
  {
    title: '抹茶スイーツに合うオススメのお茶',
    url: 'https://matchaan.com/pages/%E8%8C%B6%E3%81%AE%E9%9B%AB%E3%81%A8%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84%E3%81%8C%E7%B9%94%E3%82%8A%E3%81%AA%E3%81%99%E3%83%9E%E3%83%AA%E3%82%A2%E3%83%BC%E3%82%B8%E3%83%A5',
    left: 60,
    top: 330,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/matchaan_official/',
    right: 190,
    bottom: 110,
  },
];

const ITEMS = [
  {
    name: '抹茶のフォンダンショコラ 「世界一の抹茶の濃さを目指しました」',
    url: 'https://matchaan.com/collections/%E6%8A%B9%E8%8C%B6%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84/products/chocolat',
    image: item2,
  },
  {
    name: '抹茶庵 厳選プリン3種類セット',
    url: 'https://matchaan.com/collections/%E6%8A%B9%E8%8C%B6%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84/products/purine-set',
    image: item3,
  },
  {
    name: 'キング抹茶ドラゴン(ティラミス抹茶パフェ)',
    url: 'https://matchaan.com/collections/%E6%8A%B9%E8%8C%B6%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84/products/king-dragon',
    image: item4,
  },
  {
    name: 'モンスターボアタルト 5個セット',
    url: 'https://matchaan.com/collections/%E6%8A%B9%E8%8C%B6%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84/products/boa-tarde',
    image: item5,
  },
  {
    name: '抹茶バターケーキ 5個セット',
    url: 'https://matchaan.com/collections/%E6%8A%B9%E8%8C%B6%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84/products/%E6%8A%B9%E8%8C%B6%E3%83%90%E3%82%BF%E3%83%BC%E3%82%B1%E3%83%BC%E3%82%AD-5%E5%80%8B%E3%82%BB%E3%83%83%E3%83%88',
    image: item6,
  },
  {
    name: 'お濃茶 抹茶プリン',
    url: 'https://matchaan.com/collections/%E6%8A%B9%E8%8C%B6%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84/products/okoi-purine',
    image: item7,
  },
  {
    name: '琥珀棒茶プリン',
    url: 'https://matchaan.com/collections/%E6%8A%B9%E8%8C%B6%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84/products/kohaku-purine',
    image: item1,
  },
  {
    name: 'モンスターボアタルト(抹茶のレアチーズタルト)',
    url: 'https://matchaan.com/collections/%E6%8A%B9%E8%8C%B6%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84/products/tarte',
    image: item8,
  },
  {
    name: '',
    url: 'https://matchaan.com/collections/%E6%8A%B9%E8%8C%B6%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%84',
    image: readMore,
  },
];

export const MATCHAAN = {
  name: '抹茶庵',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
