import React from "react";
import styled from "styled-components";
import { color_black_dark, color_grey_light } from "../../UI/variables";

const StyledButton = styled.button`
color: ${color_grey_light};
background-color: ${color_black_dark};
width: 180px;
height: 54px;
border: solid 1px ${color_grey_light };
border-radius: 4px;
margin: 1rem;
`

const Button = (props) => {
    return (
        <StyledButton>{props.text}</StyledButton>
    )
}

export default Button;
