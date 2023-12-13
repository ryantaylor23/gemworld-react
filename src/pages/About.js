import React from 'react';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const About = () => {
  return (
    <div className="content">
      <Header />
      <Navbar />
      <div className="container-fluid mt-5 mb-5">
        <h1 className="text-center">About Us</h1>
        <h3 className="container-fluid text-center mt-4">
          My wife and I are gem collectors in the Boise, Idaho area.
          <br />
          We enjoy sharing our passion of gem collecting with others!
          <br />
          Our small shop in downtown Boise has grown to be bigger than we have
          expected!
          <br />
          We thought that it was the right time to branch out and start sharing
          our passion with the people of the world over our new website!
          <br />
          Lets all start enjoying the Gems of the world together!
          <img
            className="img-fluid mt-5 mb-5"
            alt="Couples-Picture"
            src="https://cdn.pixabay.com/photo/2013/02/21/19/00/board-84420_1280.jpg"
          />
        </h3>
      </div>
      <Footer />
    </div>
  );
};

export default About;
