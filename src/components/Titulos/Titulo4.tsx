import { styled } from '@mui/material'
import { ReactNode } from 'react'

export default function Titulo4({ children }: { children: ReactNode }) {
    const Titulo = styled('h4')(
        ({ theme }) => ({
            marginBottom: theme.spacing(2),
            fontWeight: '500',
            fontSize: '1.8rem',
        })
    )

	return <Titulo>{children}</Titulo>
}
