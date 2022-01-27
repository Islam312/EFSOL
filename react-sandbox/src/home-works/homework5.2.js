import React, { useState } from 'react';

export const HomeWork52 = () => {
  const state = {
    num1: 0,
    num2: 0,
  };

  const [numberState, setNumberState] = useState(state);
  const onChangeNumber = (e) => {
    setNumberState({ num1: +e.target.value * 0.5, num2: numberState.num2 });
  };
  const onChangeNumber1 = (e) => {
    setNumberState({ num1: numberState.num1, num2: +e.target.value * 0.05 });
  };
  return (
    <div>
      <h5>Homework 5.2</h5>
      <form>
        <input type="number" placeholder="0.5" onChange={onChangeNumber} />
        <input type="number" placeholder="0.05" onChange={onChangeNumber1} />
        <div>{JSON.stringify(numberState)}</div>
      </form>
    </div>
  );
};
