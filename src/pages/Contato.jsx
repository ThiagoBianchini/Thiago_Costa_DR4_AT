import React, {useState} from 'react'

function Contato () {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome) {
      setMensagem('Preencha o nome');
      return;
    }

    if (!email || !validarEmail(email)) {
      setMensagem('Email inválido.');
      return;
    }

    else {
        setMensagem('Contato salvo.')
    }
  };

  return (
    <div>
      <h2>Formulário de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {mensagem && <p>{mensagem}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;

