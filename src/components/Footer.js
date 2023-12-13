import React from 'react';

const Footer = () => {
  return (
    <div
      className="container-fluid bg-image p-5"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2017/02/10/03/12/winter-2054297_1280.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <h4 className="text-center text-dark">
        Gem World | Established 2018
        <br />
        Contact us by Email:{' '}
        <a className="footer-links" href="mailto:gemsworld@hotmail.com">
          gemsworld@hotmail.com
        </a>
        <br />
        or by Phone:{' '}
        <a className="footer-links" href="tel:+1208-123-4567">
          +1(208)-123-4567
        </a>
      </h4>
    </div>
  );
};

export default Footer;
