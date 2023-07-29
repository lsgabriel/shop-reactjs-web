import React from "react";
import Navbar from "../../components/Navbar";

import {HomeContainer} from './styles';
import ButtonSm from "../../components/ButtonSm";
import Card from "../../components/Card";

import CardImg from '../../assets/card-img.png';
import CardImg2 from '../../assets/card-img2.jpeg';
import CardImg3 from '../../assets/card-img3.png';

import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () =>{
    return(
        <HomeContainer style={{backgroundColor:"#1B1B1B"}}>
            <div style={{backgroundColor:"#0D6EFD"}}>
                <Navbar/>
            </div>
            
            <div className="header" id="header">
                <div className="text">
                    <h1>StoreStyle</h1>
                    <p>Coleção da linha SB ja disponivel</p>
                    <ButtonSm bg="#0D6EFD" text="Ir as compras" link="#shop"/>
                </div>
            </div>

            <div className="container">
                <h2>Novidades</h2>

                <div className="grid">
                    <Card bg={CardImg} title="Nike Flex jacket" span="Frete Gratis"/>
                    <Card bg={CardImg2} title="Nike Two" span="35% desconto"/>
                    <Card bg={CardImg3} title="Nike Full zip jacket" span="Novo"/>
                </div>

                <div className="banner banner1">
                    <div className="text">
                        <h2>Cadastre-se para receber novidades</h2>
                        <p>Receba nossas novidades diretamente no seu e-mail ao se cadastrar em nosso site</p>

                        <Link to='/login'>
                            <ButtonSm bg="#0D6EFD" text="Criar Conta"/>
                        </Link>
                    </div>
                </div>

                <div className="grid" id="shop">
                    <Card bg={CardImg3} title="Nike Full zip jacket" span="Novo"/>
                    <Card bg={CardImg} title="Nike Flex jacket" span="Frete Gratis"/>
                    <Card bg={CardImg} title="Nike Flex jacket" span="Frete Gratis"/>
                </div>

                <div className="grid">
                    <Card bg={CardImg} title="Nike Flex jacket" span="Frete Gratis"/>
                    <Card bg={CardImg2} title="Nike Two" span="35% desconto"/>
                    <Card bg={CardImg} title="Nike Flex jacket" span="Frete Gratis"/>
                </div>

                

                <div className="grid">
                    <Card bg={CardImg2} title="Nike Two" span="35% desconto"/>
                    <Card bg={CardImg3} title="Nike Full zip jacket" span="Novo"/>
                    <Card bg={CardImg} title="Nike Flex jacket" span="Frete Gratis"/>
                </div>

                <div className="banner banner2" >
                    <div className="text">
                        <h2>Faça o download de nosso aplicativo para ter acesso a todas as nossas ofertas exclusivas!</h2>
                        <p>Disponivel para Android e IOS</p>

                        <ButtonSm bg="#1B1B1B" text="Android" />

                        <div className="mt-1">
                            <ButtonSm bg="#1B1B1B" text="IOS" />
                        </div>
                    </div>
                </div>

                <div className="banner banner3" >
                    <div className="text">
                        <h2>Coleção ShirtsX</h2>
                        <p>Comece a montar seu look</p>

                        <ButtonSm bg="#0D6EFD" text="Ver Coleção" />
                    </div>
                </div>

                <Footer/>
            </div>
        </HomeContainer>
    );
}

export default Home;