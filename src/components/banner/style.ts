import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: var(--blue-medium);
    margin: 1.5rem;
    padding: 2rem 8rem;
    color: var(--white);
    border-radius: 16px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 4rem;

    font-family: "Lato", sans-serif;

    div {
        max-width: 600px;
    }

    img {
        max-width: 450px;
        height: 550px;
        border-radius: 8px;
    }

    h1 {
        font-size: 5rem;
        font-weight: 800;
    }

    p{
        font-size: 1.2rem;
        font-weight: 500;
    }

    @media (max-width: 900px) {
        text-align: center;
        flex-direction: column;
        gap: 4rem;
  }

    @media (max-width: 500px) {
        text-align: center;
        flex-direction: column;
        gap: 4rem;

        h1 {
        font-size: 4rem;
        }
        img {
            max-width: 250px;
            max-height: 350px;
        }
  }
`

export const DivButtons = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 4rem;

    button{
        background-color: var(--blue-dark);
        padding: 15px 10px;
        border-radius: 8px;
        font-size: 1.2rem;

        &:hover{
            background-color: var(--blue-medium-light);
        }
    }

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 1rem;
  }

    @media (max-width: 500px) {
        flex-direction: column;
        gap: 1rem;
  }

`

