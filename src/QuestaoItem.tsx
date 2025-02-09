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
  | { type: "setResposta"; payload: string }
  | { type: "bloquear" | "editar" };

const estadoInicial: Estado = {
  resposta: "",
  bloqueado: false,
};

function reducer(estado: Estado, action: Action):Estado {
  switch (action.type) {
    default:
      return estado;
    case "setResposta":
      return { ...estado, resposta: action.payload };
    case "bloquear":
      return validaResposta(estado);
    case "editar":
      return { ...estado, bloqueado: false };
  }
}

function validaResposta(estado: Estado):Estado {
  if (estado.resposta === "") {
    alert("Campo de resposta vazio.");
    return { ...estado };
  } else {
    return { ...estado, bloqueado: true };
  }
}

export default function QuestaoItem({ pergunta, exemplo }: questaoInterface) {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <>
      <div className="pergunta">{pergunta}</div>
      <div className="exemplo">Ex: {exemplo}</div>
      <input
        type="text"
        placeholder="Digite sua resposta aqui..."
        value={estado.resposta}
        onChange={(e) =>
          dispatch({ type: "setResposta", payload: e.target.value })
        }
        disabled={estado.bloqueado}
      />
      <button type="submit" onClick={() => dispatch({type: 'bloquear'})}>Enviar</button>
      <button type="button" onClick={() => dispatch({type: 'editar'})}>Editar</button>
    </>
  );
}
