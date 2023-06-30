import React, { createContext, useState } from "react";

export const objectContext = createContext();

export const Category = ({ children }) => {

    const [categories, setCategories] = useState([
        {
            "id": "1",
            "name": "Hipertrofia",
            "color": ""
        },
        {
            "id": "2",
            "name": "Fuerza",
            "color": ""
        },
        {
            "id": "3",
            "name": "Calistenia",
            "color": ""
        }
    ]);
    const [category, setCategory] = useState("")

    return (
        <objectContext.Provider
            value={{
                categories,
                setCategories,
                category,
                setCategory
            }}
        >
            {children}
        </objectContext.Provider>
    )
}