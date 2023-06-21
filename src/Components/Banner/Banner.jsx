import { styled } from "styled-components";
import gymbanner from "../../Assets/Images/gymbanner.jpg";
import Card from "../Card/VideoCard";
import Button from "../Button/Button";
import {color_primary, color_frontend, color_grey_light } from "../../UI/variables";

const StyledBanner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-image: url(${gymbanner});
    background-repeat: no-repeat;
    width: 100%;
    height: 400px;
   
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
   
    align-items: center;
    .title{
        color: ${color_grey_light};
        font-size: 46px;
        font-weight: 400;
    }
    .des{
        color: ${color_grey_light};
        font-weight: 300;
        font-size: 18px;
    }
`

const Banner = () => {
    return (
        <StyledBanner>
            <StyledDiv>
            <Button className="btn" color={color_primary}  text="Hipertrofia"/>
            <h2 className="title">Gane mas musculo</h2>
            <p className="des">La hipertrofia es ejercitarse para estimular los mosculos</p>
            </StyledDiv>
            <Card/>
        </StyledBanner>
    )
}

export default Banner;