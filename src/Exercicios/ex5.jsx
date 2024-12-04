import React, { useState, useLayoutEffect, useRef } from 'react';

function Ex5() {
  const [valor, setValor] = useState('');
  const [msg, setMsg] = useState('');
  const [clicado, setClicado] = useState(false);
  const [forma, setForma] = useState('normal');
  const [cor, setCor] = useState('normal');
  const btnRef = useRef(null);

  const mudarValor = (e) => setValor(e.target.value);
  const clicarBotao = () => {
    setMsg(valor);
    setClicado(true);
    setForma(forma === 'normal' ? 'clicado' : 'normal');
    setCor('azul');
  };

  useLayoutEffect(() => {
    if (!clicado || !btnRef.current) return;

    const btn = btnRef.current;
    btn.style.transform = 'scale(1.1)';
    btn.style.transition = 'transform 0.2s ease';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
      setClicado(false);
    }, 200);
  }, [clicado]);

  return (
    <div style={{ padding: '20px' }}>
      <input 
        type="text" 
        value={valor} 
        onChange={mudarValor} 
        placeholder="Digite algo" 
        style={{ padding: '8px', marginBottom: '10px' }} 
      />
      <button 
        onClick={clicarBotao} 
        ref={btnRef} 
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '16px',
          borderRadius: forma === 'clicado' ? '50%' : '4px',
          backgroundColor: cor === 'azul' ? '#3498db' : '#114b1c', 
          color: 'white',
          transition: 'border-radius 0.2s ease, background-color 0.2s ease',
        }}
      >
        Exibir Mensagem
      </button>
      {msg && (
        <div>
          {msg}
        </div>
      )}
    </div>
  );
}

export default Ex5;