import { DivSurgeriesCard, DivSurgeriesCardText, SurgeriesContainer, SurgeriesContent } from "./style"


const surgeries = [
    {
        name: "Varicocele Microcirúrgica",
        photo: "../../../public/static/testiculos.svg",
        description:
            "Procedimento minimamente invasivo para tratar varicocele, melhorando a fertilidade masculina.",
    },
    {
        name: "Reversão de Vasectomia",
        photo: "../../../public/static/familia.svg",
        description:
            "Cirurgia que reconecta os ductos deferentes, restaurando a fertilidade após uma vasectomia.",
    },
    {
        name: "Implante de Prótese Peniana Rígida e Inflável",
        photo: "../../../public/static/banana.svg",
        description:
            "Implante cirúrgico de próteses para tratar disfunção erétil, com opções rígidas ou infláveis.",
    },
    {
        name: "Tratamento da Curvatura Peniana (Doença de Peyronie)",
        photo: "../../../public/static/anzol.svg",
        description:
            "Correção cirúrgica da curvatura peniana causada pela doença de Peyronie, melhorando a função sexual.",
    },
    {
        name: "Captação de Espermatozóide (PESA)",
        photo: "../../../public/static/captacao-espermatozoide.svg",
        description:
            "Procedimento de extração de espermatozoides do epidídimo para uso em fertilização assistida.",
    },
    {
        name: "Microdissecção Testicular",
        photo: "../../../public/static/lupa.svg",
        description:
            "Técnica avançada para recuperar espermatozoides diretamente do tecido testicular em casos de azoospermia.",
    },
    {
        name: "Estética Genital",
        photo: "../../../public/static/seringa.svg",
        description:
            "Procedimentos cosméticos para melhorar a aparência e função dos órgãos genitais, personalizando resultados.",
    },
    {
        name: "Doppler Peniano",
        photo: "../../../public/static/vascular.svg",
        description:
            "Exame de ultrassom para avaliar o fluxo sanguíneo peniano e diagnosticar disfunções vasculares.",
    },
];

export function Surgeries() {
    return (
        <SurgeriesContainer id="surgeries">
            <h2>Cirurgias</h2>
            <DivSurgeriesCardText>
            <p>
                Com vasta experiência em urologia e andrologia, ofereço
                procedimentos cirúrgicos avançados, personalizados para
                atender às necessidades de cada paciente, garantindo segurança
                e resultados satisfatórios
            </p>
            </DivSurgeriesCardText>
          
            <SurgeriesContent>

                {
                    surgeries.map(item => {
                        return (
                            <DivSurgeriesCard key={item.name}>
                                <img src={item.photo} alt={item.name} />
                                <h3>{item.name}</h3>
                                 <p>{item.description}</p>
                            </DivSurgeriesCard>
                        )
                    })
                }

            </SurgeriesContent>

        </SurgeriesContainer>

    )
}
