
interface questao{

  id: number;
  titulo: string;
  resposta: string;
}

export default function QuestaoItem({questao}: {questao: questao}) {
  return <li >{questao.titulo}</li>;
}
