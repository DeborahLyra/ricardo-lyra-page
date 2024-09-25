import { BannerContainer, DivButtons } from "./style";
import photoBanner from '/public/static/ricardo-lyra-profile.jpeg'

export function Banner() {
  return (
    <BannerContainer >
      <div>
        <h1>Ricardo Lyra</h1>
        <p>Médico Urologista e Andrologista</p>
        <strong>
           CRM 9981- PE / CRM 13513-PB <br />
            RQE 5549 <br />
           </strong>
        <DivButtons>
           <a href="#contact"> <button>Agende uma consulta</button></a>
            <a href="#specialization"><button>Especialidades</button></a>
        </DivButtons>
      </div>
      <img src={photoBanner} alt="Ricardo Lyra Profile" />
    </BannerContainer>
  )
}
