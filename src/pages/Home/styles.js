import styled from 'styled-components';

import headerimg from '../../assets/header-img.png';

import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';

export const HomeContainer = styled.div`
    
    h1{
        font-size: 3.3rem;

        @media only screen and (max-width: 500px){
            font-size: 2.3rem;
        }
    }

    h2{
        font-size: 2.813rem;color:white;

        @media only screen and (max-width: 500px){
            font-size: 2.2rem;margin-left:0.6rem;
        }
    }

    p{
        font-size: 1.8rem;
        
        @media only screen and (max-width: 500px){
            font-size: 1.1rem;
        }
    }

    .header{
        background-image: url(${headerimg});background-attachment:fixed;
        display: flex;align-items:flex-start;justify-content:center;
        flex-direction:column;height:102vh;margin-bottom:2rem;

        @media only screen and (max-width: 1100px){background-size:cover;}
        @media only screen and (max-width: 500px){align-items:center;}

        .text{
            color:white;margin-left:7rem;

            @media only screen and (max-width: 500px){
                margin-left:0;
            }
        }
    }

    .grid{
        margin-top:2rem;margin-bottom:2.5rem;
        display: flex;align-items:center;justify-content:space-between;

        @media only screen and (max-width: 1100px){
            overflow-x: auto;justify-content:flex-start;
        }

        @media only screen and (max-width: 500px){
            overflow-x: auto;justify-content:flex-start;
        }
    }

    .banner{
        width:82vw;height:23.375rem;flex-direction:column;
        display: flex;align-items:flex-start;justify-content:center;
        margin-bottom:6rem;border-radius:0.50rem;

        @media only screen and (max-width: 1100px){width:92vw;}

        @media only screen and (max-width: 500px){
            width:94vw;height:33rem;background-size: cover;
        }

        .text{
            color:white;margin-left:4rem;

            @media only screen and (max-width: 500px){
                margin-left:1.5rem;
            }

            h2{
                @media only screen and (max-width: 500px){margin-left:0;}
            }

            p{
                width:46rem;
                @media only screen and (max-width: 1100px){width:70vw;}
                @media only screen and (max-width: 500px){width:70vw;}
            }
        }
    }

    .banner1{background-image: url(${banner1});}
    .banner2{background-image: url(${banner2});}
    .banner3{background-image: url(${banner3});}

    footer{

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
        
    }
`;