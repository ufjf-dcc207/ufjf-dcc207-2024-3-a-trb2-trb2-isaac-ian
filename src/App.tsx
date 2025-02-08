import { Questoes } from "./Questoes"
import QuestoesLista from "./QuestaoLista"

export default function App() {
  return (
    <>
      <div>
        <QuestoesLista questoes={Questoes}   />
      </div>

    </>
  )
}
