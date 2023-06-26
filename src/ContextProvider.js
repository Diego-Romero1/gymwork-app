import React, {createContext, useState} from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [securityCode, setSecurityCode] = useState('');


    return (
        <Context.Provider
        value={{
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
        }}
        >
        {children}
        </Context.Provider>
    );
}
