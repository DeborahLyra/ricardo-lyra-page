import styled from "styled-components";

export const UrologyContainer = styled.div`
    margin: 2rem;

    h2{
        font-family: "Lato", sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--blue-dark);
    }

    a {
        &:hover {
        transform: scale(1.15); 
        }
    }

`

export const DivTitle = styled.div`
 display: flex;
 align-items: center;
 gap: 1rem;
`
export const DivContent = styled.div`

padding: 2rem 4rem;


p, li{
    font-size: 1.2rem;
    font-weight: 400;
    text-align: justify;
}

 h3{
    color: var(--blue-dark);
    margin-top: 1.5rem;
    font-family: "Lato", sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
 }


 @media (max-width: 550px) {
    padding: 2rem;

    h3{
            font-size: 1.5rem;
        }
    }
`