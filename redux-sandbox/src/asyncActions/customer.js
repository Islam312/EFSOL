import { addAllCustomerAction } from '../reducers/customerReduser';

export const fetchUser = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(addAllCustomerAction(json)));
  };
};
