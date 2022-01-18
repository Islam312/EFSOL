import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className='blue darken-3'>
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo">
          Главная
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">Телевизоры</a>
          </li>
          <li>
            <a href="/">Холодильники</a>
          </li>
          <li>
            <a href="/">Утюги</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};


