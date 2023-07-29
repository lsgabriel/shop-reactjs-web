import React from "react";

import {CardContainer} from './styles';

import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <CardContainer>
            <Link to='/details' style={{textDecoration:"none"}}>
                <img src={props.bg} />
                <div className="card-text">
                    <p className="name">{props.title}</p>
                    <p className="price">R$ 240.00</p>

                    <span>{props.span}</span>
                </div>
            </Link>
        </CardContainer>
    );
}

export default Card;