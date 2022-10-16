import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html,body{
        height: 100%;
        width: 100%;
        text-rendering: optimizeLegibility;
        font-family: arial;
    }
    html{
        font-size: 62.5%;
    }
    #root{
        height: 100%;
        width: 100%;
        display: flex;
    }
    .link{
        text-decoration: none;
    }
    a{
        color: #333333;
    }
    body::-webkit-scrollbar{
        width:10px;
    }
    body::-webkit-scrollbar-track{
        background:azure;
    }
    body::-webkit-scrollbar-thumb{
        background:gray;
        border-radius:20px;
        border: 3px solid azure;
    }


`;

export default GlobalStyle;

// Celular  = 600px
// Tablet  = 768px
//                  -->   width
// Laptop  = 992px
// Desktop  = 1200px