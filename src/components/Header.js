import React from 'react';

const Header = () => {
  return (
    <div
      className="container-fluid bg-image p-5"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2017/02/10/03/12/winter-2054297_1280.jpg")',
        backgroundSize: 'cover',
      }}
    >
      <h1 className="text-center text-dark">Gem World</h1>
    </div>
  );
};

export default Header;
