import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../asyncActions/customer';
import { addCashAction, getCashAction } from '../../reducers/cashReducer';
import {
  addCustomerAction,
  removeCustomerAction,
} from '../../reducers/customerReduser';
import './app.css';

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (num) => {
    dispatch(addCashAction(num));
  };
  const getCash = (num) => {
    dispatch(getCashAction(num));
  };

  const addPerson = (personName) => {
    const el = {
      id: Date.now(),
      name: personName,
    };
    dispatch(addCustomerAction(el));
  };

  const removePerson = (id) => {
    dispatch(removeCustomerAction(id));
  };

  return (
    <div className="container">
      <div>
        <div className="cash">Cash: {cash} </div>
        <button
          className="btn"
          onClick={() => {
            addCash(5);
          }}
        >
          Add
        </button>
        <button
          className="btn"
          onClick={() => {
            getCash(5);
          }}
        >
          Get
        </button>
      </div>
      <hr />
      <button
        className="btn"
        onClick={() => {
          addPerson(prompt('Введите имя!'));
        }}
      >
        add person
      </button>
      <button className="btn" onClick={() => {dispatch(fetchUser())}}>
        Add Person from DB
      </button>
      <div>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => {
              return (
                <div
                  className="list-item"
                  key={customer.id}
                  onClick={() => {
                    removePerson(customer.id);
                  }}
                >
                  {customer.name}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="list-item">Список пуст</div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default App;
