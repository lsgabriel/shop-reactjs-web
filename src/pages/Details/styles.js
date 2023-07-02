import styled from "styled-components";

import banner1 from '../../assets/banner1.png';

export const Container = styled.div`

    h2{
        font-size: 2.813rem;color:white;

        @media only screen and (max-width: 500px){
            font-size: 2.2rem;margin-left:0.6rem;
        }
    }

    .primary{
        font-size: 1.8rem;color:white;

        @media only screen and (max-width: 1100px){margin-top:1.3rem;}
        @media only screen and (max-width: 500px){font-size: 1.1rem;margin-top:0;}
    }

    .secondary{font-size:1.1rem;color:white;}

    .first-row{
        display: flex;flex-direction:row;
        @media only screen and (max-width: 500px){flex-direction:column;}

        .gallery, .product-info{
            width: 50vw;
            margin-top: 2rem;

            @media only screen and (max-width: 500px){width: 100vw;}
        }

        .gallery{
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(8, 5vw);
            grid-gap: 15px;
            
                .gallery-img-main{
                    border-radius: 0.25rem;
                    height:56.5vh;
                    @media only screen and (max-width: 1100px){height:100%;}
                    @media only screen and (max-width: 500px){height:100%;}
                }

                .gallery-img{
                    width: 100%;height: 100%;object-fit:contain;transition: .4s;
                    &:hover{transform: scale(1.6);}
                }

                .gallery-item-1{
                    grid-column-start: 2;grid-column-end: 8;
                    grid-row-start: 1;grid-row-end: 5;
                    @media only screen and (max-width: 500px){
                        grid-column-start: 1;grid-column-end: 6;grid-row-end:9;
                    }
                }

                .gallery-item-2{
                    grid-column-start: 2;grid-column-end: 4;grid-row-start: 4;grid-row-end: 9;
                    @media only screen and (max-width: 500px){
                        grid-column-start: 6;grid-column-end: 9;grid-row-start: 5;grid-row-end: 9;
                    }
                }
                .gallery-item-3{
                    grid-column-start:4;grid-column-end: 6;grid-row-start: 4;grid-row-end: 9;
                    @media only screen and (max-width: 500px){
                        grid-column-start: 6;grid-column-end: 9;grid-row-start: 1;grid-row-end: 5;
                    }
                }   
        }

        .product-info{
            padding:1rem;
            @media only screen and (max-width: 500px){margin-bottom:1.5rem;}

            .group{
                line-height: 1rem;margin-bottom:2.6rem;
            }

            h2{
                @media only screen and (max-width: 500px){margin-left:0;}
            }

            .checkboxes{
                display:flex;justify-content:flex-start;align-items:center;
                
                input{background-color:#FFFFFF;height: 35px;width: 25px;margin-right:0.2rem}

                label{color:white;font-size:1.1rem;margin-right:1.5rem;}
            }
        }
    }

    .grid{
        margin-top:2rem;margin-bottom:2.5rem;
        display: flex;align-items:center;justify-content:space-between;
        gap:0.75rem;overflow-x: auto;

        @media only screen and (max-width: 1100px){
            overflow-x: auto;justify-content:flex-start;
        }

        @media only screen and (max-width: 500px){
            overflow-x: auto;justify-content:flex-start;
        }
    }
`;