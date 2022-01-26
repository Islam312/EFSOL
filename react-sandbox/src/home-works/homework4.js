import React, { useState } from 'react';

export const HomeWork4 = ({ arr }) => {
  const [isShown, setIsShown] = useState(false);
  const toggleClass = () => {
    setIsShown(!isShown);
  };
  return (
    <div>
      <h5>Homework 4</h5>
      <button className="btn" onClick={toggleClass}>
        Click
      </button>
      {isShown && (
        <>
          <hr />
          <div>
            Hi guys!
            <h6>List Array</h6>
            <ul>
              {arr.map((item, idx) => {
                return <li key={idx}>{item}</li>;
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
