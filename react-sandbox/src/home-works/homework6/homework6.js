import React, { useState } from 'react';
import styleClass from './homework6.module.css';

export const HomeWork6 = () => {
  let classNames = [`${styleClass.form}`];

  const [borderStyleState, setBorderStyleState] = useState(classNames);

  const onChangeInput = (e) => {
    if (borderStyleState.length > 1) {
      setBorderStyleState(borderStyleState.pop());
    }
    if (e.target.value) {
      setBorderStyleState((prev) => [...prev, styleClass.active]);
    } else {
      setBorderStyleState((prev) => [...prev, styleClass.error]);
    }
  };
  return (
    <div>
      <h5>Homework 6</h5>
      <form className={borderStyleState.join(' ')}>
        <input type="text" onChange={onChangeInput} className='formControl'/>
      </form>
    </div>
  );
};
