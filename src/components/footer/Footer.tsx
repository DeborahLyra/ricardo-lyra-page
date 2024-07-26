import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { DivLogo, DivSmallLogo, FooterContainer, FooterDivLinks } from "./style";


export function Footer() {
    return (
        <FooterContainer>
            <DivLogo>
                <h2>Ricardo Lyra</h2>
                <DivSmallLogo>
                    <p>Andrologia | Urologia</p>
                </DivSmallLogo>
            </DivLogo>
            <FooterDivLinks>
                <a href="https://www.instagram.com/ricardolyraandrologista/" target="_blank"><InstagramLogo size={32} /></a>
                <a href="https://br.linkedin.com/in/ricardo-lyra-b937b531?original_referer=" target="_blank"><LinkedinLogo size={32} /></a>
                <a href="https://www.facebook.com/ricardo.andrologista/?locale=pt_BR" target="_blank"><FacebookLogo size={32} /></a>
            </FooterDivLinks>
        </FooterContainer>
    )
}
