import styled from 'styled-components';

export const Container = styled.div`
    
   button {
        background-color: transparent;
        border: none;outline: none;
        cursor: pointer;width:2.5rem;

        span{
            font-size:1.6rem;transition: .4s;
            @media only screen and (max-width: 500px){font-size:1.3rem;}
        }
    }

    .on {color: #B6EC57;}
    .off {color: #9C9C9C;}

    @media only screen and (max-width: 500px){margin-bottom:1rem}
`;