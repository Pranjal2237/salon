import React from "react";
import "./style.css";
import {
  clock,
  formImage,
  homeBanner,
  image1,
  image2,
  image3,
  image4,
  image5,
  instagram,
  location,
  mobile,
} from "../../assets";
import { Link } from "react-router-dom";
import { aboutContent, services } from "../../constants";
import Form from "../../components/form";

const Home = () => {
  return (
    <div>
      <div className="home-banner">
        <img src={homeBanner} alt="banner" style={{ width: "100%" }} />
        <div className="banner-content">
          <div>
            <p>
              ENJOY STUNNING HAIR AND EXCELLENT SERVICE RIGHT IN THE CENTRE OF
              THE MELBOURNE
            </p>
            <Link to="/online-booking">BOOK</Link>
            <h1>AERY SALON</h1>
          </div>
        </div>
      </div>
      <div className="home-need-container">
        <div className="home-need-heading">
          <h4>STUNNING CUTS / BRILLIANT COLOUR / GREAT SERVICE</h4>
          <h2>WHAT DO YOU NEED?</h2>
        </div>
        <div className="home-hair-services-container">
          {services.map(({ name, image }) => (
            <div className="service-container">
              <div className="service-image">
                <img src={image} alt="image" />
                <div className="service-section">
                  <div className="service-name">{name}</div>
                  <a href="#prices">SEE PRICES</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        id="about"
        className="padding-block inline-wrapper home-about-container"
      >
        <div className="section-heading">
          <h2>01</h2>
          <h3>ABOUT AERY SALON</h3>
        </div>
        <h2>
          AERY SALON WORKS WITH CLIENTS TO DELIVER THE EXACT CUT, COLOUR AND
          STYLE THEY DESIRE.
        </h2>
        <p>
          We understand that making changes to your hair can be intimidating.
          All our customers are given clear consultation through the whole
          process, including expected results and cost before we start.
        </p>
        <p>
          You are always informed and aware of what’s happening next so you have
          complete control and input over the treatment you receive.
        </p>
        <div className="home-about-description-box">
          {aboutContent.map(({ logo, content }) => (
            <div className="home-about-card">
              <div className="card-logo">
                <img src={logo} alt="logo" />
                <div className="underline"></div>
              </div>
              <p className="card-content">{content}</p>
            </div>
          ))}
        </div>
      </div>
      <div id="prices" className="home-price-section padding-block">
        <div className="section-heading">
          <h2>02</h2>
          <h3>PRICES</h3>
        </div>
        <div className="price-container inline-wrapper">
          {[image1, image2, image3, image5].map((item, index) => (
            <div style={{ position: "relative" }}>
              <img src={item} alt="image" style={{ width: "100%" }} />
              <div
                className="opacity-container"
                style={{
                  left: index > 1 ? "0" : "50%",
                  right: index > 1 ? "50%" : "0",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div id="gallery" className="padding-block">
        <div className="section-heading">
          <h2>03</h2>
          <h3>GALLERY</h3>
          <Link to="/online-booking">
            <button>
              <img src={instagram} alt="instagram logo" />
              <p>Follow on Instagram</p>
            </button>
          </Link>
        </div>
      </div>
      <div
        id="contact"
        className="padding-block home-contact-section inline-wrapper"
      >
        <div className="section-heading">
          <h2>04</h2>
          <h3>GET IN TOUCH</h3>
        </div>
        <div className="home-contact-description-box">
          <div className="home-contact-locations-box">
            <div className="location-container">
              <div className="location-logo">
                <img src={location} alt="location" />
              </div>
              <div className="location-content">
                <h4>OUR SALON</h4>
                <p>No. 13</p>
                <p>Level 1</p>
                <p>243 Collins St</p>
                <p>Melbourne VIC 3000</p>
              </div>
            </div>
            <div className="location-container">
              <div className="location-logo">
                <img src={location} alt="image" />
              </div>
              <div className="location-content">
                <h4>GENERAL ENQUIRIES</h4>
                <a href="mailto:admin@aerysalon.com.au">
                  admin@aerysalon.com.au
                </a>
              </div>
            </div>
            <div className="location-container">
              <div className="location-logo">
                <img src={mobile} alt="mobile" />
              </div>
              <div className="location-content">
                <h4>CALL US</h4>
                <a href="tel:+61 (0)423 791 941">+61 (0)423 791 941</a>
              </div>
            </div>
            <div className="location-container">
              <div className="location-logo">
                <img src={clock} alt="clock" />
              </div>
              <div className="location-content">
                <h4>OPENING HOURS</h4>
                <p>Mon, Wed-Sat 10am -6pm</p>
                <p>By Appointment Only DOWNLOAD AERY SALON POLICY</p>
              </div>
            </div>
          </div>
          <div className="home-contact-form-box">
            <Link to="online-booking">
              <div style={{ position: "relative", width: "300px" }}>
                <img src={formImage} alt="image" style={{ width: "100%" }} />
                <div className="image-layer">BOOK ONLINE</div>
              </div>
            </Link>
            <h2>OR EMAIL US BELOW</h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
