import styled from 'styled-components';

export const Btn = styled.button`
    border:none;border-radius:0.25rem;
    width:16.938rem;height:3.375rem;
    display: flex;justify-content:flex-start;
    align-items: center;transition:.2s;
    border:solid 1px transparent;

    &:hover{opacity: 0.8;}

    a{
        text-decoration: none;
        color:white;font-weight: 600;
        font-size: 1.375rem;
        margin-left: 1rem;

        &:hover{
            opacity: 0.7;
        }

        @media only screen and (max-width: 500px){
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 500px){
        width:12.838rem;height:2.275rem;
    }
`;