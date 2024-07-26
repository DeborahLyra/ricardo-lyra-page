import { ArrowRight } from "@phosphor-icons/react";
import { Button, DivCard, DivImg, SpecializationContainer, SpecializationContent } from "./style";

export function Specialization() {
    return (
        <SpecializationContainer id="specialization">
            <h2>Especializações</h2>

            <SpecializationContent >
                <DivCard>
                    <DivImg>
                        <img src="../../../public/static/urologia.svg" />
                    </DivImg>

                    <h3>Urologia</h3>
                    <p>
                        Urologista é o profissional especializado no trato geniturinário,
                        que inclui os rins, bexiga, uretra e órgãos reprodutivos masculinos,
                        atuando no tratamento clinico e cirúrgico de enfermidades que afetam
                        esses órgãos
                    </p>
                    <a href="/urologia">
                    <Button>
                        Saiba mais
                        <ArrowRight size={24} className="arrow"/>
                    </Button>
                    </a>
                </DivCard>
                <DivCard>
                    <DivImg>
                        <img src="../../../public/static/espermatozoides.svg" />
                    </DivImg>

                    <h3>Andrologia</h3>
                    <p>
                        Andrologia é a especialidade médica que lida com a saúde dos homens,
                        particularmente em relação às suas funções reprodutoras e sexuais.
                        Andrologista é cuidar da saúde sexual e reprodutiva do homem.
                    </p>
                    <a href="/andrologia">
                    <Button>
                        Saiba mais
                        <ArrowRight size={24} className="arrow"/>
                    </Button>
                    </a>
                </DivCard>
            </SpecializationContent>

        </SpecializationContainer>
    )
}
