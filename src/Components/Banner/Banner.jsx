import { styled } from "styled-components";
import gymbanner from "../../Assets/Images/gymbanner.jpg"

const StyledBanner = styled.div`
    background-image: url(${gymbanner});
    background-repeat: no-repeat;
    width: 100%;
    height: 400px
`

const Banner = () => {
    return (
        <StyledBanner>
        </StyledBanner>
    )
}

export default Banner