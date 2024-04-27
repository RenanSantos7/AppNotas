import { useContext, useEffect } from 'react'
import { DataContext } from '../../contexts/DataContext'
import { INota } from '../../types/types'
import { Nota, ListaNotas } from '../../components'
import { Box } from '@mui/material'

interface Contexto {
	notas: INota[]
}

export default function Home() {
	const { notas }: Contexto = useContext(DataContext)

	return (
        <>
		    <ListaNotas>
    			{notas.map(nota => (
    				<Nota nota={nota} key={nota.id} />
    			))}
    		</ListaNotas>
		</>
	)
}
