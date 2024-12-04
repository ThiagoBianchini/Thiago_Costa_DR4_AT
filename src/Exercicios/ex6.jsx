import React, { useReducer } from "react";

const initialState = {
  autoIncrement: 0,
  tarefaInput: "",
  listaTarefas: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADICIONAR_TAREFA":
      return {
        ...state,
        listaTarefas: [
          ...state.listaTarefas,
          {
            id: state.autoIncrement + 1,
            descricao: action.payload,
            concluida: false,
          },
        ],
        autoIncrement: state.autoIncrement + 1,
        tarefaInput: "",
      };
    case "TOGGLE_CONCLUIDA":
      return {
        ...state,
        listaTarefas: state.listaTarefas.map((tarefa) =>
          tarefa.id === action.payload ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        ),
      };
    case "SET_TAREFA_INPUT":
      return {
        ...state,
        tarefaInput: action.payload,
      };
    default:
      return state;
  }
};

function Ex6() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const adicionar = () => {
    if (state.tarefaInput) {
      dispatch({ type: "ADICIONAR_TAREFA", payload: state.tarefaInput });
    }
  };

  const toggleConcluida = (id) => {
    dispatch({ type: "TOGGLE_CONCLUIDA", payload: id });
  };

  const totalConcluidas = state.listaTarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <div>
      <h1>Tarefas</h1>
      <input
        type="text"
        value={state.tarefaInput}
        onChange={(e) => dispatch({ type: "SET_TAREFA_INPUT", payload: e.target.value })}
        placeholder="Adicionar tarefa"
      />
      <button onClick={adicionar}>Adicionar</button>

      <div>
        <p>Total: {state.listaTarefas.length}</p>
        <p>Concluídas: {totalConcluidas}</p>
      </div>

      <ul>
        {state.listaTarefas.map((tarefa) => (
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

export default Ex6;