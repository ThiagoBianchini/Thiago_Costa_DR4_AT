import React, { Component } from 'react';

class Ex12 extends Component {
  state = {
    mensagem: ''
  };

  mostrar = () => {
    this.setState({ mensagem: 'A distinção entre funções convencionais e funções arrow em React reside na atuação do this. Em funções convencionais, o this é determinado pela maneira como a função é chamada, portanto, é necessário utilizar bind(this) para assegurar que o this se refere à instância da classe. Nas funções de arrow, o this é sempre o ponto de onde a função foi originada, o que simplifica o código e previne complicações relacionadas ao contexto.' });
  };

  render() {
    return (
      <div>
        <button onClick={this.mostrar}>Clique aqui</button>        <p>{this.state.mensagem}</p>
      </div>
    );
  }
}

export default Ex12;
