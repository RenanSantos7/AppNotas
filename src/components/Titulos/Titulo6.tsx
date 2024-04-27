import { styled } from '@mui/material'
import { ReactNode } from 'react'

export default function Titulo6({ children }: { children: ReactNode }) {
    const Titulo = styled('h6')(
        ({ theme }) => ({
            marginBottom: theme.spacing(2),
            fontWeight: '500',
            fontSize: '1.35rem',
        })
    )

	return <Titulo>{children}</Titulo>
}
