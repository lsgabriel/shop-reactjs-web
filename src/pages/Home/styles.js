import styled from 'styled-components';
import headerimg from '../../assets/header-img.png';

export const HomeContainer = styled.div`

    h1{
        font-size: 3.3rem;

        @media only screen and (max-width: 500px){
            font-size: 2.3rem;
        }
    }

    h2{
        font-size: 2.813rem;
        color:white;

        @media only screen and (max-width: 500px){
            font-size: 2.2rem;margin-left:0.6rem;
        }
    }

    .header{
        background-image: url(${headerimg});
        display: flex;align-items:flex-start;justify-content:center;
        flex-direction:column;
        height:89vh;margin-bottom:2rem;

        @media only screen and (max-width: 500px){
            height:93vh;align-items:center;
        }

        .text{
            color:white;margin-left:7rem;

            @media only screen and (max-width: 500px){
                margin-left:0;
            }
        }

        p{
            font-size: 1.8rem;

            @media only screen and (max-width: 500px){
                font-size: 1.1rem;
            }
        }
    }

    .grid{
        margin-top:2rem;margin-bottom:2.5rem;
        display: flex;align-items:center;justify-content:space-between;

        @media only screen and (max-width: 500px){
            /* width:90vw;flex-direction:column; */
            overflow-x: auto;justify-content:flex-start;
            /* justify-content:flex-start;align-items:center; */
        }
    }
`;