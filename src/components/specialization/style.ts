import styled from "styled-components";

export const SpecializationContainer = styled.div`
    margin: 2rem;

    h2{
        font-family: "Lato", sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--blue-dark);
        margin-left: 1.5rem;
    }
`

export const SpecializationContent = styled.div`
   display: flex;
    justify-content: space-around;
    align-items: center;
    padding:2rem 1rem;
    margin: 1rem;
    border-radius: 16px;


    background-color: var(--blue-white);

    @media (max-width: 770px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
   border: 2px solid #d9d9de;
   width: 30%;
   min-height: 350px;
   border-radius: 8px;
   text-align: center;

   img {
    height: 70px;
   }

   h3{
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem;
   }

   &:hover{
    border: 2px solid var(--blue-light);
   }

   @media (max-width: 770px) {
    width: 100%;
    }
`
export const DivImg = styled.div`
   background-color: var(--blue-medium);
   display: inline-block;
   padding: 10px;
   border-radius: 8px;
`

export const Button = styled.button`
   background-color: transparent;
   color: var(--blue-medium);
   margin: 0.5rem auto;
   font-size: 1.2rem;
   font-weight: 600;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.4rem;

   &:hover{
    color: var(--blue-light);

    .arrow {

      transform: translateX(8px);
      transition: transform 0.5s ease-in-out;
    }
   }
`