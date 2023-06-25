import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { color_black_medium, color_primary_medium, color_black_lighter, color_grey_light } from "../UI/variables";
import Input from "../Components/Inputs/Input";
import Button from "../Components/Button/Button";

export const StyledNewVideo = styled.main`
   
    background-color: ${color_black_medium};
    

    .title{
        color: ${color_grey_light};
        font-size: 3.75rem;
    }
    .inputs-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }
    .buttons-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

`

const NewVideo = () => {
    return (
        <StyledNewVideo>
            <div className="inputs-wrapper">
                <h1 className="title">Nuevo Video</h1>
                <Input type="text" placeholder="Titulo" />
                <Input type="text" placeholder="Link del video" />
                <Input type="text" placeholder="Link imagen de video" />
                <Input type="text" placeholder="Escoja una categoria" />
                <Input className="input-description" type="text" placeholder="Descripcion" />
                <Input type="text" placeholder="Codigo de seguridad" />
            </div>
        
            <div className="buttons-wrapper">
                <div>
                    <Button text="Guardar" color={color_primary_medium} />
                    <Button text="Limpiar" color={color_black_lighter} />
                </div>
                <Link to="/NewCategory">
                    <Button text="Nueva Categoria" color={color_primary_medium} />
                </Link>

            </div>
        </StyledNewVideo>
    )
}

export default NewVideo;