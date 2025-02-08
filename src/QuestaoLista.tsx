import QuestaoItem from "./QuestaoItem";

export default function QuestoesLista({ questoes, onSelecionar }) {
  return (
    <ul>
      {questoes.map((q) => (
        <QuestaoItem key={q.id} questao={q} onSelecionar={onSelecionar} />
      ))}
    </ul>
  );
}
