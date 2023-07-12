import React from "react";
import {Btn} from './styles';

const ButtonSm = (props) => {
    return (
        <Btn style={{backgroundColor:props.bg}}>
            <a style={{color:"white"}} href={props.link} >
                {props.text}
            </a>
        </Btn>
    );
}

export default ButtonSm;