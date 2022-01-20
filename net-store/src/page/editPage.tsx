import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const EditProduct: React.FC = () => {
  const { products } = useTypedSelector((state) => state.products);

  const editBrand = () => {

  }
  return (
    <div className="container edit-page">
      <h5 className="header">Редактирование</h5>
      <div className='d-flex'>
        <div className="left-side">
          <img src={products[0].imgUrl} alt={products[0].brand} />
        </div>
        <form className='form'>
            <input type="text"  value={products[0].brand} onChange={editBrand}/>
        </form>
      </div>
    </div>
  );
};
