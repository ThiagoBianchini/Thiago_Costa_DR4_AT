import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='mainnav'>
        <div className='cardEx'>
            <h3>Exercício 1</h3>
            <ul className='mainlista'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </div>
    </nav>
  );
};

export default Nav;
