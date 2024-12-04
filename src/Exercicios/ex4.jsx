import React, { useState, useEffect } from "react";
import "./ex4.css";

function Ex4() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await fetch("public/bandas.json");
        if (!resposta.ok) {
          throw new Error("Erro tentando acessar");
        }
        const dadosJson = await resposta.json();
        setDados(dadosJson.bandas);
        setCarregando(false);
      } catch (err) {
        setErro(err.message);
        setCarregando(false);
      }
    };

    buscarDados();
  }, []);

  return (
    <div>
      <h1>Bandas</h1>
      {erro && <p style={{ color: "red" }}>Erro: {erro}</p>}
      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <ul className="lista-bandas">
          {dados ? (
            dados.map((item, index) => (
              <li className="item-lista" key={index}>
                <h3>{item.nome}</h3>
                <p>
                  <strong>Gêneros:</strong> {item.genero.join(", ")}
                </p>
                {item.imagem && (
                  <img
                    style={{ height: "100px" }}
                    src={item.imagem}
                    alt={item.nome}
                    className="imagem-banda"
                  />
                )}
              </li>
            ))
          ) : (
            <p>Sem dados para exibir</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default Ex4;
