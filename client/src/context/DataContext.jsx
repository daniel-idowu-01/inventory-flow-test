import { createContext, useState } from "react";

 const DataContext = createContext({})

export function DataProvider({ children }) {

    const [items, setItems] = useState('Hello')

    return (
        <DataContext.Provider value={{ items }}>
            {children} 
        </DataContext.Provider>
    )
}

export default DataContext