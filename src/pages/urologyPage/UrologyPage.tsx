import { ArrowLeft } from "@phosphor-icons/react";
import { Header } from "../../components/Header/Header";
import { DivContent, DivTitle, UrologyContainer } from "./style";
import { Footer } from "../../components/footer/Footer";

export function UrologyPage() {
  return (
    <>
    <Header />
    <UrologyContainer>
      <DivTitle>
        <a href="/"> <ArrowLeft size={40} color="var(--blue-dark)" /></a>
        <h2>Urologia</h2>
      </DivTitle>
      <DivContent>
      <p>
        A urologia é uma especialidade médica que se concentra no diagnóstico, tratamento e manejo de
        doenças do trato urinário masculino e feminino, bem como do sistema reprodutor masculino. O campo
        da urologia abrange diversos órgãos, incluindo os rins, ureteres, bexiga, uretra, e órgãos genitais
        masculinos como testículos, próstata e pênis.
      </p>
      <h3 >O que a Urologia Abrange?</h3>
      <ul>
        <li>
          <strong>Doenças dos Rins:</strong> Tratamento de condições como cálculos renais, infecções e câncer
          renal. Isso pode incluir tanto abordagens médicas quanto cirúrgicas.
        </li>
        <li>
          <strong>Infecções Urinárias:</strong> Diagnóstico e tratamento de infecções no trato urinário, que
          podem afetar a bexiga, uretra ou rins.
        </li>
        <li>
          <strong>Problemas de Bexiga:</strong> Gestão de condições como incontinência urinária, cistite
          intersticial, e bexiga hiperativa.
        </li>
        <li>
          <strong>Saúde Prostática:</strong> Avaliação e tratamento de condições da próstata, incluindo
          hiperplasia prostática benigna (HPB), prostatite e câncer de próstata.
        </li>
        <li>
          <strong>Saúde Reprodutiva Masculina:</strong> Tratamento de questões como infertilidade masculina,
          disfunção erétil, e condições que afetam os testículos.
        </li>
        <li>
          <strong>Urologia Pediátrica:</strong> Cuidados especializados para crianças com condições urológicas,
          como refluxo vesicoureteral e enurese noturna.
        </li>
        <li>
          <strong>Cirurgias Urológicas:</strong> Procedimentos cirúrgicos para tratar diversas condições, desde
          remoção de cálculos até cirurgias de câncer e reparações estruturais.
        </li>
      </ul>
      <h3 >Importância da Urologia</h3>
      <p>
        A urologia é crucial para manter a saúde do trato urinário e do sistema reprodutor masculino. Condições
        urológicas podem impactar significativamente a qualidade de vida de uma pessoa, causando dor, desconforto
        e problemas emocionais. Através de diagnósticos precisos e tratamentos eficazes, a urologia ajuda a
        aliviar sintomas, prevenir complicações e melhorar o bem-estar geral dos pacientes.
      </p>
      <h3 >O Papel do Urologista</h3>
      <p>
        Um urologista é um médico especializado no tratamento de condições urológicas. Eles utilizam uma
        combinação de exames físicos, testes laboratoriais, e técnicas de imagem para diagnosticar problemas
        e desenvolver planos de tratamento adequados. O papel do urologista inclui:
      </p>
      <ul>
        <li>
          <strong>Avaliação Diagnóstica:</strong> Uso de exames clínicos e testes para identificar a causa dos
          sintomas urológicos.
        </li>
        <li>
          <strong>Desenvolvimento de Tratamento:</strong> Criação de planos de tratamento personalizados que
          podem incluir medicamentos, mudanças no estilo de vida ou cirurgia.
        </li>
        <li>
          <strong>Realização de Cirurgias:</strong> Execução de procedimentos cirúrgicos quando necessário para
          tratar condições urológicas complexas.
        </li>
        <li>
          <strong>Cuidados Continuados:</strong> Acompanhamento e monitoramento dos pacientes para garantir que
          o tratamento esteja funcionando eficazmente e fazer ajustes conforme necessário.
        </li>
      </ul>
      <p>
        A urologia é uma especialidade vital da medicina que aborda uma ampla gama de condições, ajudando a
        melhorar a saúde e o bem-estar dos pacientes ao longo de suas vidas.
      </p>
   
      </DivContent>
    </UrologyContainer>
    <Footer/>
  </>
  )
}
