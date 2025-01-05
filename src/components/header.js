import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const toggleNav = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const target = document.querySelector(navbarToggler.getAttribute('data-target'));
    
        if (navbarToggler.getAttribute('aria-expanded') === 'false') {
           navbarToggler.setAttribute('aria-expanded', 'true');
           target.classList.add('show');
           navbarToggler.classList.add('collapsed');
        }
         else {
           navbarToggler.setAttribute('aria-expanded', 'false');
           target.classList.remove('show');
           navbarToggler.classList.remove('collapsed');
         }
      };

  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_nav">
            <a href="tel:+918790085745">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>Call : +91 8790085745</span>
            </a>
            <a href="mailto:kagugya9@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>Email : kagugya9@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <Link className="navbar-brand" to="/">
              <span>Inance</span>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleNav}
              >
              <span className=""> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about1">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Service">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;