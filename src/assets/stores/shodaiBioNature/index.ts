import storeImage from '@/assets/stores/shodaiBioNature/storeImage/shodai_bio_nature_image.png';
import readMore from '@/assets/stores/common/item_read_more.png';
import item1 from '@/assets/stores/shodaiBioNature/itemImages/shodai_bio_nature_item_1.jpg';
import item2 from '@/assets/stores/shodaiBioNature/itemImages/shodai_bio_nature_item_2.jpg';
import item3 from '@/assets/stores/shodaiBioNature/itemImages/shodai_bio_nature_item_3.jpg';
import item4 from '@/assets/stores/shodaiBioNature/itemImages/shodai_bio_nature_item_4.jpg';
import item5 from '@/assets/stores/shodaiBioNature/itemImages/shodai_bio_nature_item_5.jpg';
import item6 from '@/assets/stores/shodaiBioNature/itemImages/shodai_bio_nature_item_6.jpg';
import item7 from '@/assets/stores/shodaiBioNature/itemImages/shodai_bio_nature_item_7.jpg';
import item8 from '@/assets/stores/shodaiBioNature/itemImages/shodai_bio_nature_item_8.jpg';

const LINKS = [
  {
    title: 'オンラインストアへ',
    url: 'https://shodaibionature.net/',
    right: 80,
    top: 250,
  },
  {
    title: '2021年秋のスイーツ',
    url: 'https://shodaibionature.net/collections/2021autumn',
    left: 60,
    top: 300,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/shodai.macaronse',
    right: 170,
    bottom: 100,
  },
];

const ITEMS = [
  {
    name: '【秋限定商品】落陽葉のペタル',
    url: 'https://shodaibionature.net/collections/2021autumn/products/2021autumn_petal-1',
    image: item1,
  },
  {
    name: '【2021年秋限定】利平栗のモンブラン',
    url: 'https://shodaibionature.net/collections/2021autumn/products/tarte_montblanc',
    image: item2,
  },
  {
    name: '【2021年秋新作】Marron/marron/marronのクロンヌ',
    url: 'https://shodaibionature.net/collections/2021autumn/products/cronne_marron',
    image: item3,
  },
  {
    name: '【秋限定商品】オモニエールマロン',
    url: 'https://shodaibionature.net/collections/2021autumn/products/aumoniere_marrons',
    image: item4,
  },
  {
    name: '【2021年秋新作】利平栗のバウムクーヘン',
    url: 'https://shodaibionature.net/collections/2021autumn/products/baumkuchen_riheiguri',
    image: item5,
  },
  {
    name: '【2021年秋新作】月待ちマカロン/金木犀・月桂樹（4個入り）',
    url: 'https://shodaibionature.net/collections/2021autumn/products/macaron2021_laurel',
    image: item6,
  },
  {
    name: '【秋限定商品】栗のマカロンコフレ（4個入り、8個入り）',
    url: 'https://shodaibionature.net/collections/2021autumn/products/macaron_marron',
    image: item7,
  },
  {
    name: 'パウンドケイク マロングラッセと栗の渋皮煮',
    url: 'https://shodaibionature.net/collections/2021autumn/products/poundcake_marronglace',
    image: item8,
  },
  {
    name: '',
    url: 'https://shodaibionature.net/',
    image: readMore,
  },
];

export const SHODAI_BIO_NATURE = {
  name: 'shodai bio nature',
  image: storeImage,
  links: LINKS,
  items: ITEMS,
};
