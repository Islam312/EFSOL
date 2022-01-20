
//* типы для передачи массива product-list, 
//* после объекта в list-item

export type productItemType = {
  id: number;
  category: string;
  brand: string;
  name: string;
  price: number;
  currensy: string;
  imgUrl: string;
  'receipt date': string;
  description: string;
};
