import { styled } from "styled-components";
import { color_black_medium } from "../UI/variables";
import Input from "../Components/Inputs/Input";
import Button from "../Components/Button/Button";
import { color_primary_medium, color_black_lighter, color_grey_light } from "../UI/variables";

const StyledCategory = styled.main`
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
        justify-content: flex-start;
        margin-left: 178px
    }
`

const NewCategory = () => {
    return (
        <StyledCategory>
            <div className="inputs-wrapper">
                <h1 className="title">Nueva Categoria</h1>
                <Input type="text" placeholder="Nueva Categoria" />
                <Input type="text" placeholder="Descripcion" />
                <Input type="color" />
                <Input type="text" placeholder="Codigo de seguridad"/>
            </div>
            <div className="buttons-wrapper">
                    <Button text="Guardar" color={color_primary_medium} />
                    <Button text="Limpiar" color={color_black_lighter} />
            </div>
           
        </StyledCategory>
    )
}

export default NewCategory;