import questoes from "./questoes.json";
import './QuestaoLista.css'
import QuestaoItem from "./QuestaoItem";

export interface questaoInterface {
    id?: number
    pergunta: string;
    exemplos: string;
  }

export default function QuestoesLista() {
    return (
        <ol>
            {questoes.map((q:questaoInterface) => (
                <li key={q.id}>
                    <QuestaoItem pergunta={q.pergunta} exemplos={q.exemplos}/>
                </li>
            ))}
        </ol>
    );
}
