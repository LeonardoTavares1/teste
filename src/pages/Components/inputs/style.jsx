import styled, { css } from "styled-components"
import { Terciaria } from "../../../Style/Paleta"

export const InputDiv = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    max-width: 100%;
    height: 100%;


    svg{
        margin-left: 10px;
        font-size: 20px;
    }

`

export const InputDivD = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    max-width: 100%;
    height: 100%;
    flex-direction: column;

    svg{
        margin-left: 10px;
        font-size: 20px;
    }

`


export const InputLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    background-color: transparent;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    max-width: 100%;
    height: 100%;
    color: black;
    font-size: 1.7rem;
    font-weight: 550;
    
    &:hover{
        color: ${Terciaria};
    }
    
    

`

export const TextArea = styled.textarea`
    background: transparent;
    width: 100%;
    height: 100%;
    outline-width: 0;
    color: #3a3a41de;
    border: none;
    font-size: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    

`

    

export const Input = styled.input`
    background: transparent;
    width: 100%;
    outline-width: 0;
    color: #3a3a41de;
    border: none;
 
    margin-left: 1rem;
    margin-right: 1rem;
    

`


