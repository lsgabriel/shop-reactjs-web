import styled from 'styled-components';
import headerimg from '../../assets/header-img.png';

export const HomeContainer = styled.div`
    .header{
        background-image: url(${headerimg});
        display: flex;align-items:flex-start;justify-content:center;
        flex-direction:column;
        height:89vh;

        .text{
            color:white;margin-left:7rem;
        }

        h1{
            font-size: 3.3rem;
        }

        p{
            font-size: 1.8rem;
        }
    }
`;