import { styled } from "styled-components";
import { color_frontend } from "../../UI/variables";

const StyledCard = styled.video`
    border-radius: 4px;
    box-sizing: border-box;
    border: solid 1px ${color_frontend};
`

const Card = (props) => {
    return(
        <StyledCard controls src="https://www.youtube.com/embed/tIUuqZaq_8s"></StyledCard>
    )
}

export default Card;