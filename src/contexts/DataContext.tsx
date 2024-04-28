import { createContext, useState, useEffect, ReactNode } from 'react'
import { INota } from '../types/types';
import { notasMoc } from './mockup';

export const DataContext = createContext(null);

type IView = 'lista' | 'grade'

const DataProvider = ({ children }:{children: ReactNode}) => {
    const [notas, setNotas] = useState<INota[]>([...notasMoc])
    const [notaEditanda, setNotaEditanda] = useState(null)
    const [modalEdit, setModalEdit] = useState(true)
    const [view, setView] = useState('grade')
    const [nomePag, setNomePag] = useState('Notas')

    function abrirModalEdit() {
        setModalEdit(true)
    }

    function fecharModalEdit() {
        setModalEdit(false)
    }

    function toggleView() {
        if (view === 'lista') setView('grade')
        if (view === 'grade') setView('lista')
    }
    
    return (
        <DataContext.Provider value={{
            notas, setNotas,
            notaEditanda, setNotaEditanda,
            view, toggleView,
            nomePag, setNomePag,
            modalEdit, abrirModalEdit, fecharModalEdit
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

