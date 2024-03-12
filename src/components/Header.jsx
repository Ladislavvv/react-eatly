import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/" className="header__logo">
          <img src="/img/Logo.svg" alt="Logo" />
        </Link>
        <nav>
          <ul className="header__menu">
            <li className="header__menu_item">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="header__menu_item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="header__menu_item">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="header__menu_item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="header__btns">
        <li className="header__btns_login">
          <button>Login</button>
        </li>
        <li className="header__btns_singup">
          <button>Sign up</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
