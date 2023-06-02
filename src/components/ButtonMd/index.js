import React from "react";
import {Btn} from './styles';

const ButtonMd = (props) => {
    return (
        <Btn style={{backgroundColor:props.bg,borderWidth:2,borderColor:props.border}}>
            <a href="#" style={{color:props.linkColor}}>
                {props.text}
            </a>
        </Btn>
    );
}

export default ButtonMd;