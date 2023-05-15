import styled from "styled-components";

export const Container = styled.div`

    h2{
        font-size: 2.813rem;color:white;

        @media only screen and (max-width: 500px){
            font-size: 2.2rem;margin-left:0.6rem;
        }
    }

    .primary{
        font-size: 1.8rem;color:white;

        @media only screen and (max-width: 500px){
            font-size: 1.1rem;
        }
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
                    height:56.5vh;
                    @media only screen and (max-width: 500px){height:100%;}
                }

                .gallery-img{
                    width: 100%;height: 100%;object-fit:contain;
                    transition: .4s;
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

            .group{
                line-height: 1rem;margin-bottom:2.6rem;
            }

            .top-info{
                display: flex;justify-content:space-between;

                @media only screen and (max-width: 500px){flex-direction:column;}
                h2{
                    @media only screen and (max-width: 500px){margin-left:0;}
                }
            }

            .checkboxes{
                display:flex;justify-content:flex-start;align-items:center;
                
                input{background-color:#FFFFFF;height: 35px;width: 35px;}
                /* input:checked {height: 36px;width: 35px;} */

                label{color:white;font-size:1.2rem;margin-right:1.5rem;}
            }
        }
    }
    
`;