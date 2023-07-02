import { styled } from "styled-components";
import { color_black_medium, color_grey_light, color_primary_medium } from "../../UI/variables";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    
    table{
         color: ${color_grey_light};
         border: solid 1px ${color_primary_medium};
         border-collapse: collapse;
         margin: 2rem;
    }
    th,td{
        border: solid 2px ${color_primary_medium};
        background-color: ${color_black_medium};
        padding: 0.2rem;
    
    }
   

`

const DataTable = () => {
    return (
        <StyledDiv>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
                <tr>
                    <td>Nombre</td>
                    <td>Descripcion</td>
                    <td>Editar</td>
                    <td>Eliminar</td>
                </tr>
            </table>

        </StyledDiv>
    )
}

export default DataTable