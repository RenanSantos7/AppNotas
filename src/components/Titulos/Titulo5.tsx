import { styled } from '@mui/material'
import { ReactNode } from 'react'

export default function Titulo5({ children }: { children: ReactNode }) {
    const Titulo = styled('h5')(
        ({ theme }) => ({
            marginBottom: theme.spacing(2),
            fontWeight: '500',
            fontSize: '1.5rem',
        })
    )

	return <Titulo>{children}</Titulo>
}
