import React, { useState } from 'react';
import styleClass from './homework6.module.css';

export const HomeWork6 = () => {
  const state = {
    required: false,
    classNames: [`${styleClass.form}`],
  };

  const [borderStyleState, setBorderStyleState] = useState(state);

  const onChangeBorderState = (e) => {
    e.target.value
      ? setBorderStyleState((prev) => ({ ...prev, required: true }))
      : setBorderStyleState((prev) => ({ ...prev, required: false }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (borderStyleState.required) {
      setBorderStyleState((prev) => ({
        ...prev,
        classNames: [...prev.classNames, styleClass.active],
      }));
    } else {
      setBorderStyleState((prev) => ({
        ...prev,
        classNames: [...prev.classNames, styleClass.error],
      }));
    }
  };

  return (
    <div>
      <h5>Homework 6</h5>
      <form
        onSubmit={onSubmit}
        className={borderStyleState.classNames.join(' ')}
      >
        <input
          type="text"
          onChange={onChangeBorderState}
          className={styleClass.formControl}
        />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};
