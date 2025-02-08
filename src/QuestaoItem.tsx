
export default function QuestaoItem({ questao, Selecionar }) {
  return <li onClick={() => onSelecionar(questao)}>{questao.titulo}</li>;
}
