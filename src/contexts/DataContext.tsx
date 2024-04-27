import { createContext, useState, useEffect, ReactNode } from 'react'
import { INota } from '../types/types';
import { notasMoc } from './mockup';

export const DataContext = createContext(null);

const DataProvider = ({ children }:{children: ReactNode}) => {
    const [notas, setNotas] = useState<INota[]>([...notasMoc])
    const [notaEditanda, setNotaEditanda] = useState(null)

    return (
        <DataContext.Provider value={{
            notas, setNotas,
            notaEditanda, setNotaEditanda
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

