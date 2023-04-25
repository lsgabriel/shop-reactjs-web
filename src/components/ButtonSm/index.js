import React from "react";
import {Btn} from './styles';

const ButtonSm = (props) => {
    return (
        <Btn style={{backgroundColor:props.bg}}>
            <a href="#">
                {props.text}
            </a>
        </Btn>
    );
}

export default ButtonSm;