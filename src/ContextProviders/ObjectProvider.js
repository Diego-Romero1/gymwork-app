import React, { createContext, useState, useEffect } from "react";
import { search } from "../Api/Api";

export const objectContext = createContext();

export const Category = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search("/categories", setCategories)
    }, [])

    useEffect(() => {
        search("/videos", setVideos)
    }, [])

    const filteredVideos = videos.filter(video => video.category === category.name)


    console.log(categories)

    return (
        <objectContext.Provider
            value={{
                categories,
                setCategories,
                category,
                setCategory,
                filteredVideos
            }}
        >
            {children}
        </objectContext.Provider>
    )
}