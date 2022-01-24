import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchProducts } from '../../store/action-creators/productFetch';
import { Spinner } from '../../components/spinner/spinner';
import './home-page.css';
import { ProductItem } from '../../components/product-list-item/product-list-item';

export const ProductList: React.FC = () => {
  const { products, loading, error } = useTypedSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  products.sort((a, b) => {
    if (a['receipt date'] < b['receipt date']) return 1;
    if (a['receipt date'] > b['receipt date']) return -1;
    return 0;
  });

  return (
    <div className="container">
      <h5 className="header">Бытовая техника</h5>
      <ul className="product-list">
        {products.map((productItem) => {
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
