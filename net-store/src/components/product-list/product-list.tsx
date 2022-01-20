import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './product-list.css';

export const ProductList: React.FC = () => {
  const { data } = useTypedSelector((state) => state.products);

  

  return (
    <div className="container">
      <h5 className="header">Product List</h5>
      <ul className="product-list">
        {data.map((productItem) => {
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
                      <a href="/">Отредактировать</a>
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
