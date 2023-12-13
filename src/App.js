import React from 'react';
import './style.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Navbar />
        <h1 className="text-center mt-5">
          Welcome to our Gem Site!
          <br />
          <img
            className="img-fluid mt-5 mb-5"
            alt="Crystal-Picture"
            src="https://cdn.pixabay.com/photo/2023/01/04/19/06/ai-generated-7697456_1280.jpg"
          />
        </h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;
