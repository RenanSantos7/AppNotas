import { Box, Paper, Typography, styled, useTheme } from '@mui/material'
import { INota } from '../../types/types'
import { Titulo6 } from '../Titulos'

interface NotaProps {
	nota: INota
}

export default function Nota({ nota }: NotaProps) {
	const theme = useTheme()

    const { titulo, conteudo, tags, cor } = nota
    
    const Papel = styled('article')(
        ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            width: theme.spacing(40),
            height: theme.spacing(40),
            padding: theme.spacing(4),
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
            boxShadow: theme.shadows[2],
            transition: 'all 0.6s ease-in-out'
        })
    )

	return (
        <Papel
            sx={{
                ':hover': {
                    boxShadow: theme.shadows[5],
                    translate: '-2px -2px'
                }
            }}
        >
            {titulo && <Titulo6>{titulo}</Titulo6>}
            <Box
                lineHeight={1.2}
                overflow='hidden'
                textOverflow='ellipsis'
                flexGrow={1}
            >
                {conteudo}
            </Box>
		</Papel>
	)
}
