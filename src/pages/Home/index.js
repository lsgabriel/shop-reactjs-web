import React from "react";
import Navbar from "../../components/Navbar";

import {HomeContainer} from './styles';
import ButtonSm from "../../components/ButtonSm";
import Card from "../../components/Card";

const Home = () =>{
    return(
        <HomeContainer style={{backgroundColor:"#1B1B1B"}}>
            <div style={{backgroundColor:"#FFC107"}}>
                <Navbar/>
            </div>
            
            <div className="header">
                <div className="text">
                    <h1>StoreStyle</h1>
                    <p>Coleção da linha SB ja disponivel</p>
                    <ButtonSm bg="#0D6EFD" text="Ir as compras"/>
                </div>
            </div>

            <div className="container">
                <h2>Novidades</h2>

                <div className="grid">
                    <Card/> <Card/> <Card/>
                </div>

                <div className="banner banner1">
                    <div className="text">
                        <h2>Cadastre-se para receber novidades</h2>
                        <p>Receba nossas novidades diretamente no seu e-mail ao se cadastrar em nosso site</p>

                        <ButtonSm bg="#0D6EFD" text="Criar Conta"/>
                    </div>
                </div>

                <div className="grid">
                    <Card/> <Card/> <Card/>
                </div>

                <div className="grid">
                    <Card/> <Card/> <Card/>
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
            </div>
        </HomeContainer>
    );
}

export default Home;