import React, {useContext} from "react";
import { styled } from "styled-components";
import { objectContext } from "../../ContextProviders/ObjectProvider";
import { color_black_light, color_primary_medium } from "../../UI/variables";

const StyledSelect = styled.select`
    background-color: ${color_black_light} ;
    width: 1000px;
    height: 50px;
    top: 37px;
    border-radius: 4px;
    border-style: none;
    outline: none;
    &:focus{
        border-bottom: solid 5px  ${color_primary_medium};
    }
`

const CategoryOption = () => {
    const {categories, setCategories} = useContext(objectContext);
    const {category, setCategory} = useContext(objectContext)

    const categoriesMapped = categories.map((catagory) => catagory.name)

    const manageChange = (e) => {
        // const selectedCategoryId = e.target.value;
        // const selectedCategory = categories.find((category) => category.id === selectedCategoryId);
        // if (selectedCategory) {
        //     setCategory(selectedCategory)
        // }
        // console.log(selectedCategoryId)
        setCategory(e.target.value)
           
    }

    return(
        <StyledSelect value={category} onChange={manageChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
            {categoriesMapped.map((category, index) => <option key={index} value={category}>{category}</option>)}
        </StyledSelect>
    )
}

export default CategoryOption;