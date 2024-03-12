import React from 'react';
import styles from './header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <img className={styles.header__logo} src="/img/Logo.svg" alt="Logo" />
        <nav>
          <ul className={styles.header__menu}>
            <li className={styles.header__menu_item}>
              <a href="/">Menu</a>
            </li>
            <li className={styles.header__menu_item}>
              <a href="/blog">Blog</a>
            </li>
            <li className={styles.header__menu_item}>
              <a href="/price">Pricing</a>
            </li>
            <li className={styles.header__menu_item}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <ul className={styles.header__btns}>
        <li className={styles.header__btns_login}>
          <button>Login</button>
        </li>
        <li className={styles.header__btns_singup}>
          <button>Sign up</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
