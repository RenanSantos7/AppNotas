import { styled } from '@mui/material'
import { TituloProps } from './types'

const Titulo = styled('h4')(
    ({theme}) => ({
        marginBottom: '1rem',
        fontWeight: '500',
        fontSize: '1.8rem',
        color: theme.palette.text.secondary,
    })
)

export default function Titulo4({ children, style }:TituloProps) {
    return (
        <Titulo
            style={style}
        >{children}</Titulo>
    )
}