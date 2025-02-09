import questoes from "./questoes.json";
import './QuestaoLista.css'
import QuestaoItem from "./QuestaoItem";

export default function QuestoesLista() {
    return (
        <ol>
            {questoes.map((q) => (
                <li key={q.id}>
                    <QuestaoItem pergunta={q.pergunta} exemplo={q.exemplos}/>
                </li>
            ))}
        </ol>
    );
}
