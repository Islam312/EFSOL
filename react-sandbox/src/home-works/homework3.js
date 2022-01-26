import React, { useState } from 'react';

export const HomeWork3 = () => {
  const [state, setState] = useState(0);

  const inc = () => {
    setState(state + 1);
  };
  const dec = () => {
    setState(state - 1);
  };
  const changeState = (e) => {
      let state = +e.target.value
    setState(state);
  };
  return (
    <div>
      <h5>Homework 3</h5>
      <input type="number" value={state} onChange={changeState} />
      <button className="btn" onClick={inc}>
        +
      </button>
      <button className="btn" onClick={dec}>
        -
      </button>
    </div>
  );
};
