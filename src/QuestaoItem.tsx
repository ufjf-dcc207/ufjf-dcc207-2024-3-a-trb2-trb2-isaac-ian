import { useReducer } from "react";
import "./QuestaoItem.css";
import { questaoInterface } from "./QuestaoLista";

interface Estado {
  resposta: string;
  bloqueado: boolean;
  salvo: string;
}

type Action =
  | { type: "setResposta"; texto: string; salvo: string }
  | { type: "bloquear" | "editar" | "limpa" | "desfazer" };

const estadoInicial: Estado = {
  resposta: "",
  bloqueado: false,
  salvo: "",
};

function reducer(estado: Estado, action: Action): Estado {
  switch (action.type) {
    default:
      return estado;
    case "setResposta":
      return { ...estado, resposta: action.texto , salvo: action.salvo };
    case "bloquear":
      return { ...estado, bloqueado: true };
    case "editar":
      return { ...estado, bloqueado: false };
    case "limpa":
      return { ...estado, resposta: "", bloqueado: false };
    case "desfazer":
      return { ...estado, resposta: estado.salvo };
  }
}

export default function QuestaoItem({ pergunta, exemplos }: questaoInterface) {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  const validaResposta = () => {
    if (estado.resposta === "") {
      alert("Campo de resposta vazio.");
    } else {
      dispatch({ type: 'bloquear' });
    }
  }

  return (
    <>
      <div className="pergunta">{pergunta}</div>
      <div className="exemplo">Ex: {exemplos}</div>
      <div className="campo_resposta">
        <input
          type="text"
          placeholder="Digite sua resposta aqui..."
          value={estado.resposta}
          onChange={(e) =>
            dispatch({ type: "setResposta", texto: e.target.value, salvo: estado.resposta })
          }
          disabled={estado.bloqueado}
        />
        <button type="submit" onClick={validaResposta}>Enviar</button>
        <button type="button" onClick={() => dispatch({ type: 'editar' })}>Editar</button>
        <button type="button" onClick={() => dispatch({ type: 'limpa' })}>Limpa</button>
        <button type="button" onClick={() => dispatch({ type: 'desfazer' })}>Desfazer</button>
      </div>
    </>
  );
}
