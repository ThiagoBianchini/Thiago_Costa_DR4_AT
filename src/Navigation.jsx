import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='mainnav'>
        <div className='cardEx'>
            <h3>Exercício 2</h3>
            <ul className='mainlista'>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/administrador">Administrador</NavLink></li>
                <li><NavLink to="/visitante">Visitante</NavLink></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navigation;
