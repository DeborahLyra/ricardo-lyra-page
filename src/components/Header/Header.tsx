import { DivIcons, DivLogo, DivSmallLogo, HeaderContainer } from "./styles";
import logoIcon from '/public/static/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <DivIcons>
               <img src={logoIcon} className="rounded-md h-20"/>
            </DivIcons>
            <DivLogo>
                <h2>Ricardo Lyra</h2>
                <DivSmallLogo> 
                <p>Andrologia | Urologia</p>
                </DivSmallLogo>
            </DivLogo>
        </HeaderContainer>
    )
}
