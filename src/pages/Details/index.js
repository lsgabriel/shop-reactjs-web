import React from "react";
import {Container} from './styles';

import Navbar from "../../components/Navbar";

import CardImg from '../../assets/card-img.png';
import StarRating from "../../components/StarRating";
import ButtonSm from "../../components/ButtonSm";

import Card from "../../components/Card";

import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Details = () =>{
    return(
        <Container style={{backgroundColor:"#1B1B1B"}}>

            <div style={{backgroundColor:"#0D6EFD"}}>
                <Navbar/>
            </div>
            
            <div className="first-row container">
                <div className="gallery">

                        <div class="gallery-item gallery-item-1">
                            <img src={CardImg} class="gallery-img-main"/>
                        </div>

                        <div class="gallery-item gallery-item-2">
                            <img src={CardImg} class="gallery-img"/>
                        </div>

                            
                        <div class="gallery-item gallery-item-3">
                            <img src={CardImg} class="gallery-img"/>
                        </div>
                </div>


                <div className="product-info">
                   <div className="group">
                        <div className="top-info">
                            <h2>Nike Air X</h2>
                            <StarRating/>
                        </div>
                        <p className="primary">R$ 240.00</p>
                   </div>

                   <div className="group">
                        <p className="primary">Cor</p>
                        <span className="secondary">Verde/Branco</span>
                    </div>

                    <div className="group">
                        <p className="primary">Tamanho</p>
                        
                        <div className="checkboxes">
                            <input id="Checkbox1" name="Checkbox1" type="checkbox" value="Admin" />
                            <label for="Checkbox1">M</label>

                            <input id="Checkbox1" name="Checkbox1" type="checkbox" value="Admin" />
                            <label for="Checkbox1">G</label>

                            <input id="Checkbox1" name="Checkbox1" type="checkbox" value="Admin" />
                            <label for="Checkbox1">GG</label>
                        </div>
                    </div>

                    <ButtonSm bg="#0D6EFD" text="Adicionar ao carrinho"/>
                </div>
            </div>

            <div className="container">
                <h2>Talvez você tambem goste</h2>

                <div className="grid">
                    <Card/> <Card/> <Card/>
                </div>

                <Footer/>
            </div>
            
        </Container>
    );
}

export default Details;