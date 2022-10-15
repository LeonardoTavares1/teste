import styled from "styled-components";
import { Primario } from "../../Style/Paleta";

export const Cadastrar = styled.form`
    background-color: ${Primario};
    border-radius: 5px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12rem;
    margin-bottom: 12rem;
    min-width: 30vw;
    min-height: 50vh;

    h1 {
        font-size: 30px;
        font-family: Century Gothic;
        margin-bottom: 10%;
    }

    h4 {
        margin-top: 2rem;
        font-size: 15px;
        font-weight: 700;
        color: rgb(0, 0, 0);
    }

    a {
        margin-top: 2rem;
        color: black;
        font-size: 15px;
    }


`