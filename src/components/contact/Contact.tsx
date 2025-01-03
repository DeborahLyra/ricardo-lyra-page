import { MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { ContactContainer, ContactContent, ContactContentDiv, ContactInfo, ContactInfoContainer } from "./style";
import androsLogo from "/public/static/andros.png"

export function Contact() {
  return (
    <ContactContainer id="contact">
      <h2>Agende uma Consulta</h2>
      <ContactContent>
        <h3>Clínica Andros Recife - Saúde Integral Masculina</h3>
        <ContactContentDiv>
          <ContactInfoContainer>
            <ContactInfo >
              <a href="https://maps.app.goo.gl/LnjP9yiw3BTfvn137" target="_blank"><MapPin size={40} color="#ffff"/></a>
                <p>RioMar Trade Center - Av. República do Líbano, 251 - 206 - Pina, Recife - PE</p>
            </ContactInfo>
            <ContactInfo >
              <a href="https://api.whatsapp.com/send?phone=5581989815885&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Ricardo%20Lyra%20" target="_blank"><WhatsappLogo size={40} color="#ffff"/></a>
              <p>Entre em contato pelo WhatsApp</p>
            </ContactInfo>
            <ContactInfo >
              <a href="tel: (81)9.8981-5885"><Phone size={40} color="#ffff"/></a>
              <p>Telefone para contato: (81)9.8981-5885</p>
            </ContactInfo>
          </ContactInfoContainer>
          <div>
            <img src={androsLogo} alt="andros recife" />
          </div>
        </ContactContentDiv>
      </ContactContent>
      
    </ContactContainer>
  )
}
