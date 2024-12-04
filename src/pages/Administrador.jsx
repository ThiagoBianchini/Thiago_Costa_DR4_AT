import React from "react";
import { useLocation } from "react-router-dom";

function Administrador() {
  const pagina = useLocation();
  const nome = pagina.pathname.replace("/", "");
  const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);

  return (
    <div>
      <h1>Bem-vindo, você está na página: {nomeFormatado}</h1>
    </div>
  );
}

export default Administrador;
