import React, { useState } from 'react';

function Ex16 () {

    const Contador = () => {
        const [numero, setNumero] = useState(0); 

        return (
            <div>
                <h1>Contador: {numero}</h1>
                <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
                <button onClick={() => setNumero(numero - 1)}>Diminuir</button>
            </div>
        )
    }

    return (
        <div>
            <Contador/>
        </div>
    )
}

export default Ex16;


/*No React, os Hooks permitem usar recursos como estado e ciclo de vida em componentes funcionais. O useState gerencia o estado,
retornando o valor atual e uma função para atualizá-lo. Hooks tornam o código mais simples, dispensando classes,
e é possível criar Hooks personalizados para reutilizar lógica entre componentes.*/