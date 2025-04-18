
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/ShopIn/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
