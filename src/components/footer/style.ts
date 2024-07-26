import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--blue-dark);
    color: var(--white);
   padding: 1rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


    @media (max-width: 500px) {
        justify-content: center;
  }
`
export const DivLogo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: "Lato", sans-serif;

    h2{
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 2px;
        
    }

    @media (max-width: 500px) {
        h2{
            display: none;
        }
  }
`

export const DivSmallLogo = styled.div`
    display: flex;
    gap: 0.5rem;

    p{
        font-size: 0.8rem;
        font-weight: 600;
    }

    @media (max-width: 500px) {
        p{
            display: none;
        }
  }
`
export const FooterDivLinks = styled.div`
    display: flex;
    gap: 1.5rem;
`