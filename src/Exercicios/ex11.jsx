import React, {useState} from "react";

function Ex11 () {
    const [mensagem, setMensagem] = useState(false);

    const handleClick = () => {
      setMensagem(true);
    };

    return(
        <div>
            <button onClick={handleClick}>Clique aqui</button>
            {mensagem && <p>Aqui está a sua mensagem!</p>}
        </div>
    )
}

export default Ex11;

/*
No React, você determina o comportamento da interface com base no estado, e o próprio React se encarrega de atualizar
a tela automaticamente quando algo se altera. Na versão pura do HTML e JavaScript, é necessário redigir o código
manualmente para atualizar a página sempre que algo ocorre.
*/