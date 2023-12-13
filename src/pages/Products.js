import React from 'react';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Products = () => (
  <div className="content">
    <Header />
    <Navbar />
    <div className="container-fluid mt-5">
      <h1 className="text-center mb-5">
        Check out our Pricing and Healing Property!
      </h1>
      <table className="table table-bordered table-secondary mt-4 mb-5">
        <thead className="h3">
          <tr>
            <th>Gem</th>
            <th>Price-Per-Gram</th>
            <th>Healing Property</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody className="h3">
          <tr>
            <td>Amethyst</td>
            <td>$9.99</td>
            <td>Calming</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Emerald</td>
            <td>$7.50</td>
            <td>Heart Healing</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Diamond</td>
            <td>$12.50</td>
            <td>Cleansing</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Quartz</td>
            <td>$8.55</td>
            <td>Amplifier</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Citrine</td>
            <td>$11.25</td>
            <td>Prosperity</td>
            <td>#</td>
          </tr>
          <tr>
            <td>Flourite</td>
            <td>$10.35</td>
            <td>Focus</td>
            <td>#</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />
  </div>
);

export default Products;
