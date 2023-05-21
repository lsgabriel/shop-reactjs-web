import styled from "styled-components";

export const FooterContainer = styled.footer`

    .logo-footer{
        display: flex;justify-content:flex-start;align-items:center;
        img{
            margin-left:1.5rem;
            
            @media only screen and (max-width: 500px){margin-left:0;margin-block:1rem;}
        }
    }

    ul{
        margin-top: 0.50rem;

        li{list-style-type:none;}
    }
    a{
        color:white;text-decoration:none;
        font-size:1.125rem;font-weight:500;
        border:solid 1px transparent;
        transition:.2s;          

        &:hover{opacity: 0.7;margin-left:0.4rem;}

        @media only screen and (max-width: 500px){font-size:1.375rem;}
    }
`;