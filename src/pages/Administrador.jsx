import React from "react";
import { useLocation } from "react-router-dom";

function Administrador() {
  const location = useLocation();
  const nome = pagina.pathname.replace("/", "");
  const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);

  return (
    <div>
      <h1>Bem-vindo, você está na página: {nome}</h1>
    </div>
  );
}

export default Administrador;
