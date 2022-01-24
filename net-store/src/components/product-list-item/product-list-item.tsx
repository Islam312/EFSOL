import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { ProductActionConstants } from '../../store/actions/productActions';
import { ProductItemProps } from '../../types/types';

export const ProductItem: React.FC<ProductItemProps> = ({ productItem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: ProductActionConstants.EDIT_PRODUCT,
      payload: productItem,
    });
    navigate(`/${productItem.category}/${productItem.id}`);
  };

  return (
    <div className="product-item col s6 m7">
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
          <div className="card-action" onClick={handleClick}>
            <div className="btn purple darken-2">Отредактировать</div>
          </div>
        </div>
      </div>
    </div>
  );
};
