import React, { useState } from 'react';

function Ex7() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome.trim() || !validarEmail(email) || !senha.trim()) {
      let erroMensagem = 'Preencha todos os campos.';
      if (!nome.trim()) erroMensagem += ' Nome é obrigatório.';
      if (!validarEmail(email)) erroMensagem += ' Email inválido.';
      if (!senha.trim()) erroMensagem += ' Senha é obrigatória.';
      setMensagem(erroMensagem);
      return;
    }

    setMensagem(`Cadastro realizado com sucesso! Nome: ${nome}, Email: ${email}`);
    
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Senha:
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default Ex7;