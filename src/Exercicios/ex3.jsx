import React, { useState } from "react";

function Ex3() {
  const [autoIncrement, setAutoIncrement] = useState(0); 
  const [tarefaInput, setTarefaInput] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

 
  const adicionar = () => {
    if (tarefaInput) {
      const novaTarefa = {
        id: autoIncrement + 1,
        descricao: tarefaInput,
        concluida: false,
      };
      setListaTarefas([...listaTarefas, novaTarefa]);
      setAutoIncrement(autoIncrement + 1);
    }
  };

  const toggleConcluida = (id) => {
    setListaTarefas(
      listaTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const totalConcluidas = listaTarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <div>
      <h1>Tarefas</h1>
      <input
        type="text"
        value={tarefaInput}
        onChange={(e) => setTarefaInput(e.target.value)}
        placeholder="Adicionar tarefa"
      />
      <button onClick={adicionar}>Adicionar</button>

      <div>
        <p>Total: {listaTarefas.length}</p>
        <p>Concluídas: {totalConcluidas}</p>
      </div>

      <ul>
        {listaTarefas.map((tarefa) => (
          <li key={tarefa.id} style={{ color: tarefa.concluida ? "green" : "white" }}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => toggleConcluida(tarefa.id)}
            />
            {tarefa.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ex3;
