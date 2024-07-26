import styled from "styled-components";

export const ContactContainer = styled.div`
    margin: 2rem;

    h2{
        font-family: "Lato", sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--blue-dark);
        margin-left: 1.5rem;
    }
`

export const ContactContent = styled.div`
    background-color: var(--blue-white);
    padding: 2rem;
    border-radius: 16px;

    h3{
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
`

export const ContactContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img{
    width: 15rem;
  }


  @media (max-width: 770px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

    img{
    display: none;
  }
    }
`
export const ContactInfoContainer = styled.div`
    text-align: left;

    div{
        width: 60%;
        text-align: left;
    }

    @media (max-width: 770px) {
        div{
            width: 100%;
        }
    }
`
export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;

  a{
    background-color: var(--blue-primary);
    border-radius: 8px;
    padding: 0.3rem;

    &:hover {
    transform: scale(1.10); 
    background-color: var(--blue-dark);
  }
  }

  p{
    font-size: 1.2rem;
    font-weight: 400;
  }
`