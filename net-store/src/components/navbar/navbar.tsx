import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'

export const Navbar: React.FC = () => {
  return (
    <nav className='blue darken-3'>
      <div className="nav-wrapper container">
        <NavLink to="/" className="brand-logo">
          Главная
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <button className='btn mr-5'>Телевизоры</button>
          </li>
          <li>
            <button className='btn mr-5'>Холодильники</button>
          </li>
          <li>
            <button className='btn mr-5'>Утюги</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};


