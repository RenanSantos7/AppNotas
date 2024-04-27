import { styled } from '@mui/material'
import { ReactNode } from 'react'

export default function Titulo2({ children }: { children: ReactNode }) {
    const Titulo = styled('h2')(
        ({ theme }) => ({
            marginBottom: theme.spacing(2),
            fontWeight: '300',
            fontSize: '3rem',
        })
    )

	return <Titulo>{children}</Titulo>
}
