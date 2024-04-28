import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react'
import { INota } from '../types/types';
import { notasMoc } from './mockup';

export const DataContext = createContext(null);

type IView = 'lista' | 'grade'

const DataProvider = ({ children }:{children: ReactNode}) => {
    const [notas, setNotas] = useState<INota[]>([])
    const [tags, setTags] = useState([])
    const [notaEditanda, setNotaEditanda] = useState(null)
    const [modalEdit, setModalEdit] = useState(false)
    const [asideAberto, setAside] = useState(true)
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
    
    function toggleAside() {
        setAside(prev => !prev)
    }

    async function getData(data:string, setData: Dispatch<SetStateAction<any>>) {
        const endPoint = 'http://localhost:3000'

        try {
            const resposta = await fetch(`${endPoint}/${data}`);
            if (resposta.ok) {
                const dados = await resposta.json()
                setData(dados)
            } else {
                throw new Error(`Erro na requisição de ${data}: ${resposta.status} ${resposta.statusText}`)
            }
        } catch (error) {
            console.error(`Erro ao buscar ${data}: ${error}`);
        }
    }
    
    useEffect(() => {
        getData('notas', setNotas)
        getData('tags', setTags)
    }, [])

    return (
        <DataContext.Provider value={{
            notas, setNotas,
            notaEditanda, setNotaEditanda,
            tags, setTags,
            view, toggleView,
            nomePag, setNomePag,
            modalEdit, abrirModalEdit, fecharModalEdit,
            asideAberto, toggleAside
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider

