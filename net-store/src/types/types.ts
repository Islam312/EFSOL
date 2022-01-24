//* типы для передачи массива product-list,
//* после объекта в list-item

export type ProductItemProps = {
  productItem: productItemType;
};
export type productItemType = {
  id: number;
  imgUrl: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  currensy: string;
  ['receipt date']: string;
  description: string;
};
