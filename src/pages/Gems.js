import React from 'react';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Gems = () => (
  <div className="content">
    <Header />
    <Navbar />
    <h1 className="text-center mt-5">Gems for Sale!</h1>

    <div className="container-fixed">
      <div className="container mt-5">
        <div className="row mt-4">
          <div className="col-sm-4">
            <h2 className="img-responsive text-center">Amethyst</h2>
            <img
              className="img-fluid"
              alt="Amethyst-Picture"
              src="https://cdn.pixabay.com/photo/2018/04/17/17/28/amethyst-3328166_1280.jpg"
            />
          </div>

          <div className="col-sm-4">
            <h2 className="img-responsive text-center">Emerald</h2>
            <img
              className="img-fluid"
              alt="Emerald-Picture"
              src="https://cdn.pixabay.com/photo/2017/06/15/11/43/necklace-2405165_1280.jpg"
            />
          </div>

          <div className="col-sm-4">
            <h2 className="img-responsive text-center">Diamond</h2>
            <img
              className="img-fluid"
              alt="Diamond-Picture"
              src="https://cdn.pixabay.com/photo/2013/06/08/19/15/diamond-123338_1280.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container-fixed">
      <div className="container mt-5 mb-5">
        <div className="row mt-4">
          <div className="col-sm-4">
            <h2 className="img-responsive text-center">Quartz</h2>
            <img
              className="img-fluid"
              alt="Quartz-Picture"
              src="https://cdn.pixabay.com/photo/2016/08/18/17/37/rock-crystal-1603480_1280.jpg"
            />
          </div>

          <div className="col-sm-4">
            <h2 className="img-responsive text-center">Citrine</h2>
            <img
              className="img-fluid"
              alt="Citrine-Picture"
              src="https://cdn.pixabay.com/photo/2018/12/03/02/35/citrine-3852605_1280.jpg"
            />
          </div>

          <div className="col-sm-4">
            <h2 className="img-responsive text-center">Flourite</h2>
            <img
              className="img-fluid"
              alt="Flourite-Picture"
              src="https://cdn.pixabay.com/photo/2016/08/16/17/32/fluorite-1598476_1280.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Gems;
