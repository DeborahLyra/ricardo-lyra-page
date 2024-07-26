import styled from "styled-components";


export const HeaderContainer = styled.header`
    background-color: var(--blue-dark);
    color: var(--white);

    padding: 1.5rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 1rem;
  }

`

export const DivIcons = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const DivLogo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: "Lato", sans-serif;

    h2{
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 2px;
        
    }
`
export const DivSmallLogo = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;

    p{
        font-size: 1rem;
        font-weight: 600;
    }
`
