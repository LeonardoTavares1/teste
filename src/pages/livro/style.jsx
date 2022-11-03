import styled from "styled-components";
import { Primario, Secundario } from "../../Style/Paleta";


export const BookAlign = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    

`


export const BookContent = styled.div`
    margin-top: 1rem;
    height: 100%;
    width: 70%;
    min-height: 365rem;
    background-color: ${Secundario};
    display: flex;
    align-items: center;

    flex-direction: column;
    border: 1px solid black;
`

export const TopContent = styled.div`

    background-color: ${Primario};
    width: 100%;
    height: 100%;
    max-height: 30rem;

`

export const Faixa = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    max-height: 5rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 3rem;
`

export const Sinopse = styled.div`
    background-color: transparent;
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    p{
        text-align: justify;
        font-size: 2rem;
        font-weight: 500;
    }

`