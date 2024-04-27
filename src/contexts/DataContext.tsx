import { createContext, useState, useEffect, ReactNode } from 'react'

export const DataContext = createContext(null);

const DataProvider = ({ children }:{children: ReactNode}) => {
    const [, ] = useState([]);
    
    return (
        <DataContext.Provider value={{ ,  }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

