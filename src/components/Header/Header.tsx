import { DivIcons, DivLogo, DivSmallLogo, HeaderContainer } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <DivIcons>
               <img src="../../../public/static/logo.svg" className="rounded-md h-20"/>
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
