import styled from "styled-components";

export const AboutMeContainer = styled.div`
     margin: 2rem;
    min-height: 500px;

    h2{
        font-family: "Lato", sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--blue-dark);
        margin-left: 0.5rem;
    }
`

export const AboutMeContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top:1rem;
    gap: 3rem;

    div {
        max-width: 50%;
    }

    p{
        text-align: justify;
        font-size: 1.015rem;
        font-weight: 500;
    }

    @media (max-width: 1500px) {
        flex-direction: column;
        div{
            align-self: center;
            max-width: 100%;
            text-align: center;
        }
    }

    @media (max-width: 770px) {
        text-align: center;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        gap: 1rem;

    }
`

export const AboutMeImages = styled.div` 
    display: flex;
    gap: 2rem;
    min-height: 400px;
    
    @media (max-width: 900px) {
        text-align: center;

        align-items: center;
        min-height: 300px;
    }

    @media (max-width: 500px) {
        min-height: 200px;
    }
`

export const AboutMeImageHorizontal = styled.img` 
    max-width: 450px;
    max-height: 300px;
    border-radius: 8px;
    align-self: flex-start;

    @media (max-width: 1000px) {
        max-width: 350px;
        max-height: 250px;
        align-self: center;
       
    }

    @media (max-width: 500px) {
        align-self: center;
        max-width: 250px;
    }
`

export const AboutMeImageVertical = styled.img` 
    max-width: 250px;
    border-radius: 8px;
    align-self: flex-end;

    @media (max-width: 1000px) {
        align-self: center;
        max-height: 250px;
    }

    @media (max-width: 600px) {
      display: none;
    }
`

export const AboutMeText = styled.div`
    width: 70%;
`