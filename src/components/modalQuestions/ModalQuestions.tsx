export function ModalQuestions({ closeModal }: any) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* O contêiner do modal com tamanho máximo e rolagem */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">
                    Índice Internacional de Função Erétil "Simplificado" (lIFE Simplificado)
                </h2>

                <div className="space-y-4">
                    {/* Pergunta 1 */}
                    <div>
                        <p className="font-bold">
                            1 - Com que frequência você consegue uma ereção durante a atividade sexual?
                        </p>
                        <ul className="list-disc pl-5">
                            <li>1 = Quase nunca / Nunca</li>
                            <li>2 = Poucas vezes (muito menos que a metade das vezes)</li>
                            <li>3 = Algumas vezes (aproximadamente metade das vezes)</li>
                            <li>4 = Na maioria das vezes (muito mais que a metade das vezes)</li>
                            <li>5 = Quase sempre / Sempre</li>
                        </ul>
                    </div>

                    {/* Pergunta 2 */}
                    <div>
                        <p className="font-bold">
                            2 - Quando você tem ereções após estímulo sexual, com que frequência suas ereções são suficientemente rígidas para penetração?
                        </p>
                        <ul className="list-disc pl-5">
                            <li>0 = Nenhuma atividade sexual</li>
                            <li>1 = Quase nunca / Nunca</li>
                            <li>2 = Poucas vezes (muito menos que a metade das vezes)</li>
                            <li>3 = Algumas vezes (aproximadamente metade das vezes)</li>
                            <li>4 = Na maioria das vezes (muito mais que a metade das vezes)</li>
                            <li>5 = Quase sempre / Sempre</li>
                        </ul>
                    </div>

                    {/* Pergunta 3 */}
                    <div>
                        <p className="font-bold">
                            3 - Quando você tentou ter uma relação sexual, com que frequência você conseguiu penetrar sua companheira?
                        </p>
                        <ul className="list-disc pl-5">
                            <li>1 = Quase nunca / Nunca</li>
                            <li>2 = Poucas vezes (muito menos que a metade das vezes)</li>
                            <li>3 = Algumas vezes (aproximadamente metade das vezes)</li>
                            <li>4 = Na maioria das vezes (muito mais que a metade das vezes)</li>
                            <li>5 = Quase sempre / Sempre</li>
                        </ul>
                    </div>

                    {/* Pergunta 4 */}
                    <div>
                        <p className="font-bold">
                            4 - Durante a relação sexual, com que frequência você consegue manter a ereção depois de ter penetrado sua companheira?
                        </p>
                        <ul className="list-disc pl-5">
                            <li>0 = Não tentei ter relação sexual</li>
                            <li>1 = Quase nunca / Nunca</li>
                            <li>2 = Poucas vezes (muito menos que a metade das vezes)</li>
                            <li>3 = Algumas vezes (aproximadamente metade das vezes)</li>
                            <li>4 = Na maioria das vezes (muito mais que a metade das vezes)</li>
                            <li>5 = Quase sempre / Sempre</li>
                        </ul>
                    </div>

                    {/* Pergunta 5 */}
                    <div>
                        <p className="font-bold">
                            5 - Durante a relação sexual, qual seu grau de dificuldade para manter a ereção até completar a relação sexual?
                        </p>
                        <ul className="list-disc pl-5">
                            <li>0 = Não tentei ter relação sexual</li>
                            <li>1 = Extremamente difícil</li>
                            <li>2 = Muito difícil</li>
                            <li>3 = Difícil</li>
                            <li>4 = Um pouco difícil</li>
                            <li>5 = Não é difícil</li>
                        </ul>
                    </div>

                    {/* Pergunta 6 */}
                    <div>
                        <p className="font-bold">
                            6 - Qual seu grau de confiança de que você pode conseguir manter uma ereção?
                        </p>
                        <ul className="list-disc pl-5">
                            <li>1 = Muito baixo</li>
                            <li>2 = Baixo</li>
                            <li>3 = Moderado</li>
                            <li>4 = Alto</li>
                            <li>5 = Muito alto</li>
                        </ul>
                    </div>

                    {/* Resultado */}
                    <div>
                        <p className="font-bold">Resultado:</p>
                        <ul className="list-disc pl-5">
                            <li>Normal = 26-30</li>
                            <li>Leve = 22-25</li>
                            <li>Leve a moderada = 17-21</li>
                            <li>Moderada = 11-16</li>
                            <li>Grave = 6-10</li>
                        </ul>
                    </div>

                    {/* Fechar modal */}
                    <button
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={closeModal}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
