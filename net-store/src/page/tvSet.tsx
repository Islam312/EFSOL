import React from 'react';
import { ProductItem } from '../components/product-list-item/product-list-item';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const TVsetPage: React.FC = () => {
  const { products } = useTypedSelector((state) => state.products);
  const filteredCategory = products.filter(
    (item) => item.category === 'Телевизор'
  );

  return (
    <div className="container">
      <h5 className="header">Телевизоры</h5>
      <ul className="product-list">
        {filteredCategory.map((productItem) => {
          return (
            <li key={productItem.id}>
              <ProductItem productItem={productItem} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
