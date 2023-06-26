import React, { useContext } from "react"
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../ContextProvider";
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
    const {
        title,
        setTitle,
        videoLink,
        setVideoLink,
        imageLink,
        setImageLink,
        category,
        setCategory,
        description,
        setDescription,
        securityCode,
        setSecurityCode,
    } = useContext(Context)
    return (
        <StyledNewVideo>
            <form>
                <div className="inputs-wrapper">
                    <h1 className="title">Nuevo Video</h1>
                    <Input type="text"
                        placeholder="Titulo"
                        value={title}
                        setValue={setTitle}
                    />
                    <Input type="text"
                        placeholder="Link del video"
                        value={videoLink}
                        setValue={setVideoLink}
                    />
                    <Input type="text"
                        placeholder="Link imagen de video"
                        value={imageLink}
                        setValue={setImageLink}
                    />
                    <Input type="text"
                        placeholder="Escoja una categoria"
                        value={category}
                        setValue={setCategory}
                    />
                    <Input className="input-description"
                        type="text"
                        placeholder="Descripcion"
                        value={description}
                        setValue={setDescription}
                    />
                    <Input type="text"
                        placeholder="Codigo de seguridad"
                        value={securityCode}
                        setValue={setSecurityCode}
                    />
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
            </form>

        </StyledNewVideo>
    )
}

export default NewVideo;