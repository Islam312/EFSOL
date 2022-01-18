import React from 'react';
import { ProductListProps } from '../../types/types';
import { ListItem } from '../list-item/list-item';
import './product-list.css';

export const ProductList: React.FC<ProductListProps> = ({ productData }) => {
  console.log(productData);

  return (
    <div className="container">
      <h4 className="header">Product List</h4>
      <ul className="product-list">
        {productData.map((productItem) => {
          return (
            <li key={productItem.id}>
              <ListItem productItem={productItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
