import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Home () {
  const  pagina  = useLocation();
  const nome = pagina.pathname

  return (
    <div>
      <h1>Bem-vindo à página {nome}</h1>
    </div>
  );
}

export default Home;
