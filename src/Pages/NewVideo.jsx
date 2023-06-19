import { styled} from "styled-components";
import { color_black_medium } from "../UI/variables";

const StyledNewVideo = styled.main`
    background-color: ${color_black_medium};

`

const NewVideo = () => {
    return (
        <StyledNewVideo>
            <h1>Hola</h1>
        </StyledNewVideo>
    )
}

export default NewVideo;