import { DivSurgeriesCard, DivSurgeriesCardText, SurgeriesContainer, SurgeriesContent } from "./style"
import testiculos from '/public/static/testiculos.svg';
import familia from '/public/static/familia.svg';
import banana from '/public/static/banana.svg';
import anzol from '/public/static/anzol.svg';
import captacaoEspermatozoide from '/public/static/captacao-espermatozoide.svg';
import lupa from '/public/static/lupa.svg';
import seringa from '/public/static/seringa.svg';
import vascular from '/public/static/vascular.svg';
import seta from '/public/static/seta.svg';


const surgeries = [
    {
        name: "Doppler Peniano",
        photo: vascular,
        description: "Exame de ultrassom para avaliar o fluxo sanguíneo peniano e diagnosticar disfunções vasculares.",
    },
    {
        name: "Engrossamento Peniano",
        photo: seta,
        description: "Procedimento estético que visa aumentar a circunferência peniana, utilizando técnicas variadas para resultados personalizados.",
    },
    {
        name: "Reversão de Vasectomia",
        photo: familia,
        description: "Cirurgia que reconecta os ductos deferentes, restaurando a fertilidade após uma vasectomia.",
    },
    {
        name: "Tratamento da Curvatura Peniana (Doença de Peyronie)",
        photo: anzol,
        description: "Correção cirúrgica da curvatura peniana causada pela doença de Peyronie, melhorando a função sexual.",
    },
   
    {
        name: "Implante de Prótese Peniana Rígida e Inflável",
        photo: banana,
        description: "Implante cirúrgico de próteses para tratar disfunção erétil, com opções rígidas ou infláveis.",
    },
 
    {
        name: "Captação de Espermatozóide (PESA)",
        photo: captacaoEspermatozoide,
        description: "Procedimento de extração de espermatozoides do epidídimo para uso em fertilização assistida.",
    },
    {
        name: "Microdissecção Testicular",
        photo: lupa,
        description: "Técnica avançada para recuperar espermatozoides diretamente do tecido testicular em casos de azoospermia.",
    },
    {
        name: "Estética Genital",
        photo: seringa,
        description: "Procedimentos cosméticos para melhorar a aparência e função dos órgãos genitais, personalizando resultados.",
    },
    {
        name: "Varicocele Microcirúrgica",
        photo: testiculos,
        description: "Procedimento minimamente invasivo para tratar varicocele, melhorando a fertilidade masculina.",
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
