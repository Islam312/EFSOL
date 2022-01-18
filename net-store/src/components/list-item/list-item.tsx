import React from 'react';
import { ProductItem } from '../../types/types';
import './list-item.css';

export const ListItem: React.FC<ProductItem> = ({productItem}) => {
  return (
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
              Дата поступления: <span>{productItem['receipt date']}</span>
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
  );
};
