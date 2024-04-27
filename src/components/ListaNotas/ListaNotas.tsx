import styled from 'styled-components'
// import styles from './ListaNotas.module.css'
import { ReactNode } from 'react'

const Box = styled.div`
	display: flex;
	padding: 2rem;
	gap: 1rem;
	flex-wrap: wrap;
`

export default function ListaNotas({ children }: { children: ReactNode }) {
	return <Box>{children}</Box>
	// return (
	// 	<div className={styles.box}>
	// 		{children}
	// 	</div>
	// )
}
