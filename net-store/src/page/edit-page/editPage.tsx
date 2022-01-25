import React, { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const EditProduct: React.FC = () => {
  const { currentProduct } = useTypedSelector((state) => state.currentProduct);
  const [product, setProduct] = useState(currentProduct);
  console.log(currentProduct);

  const editBrand = () => {
    
  };
  return (
    <div className="container edit-page">
      <h5 className="header">Редактирование</h5>
      <div className="d-flex">
        <div className="left-side">
          <img src={product.imgUrl} alt={product.brand} />
        </div>
        <form className="form">
          <input type="text" value={product.brand} onChange={editBrand} />
          <input type="text" value={product.name} onChange={editBrand} />
          <input
            type="text"
            value={product.price + product.currensy}
            onChange={editBrand}
          />
          <input
            type="text"
            value={product['receipt date']}
            onChange={editBrand}
          />
          <input type="text" value={product.description} onChange={editBrand} />
        </form>
      </div>
    </div>
  );
};
