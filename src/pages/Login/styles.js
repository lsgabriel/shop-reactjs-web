import styled from 'styled-components';

export const LoginContainer = styled.div`
    background-color: #1B1B1B;
    height:100vh;display: flex;
    justify-content:center;align-items:center;

    form{
        display: flex;justify-content:center;
        align-items:center;flex-direction:column;
        color:white;width:80vw;

        h1{
            font-size: 3.3rem;
            @media only screen and (max-width: 500px){font-size: 2.3rem;}
        }

        p{
            font-size: 1.8rem;
            @media only screen and (max-width: 500px){font-size: 1.1rem;}
        }

        label{font-weight:600;font-size:18px;}
        .email-label{
            width:28vw;
            @media only screen and (max-width: 500px){width:80vw;}
        }

        input[type='email']{
            width:384px;margin-bottom:1.4rem;
            border:solid 2px #E2E8F0;
            border-radius:0.25rem;
            padding: 12px 8px 12px 8px;

            ::placeholder,::-webkit-input-placeholder {
                color: #94A3B8;
            }
            @media only screen and (max-width: 450px){width:80vw;}
        }

        span{
            display: flex;justify-content:space-between;width:384px;
            @media only screen and (max-width: 450px){width:80vw;}
            a{
                font-weight:600;color:#0D6EFD;text-decoration:none;
                &:hover{text-decoration:underline;}
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
               
                .eye-icon{
                    padding-right:12px;
                }
                @media only screen and (max-width: 450px){width:80vw;}
        }
    }
`