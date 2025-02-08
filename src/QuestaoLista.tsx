import QuestaoItem from "./QuestaoItem";

interface questao {
    id: number;
    titulo: string;
    resposta: string;
}

export default function QuestoesLista({ questoes }: { questoes: questao[] }) {
    return (
        <ol>
            {questoes.map((q) => (
                <QuestaoItem key={q.id} questao={q} />
            ))}
        </ol>
    );
}
