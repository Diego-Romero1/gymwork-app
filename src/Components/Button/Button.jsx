import React from "react";
import styled from "styled-components";
import { color_grey_light } from "../../UI/variables";

const StyledButton = styled.button`
color: ${color_grey_light};
background-color: ${(props) => props.color};
width: 180px;
height: 54px;
border: solid 1px ${color_grey_light };
border-radius: 4px;
margin: 1rem;

&.btn{
    width: 296px;
    height: 92px;
}
`

const Button = (props) => {
    return (
        <StyledButton className={props.className} color={props.color}>{props.text}</StyledButton>
    )   
}


export default Button;
