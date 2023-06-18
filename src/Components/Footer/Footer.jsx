import { styled } from "styled-components";
import gymwork from "../../Assets/Images/gymwork.png"
import { color_black_dark, color_primary } from "../../UI/variables";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color_black_dark};
    border-top: solid 1px ${color_primary};

`

const Footer = () => {
    return(
        <StyledFooter>
            <img src={gymwork} alt="Logo" />
        </StyledFooter>
    )
}

export default Footer