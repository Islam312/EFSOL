import React from "react";


export const HomeWork1 = ({arr}) => {
    return(
        <div>
          <h5>Homework 1,2</h5>
            <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item} 1</li>;
        })}
      </ul>
        </div>
    )
}