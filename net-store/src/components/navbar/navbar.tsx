import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

export const Navbar: React.FC = () => {

  return (
    <nav className="purple darken-4">
      <div className="nav-wrapper container">
        <NavLink to="/" className="header">
          Главная
        </NavLink>
        <ul className="right">
          <li>
            <NavLink to='/tv-sets'
              className="btn mr-5 purple darken-1"
            >
              Телевизоры
            </NavLink>
          </li>
          <li>
            <NavLink to='/refrigerators' className="btn mr-5 purple darken-1">Холодильники</NavLink>
          </li>
          <li>
            <NavLink to='/irons' className="btn mr-5 purple darken-1">Утюги</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
