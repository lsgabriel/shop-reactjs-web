import React from "react";
import Logo from '../../assets/logo.png';

import {FooterContainer} from './styles';

const Footer = () =>{
    return(
        <FooterContainer className="bg-primary row">
            <div className="logo-footer col-md-5">
                <a href="#header">
                    <img src={Logo} alt="Logo do Site" />
                </a>
            </div>

            <ul className=" col-md-3">
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Ajuda</a></li>
            </ul>

            <ul className=" col-md-4">
                <li><a href="#">Trocas e Devoluções</a></li>
                <li><a href="#">Atendimento ao Cliente</a></li>
                <li><a href="#">Termos e condições de uso</a></li>
            </ul>
        </FooterContainer>
    );
}

export default Footer;