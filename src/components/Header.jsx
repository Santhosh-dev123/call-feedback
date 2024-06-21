import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
    <h5 className='label'>Ask me - e.g: GreAI/ What the best way to looks like sympathic?</h5>
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Ask me - e.g: GreAI/ What the best way to looks like sympathic?" />
        <button><i className="fa fa-search"></i></button>
      </div>
      <div className="eye-icon">
        <i className="fa fa-eye"></i>
      </div>
    </div>
    </header>
  );
}

export default Header;