import React from 'react';
import { Link } from 'react-router-dom';
import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';

const Service = () => {
  return (
    <div className="hero_area">
      {/* header section starts */}
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="contact_nav">
              <a href="tel:+918790085745">
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
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about1">
                      About
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/service">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* end header section */}

      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={s1} alt="Maintenance" />
                </div>
                <div className="detail-box">
                  <h5>Maintenance</h5>
                  <p>
                  Our maintenance services are designed to keep your
                   home running smoothly and efficiently. Whether it's
                    routine check-ups or urgent repairs, our expert team ensures that all systems are 
                    functioning at their best. We focus on delivering reliable, long-term solutions
                     that prevent future issues, saving you time and money. With our professional approach,
                      you can trust us to handle everything from electrical maintenance to
                   plumbing and general repairs,
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={s2} alt="Electrical" />
                </div>
                <div className="detail-box">
                  <h5>Electrical</h5>
                  <p>
                    
                  Our electrical services are designed to ensure your home or business stays safe and fully operational. Whether it's fixing wiring issues, installing new systems, or upgrading existing setups, our certified electricians deliver high-quality work with attention to detail. We prioritize safety and efficiency, providing reliable solutions for all your electrical needs, big or small. You can count on us for professional advice, precise execution, and timely service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={s3} alt="Plumbing" />
                </div>
                <div className="detail-box">
                  <h5>Plumbing</h5>
                  <p>
                  Our plumbing services ensure that your pipes, 
                  drains, and fixtures are working efficiently.
                   From simple repairs to complex installations,
                    our expert plumbers provide reliable and durable solutions.
                     We are equipped to handle leaks, clogs, pipe replacements,
                      and much more. With a focus on quality and customer satisfaction, 
                      we ensure that your plumbing systems are in top condition, 
                  preventing future issues and keeping your home running smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="/">View More</a>
          </div>
        </div>
      </section>
      {/* end service section */}

      {/* info section */}
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
      {/* end info section */}

      {/* footer section */}
      <footer className="footer_section">
        <div className="container">
          <p>
            © <span id="displayDateYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </footer>
      {/* end footer section */}
    </div>
  );
};

export default Service;
