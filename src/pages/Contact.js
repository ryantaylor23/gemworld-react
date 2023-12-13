import React from 'react';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Contact = () => (
  <div className="content">
    <Header />
    <Navbar />
    <div className="container mt-5">
      <h1 className="text-center mt-5">
        Please Contact Us! <br />
        We would love to hear about your Gem finds!
      </h1>
      <form>
        <div className="mb-5 mt-5">
          <label for="email">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@outlook.com"
            name="email"
          />
        </div>
        <div className="mb-5">
          <label for="find">Gem Find:</label>
          <input
            type="find"
            className="form-control"
            id="find"
            placeholder="Ruby"
            name="find"
          />
        </div>
        <button type="submit" className="btn btn-secondary mb-5">
          Submit
        </button>
      </form>{' '}
      <br />
    </div>
    <Footer />
  </div>
);

export default Contact;
