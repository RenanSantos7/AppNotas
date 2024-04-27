import { styled } from '@mui/material'
import { ReactNode } from 'react'

export default function Titulo3({ children }: { children: ReactNode }) {
    const Titulo = styled('h3')(
        ({ theme }) => ({
            marginBottom: theme.spacing(2),
            fontWeight: '400',
            fontSize: '2.25rem',
        })
    )

	return <Titulo>{children}</Titulo>
}
