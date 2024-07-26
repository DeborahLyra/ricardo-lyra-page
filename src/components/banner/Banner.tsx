import { BannerContainer, DivButtons } from "./style";
import photoBanner from '/public/static/ricardo-lyra-profile.jpg'

export function Banner() {
  return (
    <BannerContainer >
      <div>
        <h1>Ricardo Lyra</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ea cumque corporis earum incidunt ut praesentium dolorem 
            consectetur quam facere maiores.
        </p>
        <DivButtons>
           <a href="#contact"> <button>Agende uma consulta</button></a>
            <a href="#specialization"><button>Especialidades</button></a>
        </DivButtons>
      </div>
      <img src={photoBanner} alt="Ricardo Lyra Profile" />
    </BannerContainer>
  )
}
