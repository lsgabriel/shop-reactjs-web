import styled from 'styled-components';

export const Btn = styled.button`
    border:none;
    width:13.938rem;height:3.375rem;
    background-color: #0D6EFD;
    display: flex;justify-content:flex-start;
    align-items: center;transition:.2s;
    
    &:hover{background-color:#0E56C0;}

    a{
        text-decoration: none;
        color:white;font-weight: 600;
        font-size: 1.375rem;
        margin-left: 0.60rem;

        @media only screen and (max-width: 500px){
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 500px){
        width:12.838rem;height:2.275rem;
    }
`;