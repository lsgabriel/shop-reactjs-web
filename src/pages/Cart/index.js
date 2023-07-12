import React, {useState} from "react";

import {Container} from './styles';
import Navbar from "../../components/Navbar";

import CardImg from '../../assets/card-img.png';
import ButtonMd from "../../components/ButtonMd";

const Cart = () =>{

    const [count, setCount] = useState(1);

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
                                    <button className="volume" onClick={() => setCount(count - 1)}>-</button>
                                    <button className="qtd">{count}</button>
                                    <button className="volume" onClick={() => setCount(count + 1)}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="price">
                        <h2>Detalhes da Compra</h2>
                        <p>Items: {count}</p>
                        <p>Total: R$ 240.00</p>

                        <div className="payment-confirmation">
                            <button className="btn p-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <ButtonMd bg="#219653" text="Confirmar"/>
                            </button>
                                <span className="mb-2"></span>
                            <ButtonMd bg="#1B1B1B" border="#EB5757" linkColor="#EB5757" text="Cancelar"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-dark" id="exampleModalLabel">Compra Finalizada!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <span className="text-dark">Acompanhe a entrega pelo App ou Site</span>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Cart;