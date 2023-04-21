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
                    <ButtonSm/>
                </div>
            </div>

            <div className="container">
                <h2>Novidades</h2>

                <div className="grid">
                    <Card/> <Card/> <Card/>
                </div>
            </div>
        </HomeContainer>
    );
}

export default Home;