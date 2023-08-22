import styled from 'styled-components';

import backgroundImg from '../../assets/login-img.png';

export const LoginContainer = styled.div`

    background-image: url(${backgroundImg});background-attachment:fixed;
    height:100vh;display: flex;justify-content:center;align-items:center;

    @media only screen and (max-width: 900px){background-size:cover;}
    @media only screen and (max-width: 500px){background-image:none;background-color: #1B1B1B;}

    form{
        display: flex;justify-content:center;align-items:center;
        flex-direction:column;color:white;width:80vw;

        p{
            font-size: 1.5rem;
            @media only screen and (max-width: 500px){font-size: 1.1rem;}
        }

        label{font-weight:600;font-size:18px;}

        .email-label{
            width:28vw;
            @media only screen and (max-width: 1100px){width:47vw;}
            @media only screen and (max-width: 500px){width:80vw;}
        }

        input[type='email']{
            width:384px;margin-bottom:1.4rem;
            border:solid 2px #E2E8F0;
            border-radius:0.25rem;
            padding: 12px 8px 12px 8px;
            transition: .3s;

            ::placeholder,::-webkit-input-placeholder {
                color: #94A3B8;
            }

            &:hover{border:solid 2px #0D6EFD;}
            @media only screen and (max-width: 450px){width:80vw;}
        }

        span{
            display: flex;justify-content:space-between;width:384px;
            @media only screen and (max-width: 450px){width:80vw;}

            a{
                font-weight:600;color:#0D6EFD;text-decoration:none;
                &:hover{text-decoration:underline;color:whitesmoke}
            }
        }

        input[type='password']{
            border:none;padding: 12px 8px 12px 8px;width:384px;

            ::placeholder,::-webkit-input-placeholder {
                color: #94A3B8;
            }
        }

        .password-input{
            display: flex;width:384px;
            justify-content: space-between;align-items:center;
            flex-direction: row;
            border-radius:0.25rem;
            margin-bottom:1.8rem;
            background-color: #FFFFFF;
            border:solid 2px #E2E8F0;
            transition: .3s;

            &:hover{border:solid 2px #0D6EFD;}
               
            .eye-icon{
                padding-right:12px;
            }
            @media only screen and (max-width: 450px){width:80vw;}
        }
    }
`