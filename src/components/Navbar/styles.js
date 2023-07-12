import styled from "styled-components";

export const Nav = styled.div`
    
    nav{
        height:10vh;
        .navbar-brand{font-size: 30px;}

        @media only screen and (max-width: 1100px){height:inherit;}

        .navbar-nav{
            a{
                font-weight: 500;
                &:hover{opacity:0.8;}
            }
        }
    }
`;