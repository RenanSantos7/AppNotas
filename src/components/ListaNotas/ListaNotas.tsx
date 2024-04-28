import styled from 'styled-components'
// import styles from './ListaNotas.module.css'
import { ReactNode, useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'

const Grade = styled.div`
	display: flex;
	padding: 2rem;
	gap: 1rem;
	flex-wrap: wrap;
	`

const Lista = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;	
`

export default function ListaNotas({ children }: { children: ReactNode }) {
	const { view } = useContext(DataContext)
	
	if (view === 'lista') return <Lista>{children}</Lista>

	return <Grade>{children}</Grade>
}
