import React from "react";
import Logo from '../../assets/logo1.png';

import {FooterContainer} from './styles';

const Footer = () =>{
    return(
        <div>
        <FooterContainer className="bg-primary row">
            <div className="logo-footer col-md-7">
                <a href="#header">
                    <img src={Logo} alt="Logo do Site" />
                </a>
            </div>

            <ul className="col-md-2">
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Ajuda</a></li>
            </ul>

            <ul className="col-md-3">
                <li><a href="#">Trocas e Devoluções</a></li>
                <li><a href="#">Atendimento ao Cliente</a></li>
                <li><a href="#">Termos e condições de uso</a></li>
            </ul>
        </FooterContainer>

        <FooterContainer style={{backgroundColor:"#1B1B1B"}} className="row">
            <span className="text-light text-center mt-3 mb-3">2023 - Interface desenvolvida por Gabriel</span>
        </FooterContainer>
        </div>
    );
}

export default Footer;