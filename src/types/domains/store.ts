export interface StoresType {
  [key: string]: StoreType;
}

export interface StoreType {
  name: string;
  image: StaticImageData;
  links: StoreLinkType[];
  items: StoreItemType[];
}

export interface StoreLinkType {
  title: string;
  url: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export interface StoreItemType {
  name: string;
  url: string;
  image: StaticImageData;
}
