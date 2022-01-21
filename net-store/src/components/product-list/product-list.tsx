import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchProducts } from '../../store/action-creators/products';
import { Spinner } from '../spinner/spinner';
import './product-list.css';

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
    return 0
  });

  return (
    <div className="container">
      <h5 className="header">Бытовая техника</h5>
      <ul className="product-list">
        {products.map((productItem) => {
          return (
            <li key={productItem.id}>
              <div className="col s6 m7">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={productItem.imgUrl} alt={productItem.name} />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        Производитель: <span>{productItem.brand}</span>
                      </p>
                      <p>
                        Наименование: <span>{productItem.name}</span>
                      </p>
                      <p>
                        Категория: <span>{productItem.category}</span>
                      </p>
                      <p>
                        Цена:{' '}
                        <span>
                          {productItem.price}
                          {productItem.currensy}
                        </span>
                      </p>
                      <p>
                        Дата поступления:{' '}
                        <span>{productItem['receipt date']}</span>
                      </p>
                      <p>
                        Описание: <span>{productItem.description}</span>
                      </p>
                    </div>
                    <div className="card-action">
                      <NavLink to="/edit">Отредактировать</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
