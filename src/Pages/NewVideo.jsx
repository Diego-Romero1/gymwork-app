import { styled} from "styled-components";
import { color_black_medium} from "../UI/variables";
import Input from "../Components/Inputs/Input";
import Button from "../Components/Button/Button";

const StyledNewVideo = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${color_black_medium};
    gap: 50px;

`

const NewVideo = () => {
    return (
        <StyledNewVideo>
            <h1>Nuevo Video</h1>
            <Input type="text" placeholder="Titulo"/>
            <Input type="text" placeholder="Link del video"/>
            <Input type="text" placeholder="Link imagen de video"/>
            <Input type="text" placeholder="Escoja una categoria"/>
            <Input className="input-description"  type="text" placeholder="Descripcion"/>
            <Input type="text" placeholder="Codigo de seguridad"/>
        </StyledNewVideo>
    )
}

export default NewVideo;