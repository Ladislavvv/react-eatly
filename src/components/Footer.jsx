import React from 'react';

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-bg"></div>
        <div className="footer-content">
          <ul className="footer-content__list bottom-border">
            <li>
              <img src="/img/Logo.svg" alt="Logo" />
            </li>
            <li>
              <ul className="footer_links">
                <li className="footer_link">
                  <a href="#">Blog</a>
                </li>
                <li className="footer_link">
                  <a href="#">Pricing</a>
                </li>
                <li className="footer_link">
                  <a href="#">About Us</a>
                </li>
                <li className="footer_link">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="footer-bottom">
            <li className="all-rights">© 2023 EATLY All Rights Reserved.</li>
            <li>
              <ul className="socials">
                <li>
                  <a href="#">
                    <img src="/img/instagram.svg" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/linkedin.svg" alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/facebook.svg" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/twitter.svg" alt="Twitter" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Footer;
