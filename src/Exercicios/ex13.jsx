import React, { Component } from 'react';

class Ex13 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar() {
    this.setState(prevState => ({ numero: prevState.numero + 1 }));
  }

  diminuir() {
    this.setState(prevState => ({ numero: prevState.numero - 1 }));
  }

  render() {
    return (
      <div>
        <h1>Contador: {this.state.numero}</h1>
        <button onClick={this.aumentar}>Aumentar</button>
        <button onClick={this.diminuir}>Diminuir</button>
      </div>
    );
  }
}

export default Ex13;

/*
Conforme citado anteriormente, O bind é usado para garantir que o this dentro de métodos de classe em React se refira à instância correta. 
Em funções tradicionais, o this pode apontar para o contexto errado, causando erros ao acessar o estado ou métodos. 
Com o bind(this) no construtor, garantimos que o this sempre se refira à classe, permitindo o uso correto de this.setState. 
Isso evita problemas comuns em manipuladores de eventos.
*/