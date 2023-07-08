import { styled } from "styled-components";
import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { search } from "../../Api/Api";
import gymbanner from "../../Assets/Images/gymbanner.jpg";
import Card from "../Card/VideoCard";
import Button from "../Button/Button";
import {color_primary, color_grey_light } from "../../UI/variables";

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

const Banner = ({url}) => {

    const [posts, setPost] = useState([])

    const {id} = useParams()
    console.log(posts)

    useEffect(() => {
        search(url, setPost)
        .catch( error => console.log(error))
    }, [url])
        const firstPost = posts[0] || {};
         const {title, description, category} = firstPost

    

    return (
        <StyledBanner>
            <StyledDiv>
                    <Button className="btn" color={color_primary}  text={category}/>
                    <h2 className="title">{title}</h2>
                    <p className="des">"{description}</p>
            </StyledDiv>
            <Card/>
        </StyledBanner>
    )
}

export default Banner;