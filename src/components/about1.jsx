import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../images/about-img.jpg';
import '../css/bootstrap.css';
const About1 = () => {
  return (
    <div className="hero_area">
      {/* Header Section */}
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="contact_nav">
              <a href="tel:+91 8790085745">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>Call : +91 8790085745</span>
              </a>
              <a href="mailto:demo@gmail.com">
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
              >
                <span className=""></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/about1">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/service">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* End Header Section */}

      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="detail-box">
                <h2>About us</h2>
                <p>We are a dedicated team of professionals committed to providing top-quality repair, 
                  plumbing, and electrical services. With years of experience in the industry, 
                  we understand the importance of reliability, safety, and customer satisfaction. 
                  Our team is equipped with the latest tools and expertise to handle any project,
                   big or small, with precision and care. We pride ourselves on our transparent 
                   communication, punctuality, and affordable rates, ensuring that every customer
                    is treated with respect and gets the best service possible. Whether it's a minor
                     repair or a major installation, we are here to help make your home or business run smoothly.
                 
                </p>
                <Link to="/" className="btn btn-primary fade-in">
                  Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="img-box">
                <img src={aboutImg} alt="About us" className="img-fluid slide-in" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* Info Section */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <section className="info_section">
        <div className="container">
          <h4>Get In Touch</h4>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="info_items">
                <div className="row">
                  <div className="col-md-4">
                    <a href="">
                      <div className="item">
                        <div className="img-box">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <p>
                        Poonamalle High Rd,Vishwas Nagar,Madhuravoyal,chennai,Tamil Nadu 600095.
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="">
                      <div className="item">
                        <div className="img-box">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <p>+91 8790085745</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="">
                      <div className="item">
                        <div className="img-box">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                        <p>kagugya9@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-box">
          <h4>Follow Us</h4>
          <div className="box">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
      {/* End Info Section */}

      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <p>
            © <span id="displayDateYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
      {/* End Footer Section */}
    </div>
  );
};

export default About1;