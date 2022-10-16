import styled from "styled-components";
import { Primario } from "../../../Style/Paleta";


export const Navbar = styled.div`

    background-color: ${Primario};
    width: 100%;
    height: 8%;

    margin-right: 100%; 
    display: flex;
    justify-content: space-between;

`;

export const ProfileContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

`;

export const Image = styled.img`

    width: 7rem;
    height: 6rem;
    margin-left: 3rem;

`;

export const Title = styled.h2`

    font-size: 2rem;
    font-family: Century Gothic;
    margin-left: 1rem;

`;

export const Links = styled.ul`

    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    font-size: 16px;
    font-weight: bold;
    font-family: Century Gothic
    ;
    margin-right: 3rem;

`;

export const Link = styled.li`

    text-decoration: none;

`;

export const link = styled.a`

    text-decoration: none;
    font-size: 50px;

`;

