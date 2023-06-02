import React from "react";
import {Container} from './styles';
import Navbar from "../../components/Navbar";

import CardImg from '../../assets/card-img.png';

import ButtonMd from "../../components/ButtonMd";

const Cart = () =>{
    return(
        <Container>
            <div style={{backgroundColor:"#0D6EFD"}}>
                <Navbar/>
            </div>

            <div className="container">
                <h1>Carrinho</h1>

                <div className="row">
                    <div className="items">

                        <div className="item-card">
                            <img src={CardImg} />
                            <div className="text">
                                <p>Nike Air 4</p>
                                <p>R$ 240.00</p>

                                <div className="buttons">
                                    <button className="volume">-</button>
                                    <button className="qtd">1</button>
                                    <button className="volume">+</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="price">
                        <h1>Detalhes da Compra</h1>
                        <p>Items: 1</p>
                        <p>Total: R$ 240.00</p>

                        <div className="payment-confirmation">
                            <ButtonMd bg="#219653" text="Confirmar"/>
                                <span className="mb-2"></span>
                            <ButtonMd bg="#1B1B1B" border="#EB5757" linkColor="#EB5757" text="Cancelar"/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Cart;