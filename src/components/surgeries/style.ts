import styled from "styled-components";

export const SurgeriesContainer = styled.div`
  margin: 2rem;

  h2 {
    font-family: "Lato", sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin-left: 1.5rem;
  }

`;

export const DivSurgeriesCardText = styled.div`
  width: 70%;
  margin: 0 auto;
  p {
      text-align: center;
      font-size: 1.3rem;
      font-weight: 400;
      margin-top: 0.5rem;
    
    }

    @media (max-width: 768px) {
      p {
        font-size: 1rem;
      }
  }
`

export const SurgeriesContent = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto; 
  padding: 1rem; 

  &::-webkit-scrollbar {
    height: 8px; 
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0; 
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--blue-medium-dark);
    border-radius: 8px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--blue-medium); 
  }

`;

export const DivSurgeriesCard = styled.div`
  margin: 1rem;
  background-color: var(--blue-medium-dark);
  padding: 1rem;
  border-radius: 16px;
  color: var(--white);
  width: 250px;
  flex-shrink: 0;
  text-align: center;
  transition: transform 0.3s ease; 

  &:hover {
    transform: scale(1.10); 
    background-color: var(--blue-dark);
  }

  img {
    width: 4rem;
    max-height: 3rem;
    background-color: var(--blue-primary);
    border-radius: 8px;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 0.5rem 0;
    text-align: center;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 200px; 
  }
`;



