import React from 'react';
import { useLocation } from 'react-router-dom';

function Administrador() {
  const location = useLocation(); // useLocation retorna o objeto com pathname, search, etc.
  const nome = location.pathname; // Acessando diretamente o pathname

  return (
    <div>
      <h1>Bem-vindo, você está na página: {nome}</h1>
    </div>
  );
}

export default Administrador;
