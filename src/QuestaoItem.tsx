import { useState } from "react";
import './QuestaoItem.css';

interface questaoInterface {
  pergunta: String;
  exemplo: String
}

export default function QuestaoItem({pergunta, exemplo}: questaoInterface) {
  const [resposta, setResposta] = useState('');
  const [bloqueado, setBloqueado] = useState(false);
  
  const validaResposta = (e: React.FormEvent) => {
    e.preventDefault(); 

    if (resposta === '') {
        alert("Resposta vazia, digete algo!");
    } else {
        setBloqueado(true);
    }
};


  function editarResposta(){
    setBloqueado(false);
  }

  return <>
  <div className="pergunta">{pergunta}</div>
  <div className="exemplo">Ex: {exemplo}</div>
    <form onSubmit={validaResposta}>
      <input
        type="text"
        placeholder="Digite sua resposta aqui..."
        value={resposta}
        onChange={(e) => setResposta(e.target.value)}
        disabled={bloqueado}
      />
      <button type="submit">Enviar</button>
      <button type="button" onClick={editarResposta}>Editar</button>
    </form>  
  </>
}
