import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 19.5rem;margin-bottom:3rem;
    
    @media only screen and (max-width: 500px){
        margin-left:0.50rem;width:17rem;
    }

    img{
        width: 19.5rem;height:344px;border-radius:0.25rem;
        &:hover{opacity: 0.8;}

        @media only screen and (max-width: 500px){width:17rem;height:324px;}
    }


    .card-text{
        line-height:1.5rem;

        p{color:white}
        .name{
            font-size: 1.875rem;margin-top:1rem;
        }

        .price{
            font-size: 1.375rem;
        }

        span{color:#B6EC57;}
    }
`;