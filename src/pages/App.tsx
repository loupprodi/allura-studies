import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from './App.module.scss';
import Cronometro from "../components/Cronometro";
import { ITarefas } from "../types/tarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([])
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function SelecionaTarefa(tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa, 
            selecionado:false, 
            completado: true,
          }
        }
        return tarefa;
      }));
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={SelecionaTarefa}
      />
      <Cronometro selecionado={selecionado} 
      finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;
