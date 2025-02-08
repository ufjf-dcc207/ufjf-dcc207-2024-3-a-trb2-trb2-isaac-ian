import QuestaoItem from "./QuestaoItem";

export default function QuestoesLista({ questoes, Selecionar }) {
  return (
    <ul>
      {questoes.map((q) => (
        <QuestaoItem key={q.id} questao={q} onSelecionar={Selecionar} />
      ))}
    </ul>
  );
}
