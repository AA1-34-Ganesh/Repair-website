import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/style.css';
import '../css/responsive.css';
import aboutImg from '../images/slider-img.png';
import aboutSectionImg from '../images/about-img.jpg';
import professionalImg from '../images/professional-img.png';
import s1Img from '../images/s1.png';
import s2Img from '../images/s2.png';
import s3Img from '../images/s3.png';
import client1 from '../images/client-1.jpg';
import client2 from '../images/aswin.png';
import client3 from '../images/naveed.jpg';
import client4 from '../images/gowtham.jpg';

const App = () => {
  return (
    <div className="hero_area">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
        <Header/>


      {/* end header section */}
      
      <section className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-box">
                <h1>
                  Repair and <br />
                  Maintenance <br />
                  Services
                </h1>
                <p>
                  We offer top-notch repair and maintenance services designed to meet your needs. From quick fixes to extensive repairs, our expert team ensures quality and reliability every step of the way. Let us help you keep everything running smoothly and efficiently.
                </p>
                <Link to="/Contact">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>
        </div>
      </section>
      {/* end slider section */}
      {/* feature section */}
      <section className="feature_section">
        <div className="container">
          <div className="feature_container">
            <div className="box">
              <div className="img-box">
                <svg enableBackground="new 0 0 511.995 511.995" height="512" viewBox="0 0 511.995 511.995" width="512" xmlns="http://www.w3.org/2000/svg">
                  <g>
                  </g>
                </svg>
              </div>
              <h5 className="name">
                Repair
              </h5>
            </div>
            <div className="box active">
              <div className="img-box">
              </div>
              <h5 className="name">
                Improve
              </h5>
            </div>
            <div className="box">
              <div className="img-box">
              </div>
              <h5 className="name">
                Maintain
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* end feature section */}
      {/* about section */}
      <section className="about_section layout_padding-bottom">
<section className="about_section layout_padding-bottom">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-6">
        <div className="detail-box">
          <h2>
            About us
          </h2>
          <p>
            We are a dedicated team committed to providing exceptional repair and maintenance solutions tailored to your needs. With a focus on quality, reliability, and customer satisfaction, we strive to deliver services that exceed expectations and ensure long-lasting results. Trust us to take care of what matters most to you.
          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
      <div className="col-lg-7 col-md-6">
        <div className="img-box">
          <img src={aboutSectionImg} alt="About Us" />
        </div>
      </div>
    </div>
  </div>
</section>
</section>
      {/* professional section */}
      <section className="professional_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={professionalImg} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h2>
                  We Provide Professional <br />
                  Home Services.
                </h2>
                <p>
                At our company, we deliver exceptional home services tailored to your needs. With a team of skilled experts,
                 we handle everything from plumbing and electrical repairs to general maintenance.
                  Our approach focuses on customer satisfaction, efficiency, and attention to detail.
                   We ensure that every service is completed to the highest standards, providing you 
                   with a seamless experience. No job is too big or small – we are here to make your
                    home a better place to live. Rest assured, when you choose us, you're choosing 
                    reliability, professionalism, and quality service every time.
                    </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* end professional section */}
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2> Our Services </h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={s1Img} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Maintenance
                  </h5>
                  <p>
                  Our maintenance services are designed to keep your
                   home running smoothly and efficiently. Whether it's
                    routine check-ups or urgent repairs, our expert team ensures that all systems are 
                    functioning at their best. We focus on delivering reliable, long-term solutions
                     that prevent future issues, saving you time and money. With our professional approach,
                      you can trust us to handle everything from electrical maintenance to
                   plumbing and general repairs.
                   
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={s2Img} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Electrical
                  </h5>
                  <p>
  Our electrical services are designed to ensure your home or business stays safe and fully operational. Whether it's fixing wiring issues, installing new systems, or upgrading existing setups, our certified electricians deliver high-quality work with attention to detail. We prioritize safety and efficiency, providing reliable solutions for all your electrical needs, big or small. You can count on us for professional advice, precise execution, and timely service.
</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={s3Img} alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    Plumbing
                  </h5>
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
            <a href="">
              View More
            </a>
          </div>
        </div>
      </section>
      {/* end service section */}
      {/* client section */}
      <section className="client_section">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              What Our Clients Say
            </h2>
          </div>
          <div className="carousel-wrap layout_padding2-top">
            <div className="owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src={client1} alt="" />
                    </div>
                    <div className="client_detail">
                      <div className="client_info">
                        <h6>
                          Jorch morik
                        </h6>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="client_text">
                    <p>
                    "I had the pleasure of hiring this service for both plumbing and electrical work, and I am extremely satisfied with the quality of their work. The team was punctual, professional, and showed a deep understanding of the issues I was facing. They tackled both jobs with precision, explaining everything as they went along. The repairs were completed quickly, and my home is now functioning perfectly. I will definitely be using their services again and recommend them to anyone in need of reliable home repairs!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src={client2} alt="" />
                    </div>
                    <div className="client_detail">
                      <div className="client_info">
                        <h6>
                          Aswin Raj
                        </h6>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="client_text">
                    <p>
                    "I recently had a repair job done by this team, and I couldn’t be more satisfied with the results. The technicians were professional, efficient, and ensured that everything was fixed to perfection. They arrived on time and completed the job without any hassle. I highly recommend their services for any repair needs. Excellent work!"


                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src={client3} alt="" />
                    </div>
                    <div className="client_detail">
                      <div className="client_info">
                        <h6>
                          Naveed syed
                        </h6>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="client_text">
                    <p>
                    I had an urgent plumbing issue at my home, and this service team came to the rescue quickly. The plumber was very knowledgeable, and he explained the problem to me clearly before starting the work. They fixed the leak in no time and made sure everything was working properly. I’m really impressed with their fast and reliable service. Definitely worth calling for any plumbing needs!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="client_id">
                    <div className="img-box">
                      <img src={client4} alt="" />
                    </div>
                    <div className="client_detail">
                      <div className="client_info">
                        <h6>
                          Gowtham S
                        </h6>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="client_text">
                    <p>
                    "I needed some electrical work done in my house, and I’m so glad I chose this company. Their electrician was not only skilled but also very polite and professional. He fixed the wiring issue efficiently and even took the time to check other parts of my electrical system to ensure everything was safe. I felt confident and at ease throughout the process. Highly recommend for any electrical services!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end client section */}
      {/* contact section */}
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345081676!2d144.95373541548593!3d-37.81627974201166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3f9d800e9e!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1574232945938!5m2!1sen!2sau"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer_section">
        <div className="container">
          <p>
            © 2024 All Rights Reserved. Design by{' '}
            <a href="https://html.design/">Free HTML Templates</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
