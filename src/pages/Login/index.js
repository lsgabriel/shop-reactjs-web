import React,{useState} from "react";
import {LoginContainer} from './styles';

import Logo from '../../assets/logo1.png';

import ButtonMd from "../../components/ButtonMd";
import eye from '../../assets/eye.png';

import { Link } from "react-router-dom";

const Login = () =>{

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
      setPasswordShown(!passwordShown);
      document.getElementById("icon").style.padding = '13px 9px 13px 9px';
    };

    return(
        <LoginContainer>

            <form>
                <img src={Logo} alt="Logo"/>
                <p>Entre ou crie uma conta nova</p>

                <label className="email-label" for="email">E-mail</label>
                <div>
                    <input type='email' id="email" placeholder='Digite seu e-mail' />
                </div>

                <span>
                    <label for="password">Senha</label><a href="#">Esqueceu a senha?</a>
                </span>
                <div className="password-input">
                    <input type={passwordShown ? "text" : "password"} id="password" placeholder='Digite sua senha' />
                    <img className="eye-icon" id="icon" onClick={togglePassword} src={eye} />
                </div>

                <Link to="/">
                    <ButtonMd bg="#0D6EFD" text="Entrar"/>
                </Link>

                <span className="new-account mt-2">Ainda não tem uma conta? <a href="#">Inscreva-se</a></span>
            </form>

        </LoginContainer>
    );
}

export default Login;