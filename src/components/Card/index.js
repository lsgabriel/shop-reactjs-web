import React from "react";

import {CardContainer} from './styles';
import CardImg from '../../assets/card-img.png';

const Card = () => {
    return (
        <CardContainer>
            <img src={CardImg} />
            <div className="card-text">
                <p className="name">Nike Air 4</p>
                <p className="price">R$ 240.00</p>

                <span>Frete Gratis</span>
            </div>
        </CardContainer>
    );
}

export default Card;