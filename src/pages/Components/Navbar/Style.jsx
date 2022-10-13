import styled from "styled-components";


const Container = styled.div`

    background-color: #ffafcc;
    display: flex;
    flex-direction: row;
    height: 100%;
    height: 100%;
    @media (min-widht: 600px) {
        #root{
            display: flex;
        }
        
    }

`;

const Navbar = styled.div`

    background-color: #56CBF9;
    width: 100%;
    margin-right: 100%;
    display: flex;
    justify-content: space-between;

`;

const ProfileContainer = styled.div`

    display: flex;
    align-items: center;
    gap: 1rem;

`;

const Image = styled.img`

    width: 7rem;
    height: 6rem;
    margin-left: 3rem;

`;

const Title = styled.h2`

    font-size: 2rem;
    font-family: Century Gothic;
    margin-left: 1rem;

`;

const Links = styled.ul`

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

const Link = styled.li`

    text-decoration: none;

`;

export const link = styled.a`

    text-decoration: none;
    font-size: 50px;

`;

export {Container, Navbar, ProfileContainer, Image, Title, Link , Links};