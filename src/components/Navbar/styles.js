import styled from "styled-components";

export const Nav = styled.div`
    
    nav{

        .navbar-brand{
            font-size: 30px;
        }

        .navbar-nav{
            a{
                font-weight: 600;
                border-bottom:solid 1px transparent;
                &:hover{border-bottom:solid 1px whitesmoke;}
            }
        }
    }
`;