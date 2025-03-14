import { useState, useEffect } from "react";
import questoesData from "./Questoes.json";
import "./QuestaoLista.css";
import QuestaoItem from "./QuestaoItem";

export interface QuestaoInterface {
    id: number;
    pergunta: string;
    exemplos: string;
    envios: string[];
}

export default function ListaDeQuestoes() {
    // Estado para armazenar as questões
    const [questoes, setQuestoes] = useState<QuestaoInterface[]>(questoesData);

    // Função para adicionar resposta ao array de envios dentro do estado
    const adicionarResposta = (id: number, resposta: string) => {
        setQuestoes((questoesAnteriores) => {
            const novasQuestoes = questoesAnteriores.map((q) =>
                q.id === id ? { ...q, envios: [...q.envios, resposta] } : q
            );

            // Salva as respostas no LocalStorage
            localStorage.setItem("questoes", JSON.stringify(novasQuestoes));

            return novasQuestoes;
        });
    };

    // Carregar as questões do LocalStorage ao carregar o componente
    useEffect(() => {
        const questoesSalvas = localStorage.getItem("questoes");
        if (questoesSalvas) {
            setQuestoes(JSON.parse(questoesSalvas));
        }
    }, []);

    // Função para acessar as respostas salvas
    const acessarRespostas = () => {
        const questoesSalvas = localStorage.getItem("questoes");
        if (questoesSalvas) {
            const questoes = JSON.parse(questoesSalvas);
            console.table(questoes); // Exibe todas as questões com suas respostas
            return questoes;
        } else {
            console.log("Nenhuma resposta salva.");
            return [];
        }
    };

    return (
        <div>
            <ol>
                {questoes.map((q) => (
                    <li key={q.id}>
                        <QuestaoItem
                            id={q.id}
                            pergunta={q.pergunta}
                            exemplos={q.exemplos}
                            adicionarEnvio={adicionarResposta}
                            envios={q.envios} // Passa o array de respostas da questão
                        />
                    </li>
                ))}
            </ol>
            <button onClick={acessarRespostas}>ver Respostas</button>
        </div>
    );
}
