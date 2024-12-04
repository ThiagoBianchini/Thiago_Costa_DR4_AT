import React, { useState } from 'react';

function Ex8() {

  // Definindo o componente Botao
  function Botao({ texto, cor, funcao, desativado = false }) {
    return (
      <button
        className="btn"
        style={{
          backgroundColor: cor,
          cursor: desativado ? 'not-allowed' : 'pointer',
        }}
        onClick={!desativado ? funcao : null}
        disabled={desativado}>
        {texto}
      </button>
    );
  }

  // Estado para controlar a cor da mensagem
  const [corMensagem, setCorMensagem] = useState('black'); 

  // Função para mudar a cor da mensagem
  const mudarCorMensagem = () => {
    const cores = ['red', 'green', 'blue', 'orange', 'purple'];
    const corAtual = corMensagem;
    let novaCor = cores[Math.floor(Math.random() * cores.length)];

    // Garantir que a nova cor não seja a mesma da anterior
    while (novaCor === corAtual) {
      novaCor = cores[Math.floor(Math.random() * cores.length)];
    }

    setCorMensagem(novaCor);  
  };

  return (
    <div>
      <h1 style={{ color: corMensagem }}>Olá, esta é a mensagem</h1>
      <Botao
        texto="Mudar cor"
        cor="blue"
        funcao={mudarCorMensagem}  // Passando a função que altera a cor
      />
    </div>
  );
}

export default Ex8;
