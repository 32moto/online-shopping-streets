import storeImage from '@/assets/stores/ardeur/storeImage/ardeur.png';
import readMore from '@/assets/stores/common/item_read_more.png';
import item1 from '@/assets/stores/ardeur/itemImages/ardeur_item_1.jpeg';
import item2 from '@/assets/stores/ardeur/itemImages/ardeur_item_2.jpg';
import item3 from '@/assets/stores/ardeur/itemImages/ardeur_item_3.jpeg';
import item4 from '@/assets/stores/ardeur/itemImages/ardeur_item_4.jpeg';
import item5 from '@/assets/stores/ardeur/itemImages/ardeur_item_5.jpeg';
import item6 from '@/assets/stores/ardeur/itemImages/ardeur_item_6.jpeg';
import item7 from '@/assets/stores/ardeur/itemImages/ardeur_item_7.jpg';
import item8 from '@/assets/stores/ardeur/itemImages/ardeur_item_8.jpg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://ardeur.stores.jp/',
    right: 80,
    top: 220,
  },
  {
    title: 'ARDEUR について',
    url: 'https://ardeur.stores.jp/about',
    left: 60,
    top: 290,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/ardeur.marubishi/',
    right: 180,
    bottom: 120,
  },
];

const ITEMS = [
  {
    name: 'マカロン5個入',
    url: 'https://ardeur.stores.jp/items/5ece0e0a72b911625e3ebf58',
    image: item1,
  },
  {
    name: 'マカロン12個入セット',
    url: 'https://ardeur.stores.jp/items/5f02e878ec8fd351a639613e',
    image: item2,
  },
  {
    name: 'マカロン16個入セット',
    url: 'https://ardeur.stores.jp/items/5ece0e7455fa0360b0efb4a5',
    image: item3,
  },
  {
    name: 'ケーク･オ･コニャック',
    url: 'https://ardeur.stores.jp/items/60c9694b103986044cbd1182',
    image: item4,
  },
  {
    name: 'ケーク･オ･テヴェール',
    url: 'https://ardeur.stores.jp/items/60c9687391260a7b217997f5',
    image: item5,
  },
  {
    name: 'ケーク･オ･ショコラ',
    url: 'https://ardeur.stores.jp/items/60c9679ad7e1d862357af71d',
    image: item6,
  },
  {
    name: '焼菓子8個詰め合わせ',
    url: 'https://ardeur.stores.jp/items/5ece0dfb72b911628e3ebefa',
    image: item7,
  },
  {
    name: '焼菓子16個詰め合わせ',
    url: 'https://ardeur.stores.jp/items/5ece0ded5157622946174e8d',
    image: item8,
  },
  {
    name: '',
    url: 'https://ardeur.stores.jp/',
    image: readMore,
  },
];

export const ARDEUR = {
  name: 'ARDEUR',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
