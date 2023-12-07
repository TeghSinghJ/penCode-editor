import React, { createContext, useContext, useState } from 'react'
export const DataContext = createContext();
const DataProvider = ({children}) => {
    const [html, setHtml] = useState('<h1>Hello World</h1>');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    return (
        <DataContext.Provider value={
            { html, setHtml, css, setCss, js, setJs }
        }>
                {children}
        </DataContext.Provider>
    )
}

export default DataProvider
