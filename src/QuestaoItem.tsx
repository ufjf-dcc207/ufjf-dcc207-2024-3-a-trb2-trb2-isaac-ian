// QuestaoItem.tsx
import { useReducer } from "react";
import "./QuestaoItem.css";

interface Estado {
  resposta: string;
  bloqueado: boolean;
}

type Action =
  | { type: "setResposta"; texto: string }
  | { type: "bloquear" | "editar" | "limpa" };

const estadoInicial: Estado = {
  resposta: "",
  bloqueado: false,
};

function reducer(estado: Estado, action: Action): Estado {
  switch (action.type) {
    case "setResposta":
      return { ...estado, resposta: action.texto };
    case "bloquear":
      return { ...estado, bloqueado: true };
    case "editar":
      return { ...estado, bloqueado: false };
    case "limpa":
      return { ...estado, resposta: "", bloqueado: false };
    default:
      return estado;
  }
}

interface Props {
  id: number;
  pergunta: string;
  exemplos: string;
  adicionarEnvio: (id: number, resposta: string) => void;
}

export default function QuestaoItem({ id, pergunta, exemplos, adicionarEnvio }: Props) {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  const validaResposta = () => {
    if (estado.resposta.trim() === "") {
      alert("Campo de resposta vazio.");
      return;
    }
    adicionarEnvio(id, estado.resposta); // Salva no array envios
    dispatch({ type: "limpa" }); 
  };

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
            dispatch({ type: "setResposta", texto: e.target.value })
          }
          disabled={estado.bloqueado}
        />
        <button type="submit" onClick={validaResposta}>Enviar</button>
        <button type="button" onClick={() => dispatch({ type: "editar" })}>Editar</button>
        <button type="button" onClick={() => dispatch({ type: "limpa" })}>Limpar</button>
      </div>
    </>
  );
}
