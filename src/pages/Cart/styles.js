import styled from "styled-components";

export const Container = styled.div`
    background-color:#1B1B1B;height:100vh;

    h1{
        color: white;padding-top:1.5rem;font-size: 2.813rem;

        @media only screen and (max-width: 500px){font-size: 2.2rem;}
    }

    p{
        color: white;font-size: 1.8rem;
        
        @media only screen and (max-width: 500px){
            font-size: 1.1rem;
        }
    }

    .row{
        .items{
            width: 40vw;
            @media only screen and (max-width: 1100px){width:100vw}
            @media only screen and (max-width: 500px){width:95vw}

            .item-card{
                display: flex;flex-direction:row;
                margin-bottom: 1.5rem;gap:0.50rem;
                margin-top: 1.8rem;

                img{width:40%;}
                .text{
                    width:48%;

                    p{font-size: 1.7rem;color:white;}

                    .buttons{
                        width:55vw;

                        button{
                            width:3.7rem;margin-inline-end: 0.5rem;
                            font-weight:600;color:white;padding:0.4rem;
                            @media only screen and (max-width: 500px){width:3.5rem;padding:0.2rem;}
                        }
                        .volume{
                            background-color: #0D6EFD;border:solid 2px #0D6EFD;
                            &:hover{opacity:0.7}
                        }

                        .qtd{
                            background-color: #1B1B1B;border:solid 2px #D9D9D9;
                        }
                    }
                }
            }
        }

        .price{
            width: 43vw;text-align:center;
            @media only screen and (max-width: 1100px){width:100vw;margin-top:1.5rem}
            @media only screen and (max-width: 500px){width:100vw;margin-top:1.5rem}

            .payment-confirmation{
                display: flex;justify-content:center;
                flex-direction:column;align-items:center;
                margin-block:1rem;
            }
        }
    }
`;