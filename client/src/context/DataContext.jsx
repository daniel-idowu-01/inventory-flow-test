import { createContext, useState } from "react";

 const DataContext = createContext({})

export function DataProvider({ children }) {

    const [sideBar, setSideBar] = useState(false)

    return (
        <DataContext.Provider value={{ sideBar, setSideBar }}>
            {children} 
        </DataContext.Provider>
    )
}

export default DataContext