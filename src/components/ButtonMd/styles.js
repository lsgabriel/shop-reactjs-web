import styled from 'styled-components';

export const Btn = styled.button`
    border:none;border-radius:0.25rem;
    width:24rem;height:3.375rem;
    display: flex;justify-content:center;
    align-items: center;transition:.2s;
    border:solid 1px transparent;
    padding: 12px 8px 12px 8px;

    &:hover{opacity: 0.8;}

    a{
        text-decoration: none;
        color:white;font-weight: 600;
        font-size: 1.375rem;
        margin-left: 0.60rem;

        &:hover{
            opacity: 0.7;
        }

        @media only screen and (max-width: 500px){
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 500px){
        width:18.2rem;height:3rem;
        
    }
`;