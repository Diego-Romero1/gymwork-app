import { styled } from "styled-components";
import { color_black_dark } from "../../UI/variables";
import Button from "../Button/Button";
import gymwork from "../../Assets/Images/gymwork.png";
import NewVideo from "../../Pages/NewVideo";
import Home from "../../Pages/Home";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${color_black_dark };
    border: solid 1px ${color_black_dark };
`
const StyledImg = styled.img`
    width:168.45px; 
    height: 40px;
    cursor: pointer;

`

const Header =() => {
    return(
        <StyledHeader>
            <Link to="/"><StyledImg src={gymwork} alt="GymWork Logo"/></Link>
            <Link to="/NewVideo">
            <Button color={color_black_dark} text="Nuevo Video"/>
            </Link>
        </StyledHeader>
        
    )
}

export default Header