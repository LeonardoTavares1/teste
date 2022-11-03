import styled from "styled-components";

export const Botao = styled.button`

        width: 85%;
        background-color: #ffffff;
        color: black;
        font-weight: 800;
        height: 100%;
        border-radius: 5px;
        font-size: 18px;
        border: none;
        font-family: Century Gothic;

        outline-width: 0;

        &:hover{
            background-color: #F05365;
            color: #EFF2F5;
            cursor: pointer;
        }

`

export const BotaoD = styled.button`

        background-color: transparent;
        color: black;
        font-weight: 800;
        height: 100%;
        min-height: 2rem;
        width: 100%;
        max-width: 10rem;
        border-radius: 5px;
        font-size: 18px;
        border: none;
        font-family: Century Gothic;

        outline-width: 0;

        &:hover{
          
            color: #F05365;
            cursor: pointer;
        }

`