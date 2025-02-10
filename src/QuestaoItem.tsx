import { useReducer } from "react";
import "./QuestaoItem.css";

interface questaoInterface {
  pergunta: string;
  exemplo: string;
}

interface Estado {
  resposta: string;
  bloqueado: boolean;
}

type Action =
  | { type: "setResposta"; texto: string }
  | { type: "bloquear"}
  | { type: "editar"};

const estadoInicial: Estado = {
  resposta: "",
  bloqueado: false,
};

function reducer(estado: Estado, action: Action):Estado {
  switch (action.type) {
    default:
      return estado;
    case "setResposta":
      return { ...estado, resposta: action.texto };
    case "bloquear":
      return { ...estado, bloqueado: true };
    case "editar":
      return { ...estado, bloqueado: false };
  }
}

export default function QuestaoItem({ pergunta, exemplo }: questaoInterface) {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  const validaResposta = () => {
    if (estado.resposta === "") {
      alert("Campo de resposta vazio.");
    } else {
      dispatch({type: 'bloquear'});
    }
  }

  return (
    <>
      <div className="pergunta">{pergunta}</div>
      <div className="exemplo">Ex: {exemplo}</div>
      <div className="campo_resposta">
        <input
          type="text"
          placeholder="Digite sua resposta aqui..."
          value={estado.resposta}
          onChange={(e) =>
            dispatch({ type: "setResposta", texto: e.target.value })
          }
          disabled={estado.bloqueado}
        />
        <button type="submit" onClick={validaResposta}>Enviar</button>
        <button type="button" onClick={() => dispatch({type: 'editar'})}>Editar</button>
      </div>
    </>
  );
}
