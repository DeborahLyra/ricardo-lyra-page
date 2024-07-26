import { ArrowLeft } from "@phosphor-icons/react";
import { Header } from "../../components/Header/Header";
import { AndrologyContainer, DivContent, DivTitle } from "./style";
import { Footer } from "../../components/footer/Footer";


export function AndrologyPage() {
  return (
    <>
      <Header />
      <AndrologyContainer>
        <DivTitle>
          <a href="/"> <ArrowLeft size={40} color="var(--blue-dark)" /></a>
          <h2>Andrologia</h2>
        </DivTitle>
        <DivContent>
        <p>
        Andrologia é uma especialidade médica que foca na saúde masculina, particularmente relacionada aos
        sistemas reprodutivo e urológico. O termo "andrologia" vem das palavras gregas "andro," que significa
        homem, e "logia," que significa estudo. Portanto, andrologia pode ser considerada a "ciência do homem"
        em um contexto médico.
      </p>
      <h3 >O que a Andrologia Abrange?</h3>
      <ul>
        <li>
          <strong>Fertilidade Masculina:</strong> Avaliação e tratamento de problemas de infertilidade em homens,
          como baixa contagem de espermatozoides, motilidade reduzida, e outras disfunções reprodutivas.
        </li>
        <li>
          <strong>Disfunção Erétil (DE):</strong> Diagnóstico e tratamento da incapacidade de alcançar ou manter
          uma ereção suficiente para a atividade sexual. Isso pode incluir opções de tratamento como medicamentos,
          terapia hormonal, ou implantes penianos.
        </li>
        <li>
          <strong>Transtornos Hormonais:</strong> Tratamento de desequilíbrios hormonais, incluindo baixos níveis
          de testosterona (hipogonadismo), que podem afetar a libido, massa muscular, e densidade óssea.
        </li>
        <li>
          <strong>Saúde Sexual:</strong> Gestão de condições que afetam a saúde sexual masculina, incluindo
          ejaculação precoce, baixa libido, e outras preocupações sexuais.
        </li>
        <li>
          <strong>Cirurgias Urológicas:</strong> Realização de procedimentos cirúrgicos como vasectomias e suas
          reversões, tratamento de varicocele (dilatação das veias nos testículos), e correções cirúrgicas para a
          doença de Peyronie (curvatura peniana).
        </li>
        <li>
          <strong>Saúde Prostática:</strong> Avaliação e tratamento de condições que afetam a próstata, como
          hiperplasia prostática benigna (HPB) e câncer de próstata.
        </li>
        <li>
          <strong>Contracepção Masculina:</strong> Métodos de controle de natalidade para homens, incluindo o
          aconselhamento sobre opções como a vasectomia.
        </li>
      </ul>
      <h3 >Importância da Andrologia</h3>
      <p>
        A andrologia é importante porque aborda problemas específicos que afetam a saúde masculina, muitas vezes
        sob o olhar de um especialista que compreende as particularidades dos sistemas reprodutivo e hormonal
        masculino. Essa especialidade é vital não apenas para a saúde física, mas também para o bem-estar
        emocional e psicológico dos pacientes, já que questões reprodutivas e sexuais podem ter impactos
        significativos na qualidade de vida e nas relações pessoais.
      </p>
      <h3>O Papel do Andrologista</h3>
      <p>
        Um andrologista é um médico especializado em andrologia. Ele possui o treinamento necessário para
        diagnosticar e tratar as condições mencionadas acima. O processo geralmente envolve:
      </p>
      <ul>
        <li>
          <strong>Consulta Inicial:</strong> Avaliação dos sintomas, histórico médico, e preocupações do paciente.
        </li>
        <li>
          <strong>Exames Diagnósticos:</strong> Realização de testes laboratoriais, exames de imagem, e
          avaliações físicas para determinar a causa de qualquer problema.
        </li>
        <li>
          <strong>Plano de Tratamento:</strong> Desenvolvimento de um plano de tratamento personalizado que pode
          incluir medicação, terapia, mudanças no estilo de vida, ou cirurgia.
        </li>
        <li>
          <strong>Acompanhamento:</strong> Monitoramento contínuo da condição do paciente e ajustes no
          tratamento conforme necessário.
        </li>
      </ul>
      <p>
        A andrologia é, portanto, uma área essencial da medicina que ajuda a garantir que os homens recebam o
        cuidado e tratamento adequados para uma gama de condições que podem afetar sua saúde e qualidade de
        vida.
      </p>
        </DivContent>
      </AndrologyContainer>
      <Footer/>
    </>
  )
}
