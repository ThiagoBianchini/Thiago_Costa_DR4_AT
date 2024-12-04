import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Home () {
  const  pagina  = useLocation();
  const nome = pagina.pathname.replace('/', ''); 
  const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);

  return (
    <div>
      <h1>Bem-vindo à página {nomeFormatado}</h1>
    </div>
  );
}

export default Home;
