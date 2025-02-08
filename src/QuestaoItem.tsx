
export default function QuestaoItem({ questao, onSelecionar }) {
  return <li onClick={() => onSelecionar(questao)}>{questao.titulo}</li>;
}
