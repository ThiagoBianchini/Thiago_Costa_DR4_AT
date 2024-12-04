import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Nav from './Nav';
import Navigation from './Navigation';
import Administrador from './pages/Administrador';
import Visitante from './pages/Visitante';
import './App.css';
import Ex3 from './Exercicios/ex3';
import Ex4 from './Exercicios/ex4';
import Ex5 from './Exercicios/ex5';
import Ex6 from './Exercicios/ex6';
import Ex7 from './Exercicios/ex7';
import Ex8 from './Exercicios/ex8';
import Ex11 from './Exercicios/ex11';
import Ex12 from './Exercicios/ex12';
import Ex13 from './Exercicios/ex13';
import Ex16 from './Exercicios/ex16';



const App = () => {
  return (
    <Router>
      <div className="maincontainer">

        <nav className='mainnav'>
          <ul className='mainlista'>
            <Nav/>
            <Navigation/>
            <li><Link to="/ex3">Exercício 3</Link></li>
            <li><Link to="/ex4">Exercício 4</Link></li>
            <li><Link to="/ex5">Exercício 5</Link></li>
            <li><Link to="/ex6">Exercício 6</Link></li>
            <li><Link to="/ex7">Exercício 7</Link></li>
            <li><Link to="/ex8">Exercício 8</Link></li>
            <li><Link to="/ex11">Exercício 11</Link></li>
            <li><Link to="/ex12">Exercício 12</Link></li>
            <li><Link to="/ex13">Exercício 13</Link></li>
            <li><Link to="/ex16">Exercício 16</Link></li>
          </ul>
        </nav>
        <div className="exercicio">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/administrador" element={<Administrador />} />
            <Route path="/visitante" element={<Visitante />} />
            <Route path="/ex3" element={<Ex3 />} />
            <Route path="/ex4" element={<Ex4 />} />
            <Route path="/ex5" element={<Ex5 />} />
            <Route path="/ex6" element={<Ex6 />} />
            <Route path="/ex7" element={<Ex7 />} />
            <Route path="/ex8" element={<Ex8 />} />
            <Route path="/ex11" element={<Ex11 />} />
            <Route path="/ex12" element={<Ex12 />} />
            <Route path="/ex13" element={<Ex13 />} />
            <Route path="/ex16" element={<Ex16 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
