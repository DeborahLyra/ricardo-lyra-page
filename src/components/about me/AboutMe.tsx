import { AboutMeContainer, AboutMeContent, AboutMeImageHorizontal, AboutMeImages, AboutMeImageVertical, AboutMeText } from "./style";
import profilePic1 from '/public/static/ricardo-lyra-profile-2.jpeg'
import profilePic2 from '/public/static/ricardo-lyra-profile-3.jpeg'

export function AboutMe() {
  return (
    <AboutMeContainer id="aboutMe">
      <h2>Sobre Mim</h2>

      <AboutMeContent>
        <AboutMeImages >
          <AboutMeImageHorizontal src={profilePic2} alt="ricardo lyra profile" />
          <AboutMeImageVertical src={profilePic1} alt="ricardo lyra profile" />
        </AboutMeImages>

        <AboutMeText>
          <p>
          • Médico Formado pela UPE/1991. <br />
            • Urologista formado no Hospital Getúlio Vargas - Recife, formaçao em andrologia no Instituto H.Hellis -São Paulo, <br />
            • Membro titular da Sociedade Brasileira de Urologia,<br /> 
            • Membro da Associação Brasileira de Estudo em Medicina e Saude Sexual(ABEMSS), <br /> 
            • Atuando no departamento de cirurgia peniana, preceptor de residencia médica e 
            coordenador do Serviço de Andrologia do Hospital Getúlio Vargas - Recife. <br /> 
            • Coordenador do serviço de urologia do Hospital Esperança Olinda - Rede D'Or. <br /> 
          </p>
        </AboutMeText>
      </AboutMeContent>

    </AboutMeContainer>
  )
}
