import { styled } from "styled-components";
import { color_black_light, color_primary_medium } from "../../UI/variables";

const StyledInput = styled.input`
    background-color: ${color_black_light} ;
    width: 1000px;
    height: 50px;
    top: 37px;
    border-radius: 4px;
    border-style: none;
    outline: none;
    &:focus{
        border-bottom: solid 5px  ${color_primary_medium};
    }
    &.input-description{
        height: 150px;
    }

`

const Input = (props) => {
    return(
        <StyledInput className={props.className} type={props.type} placeholder={props.placeholder}/>
    )
    
}

export default Input;