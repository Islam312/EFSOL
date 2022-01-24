
export enum ProductActionConstants {
  EDIT_PRODUCT = 'EDIT_PRODUCT',
}

type ProductEditActionType = {
  type: ProductActionConstants.EDIT_PRODUCT;
  payload: any;
};

export type ProductAction = ProductEditActionType;
