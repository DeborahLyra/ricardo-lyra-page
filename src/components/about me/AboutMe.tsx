import { AboutMeContainer, AboutMeContent, AboutMeImageHorizontal, AboutMeImages, AboutMeImageVertical } from "./style";
import profilePic1 from '/public/static/ricardo-lyra-profile-2.jpg'
import profilePic2 from '/public/static/ricardo-lyra-profile-3.jpg'

export function AboutMe() {
  return (
    <AboutMeContainer id="aboutMe">
      <h2>Sobre Mim</h2>

      <AboutMeContent>
        <AboutMeImages >
          <AboutMeImageHorizontal src={profilePic2} alt="ricardo lyra profile" />
          <AboutMeImageVertical src={profilePic1} alt="ricardo lyra profile" />
        </AboutMeImages>

        <div>
          <p>
            Médico Formado pela Upe/1991. <br />
            Urologista formado no Hospital Getulio Vargas -Recife, formaÇao em andrologia no Instituto H.Hellis -Sao Paulo, membro titular da Sociedade Brasileira de Urologia,
            membro da AssociaÇao Brasileira de Estudo em Medicina e Saude Sexual(ABEMSS), 
            atuando no departamento de cirurgia peniana, preceptor de residencia médica e 
            coordenador do ServiÇo de Andrologia do Hospital Getulio Vargas - Recife. Coordenador 
            do serviÇo de urologia do Hospital EsperanÇa Olinda - Rede D'Or. <br />
           <strong>
           CRM 9981- PE / CRM 13513-PB <br />
            RQE 5549 <br />
           </strong>
          </p>
        </div>
      </AboutMeContent>

    </AboutMeContainer>
  )
}
