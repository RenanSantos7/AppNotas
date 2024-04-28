import { Box } from '@mui/material'
import { ReactNode } from 'react'


export default function ListaNotas({ children }: { children: ReactNode }) {
	return (
		<Box
			display= 'flex'
			padding='2rem'
			gap='1rem'
			flexWrap='wrap'
		>{children}</Box>
	)

}
