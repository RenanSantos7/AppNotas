import Icone from '../Icone/Icone'
import { Titulo5 } from '../Titulos'
import { BarraPesquisa } from './BarraPesquisa/BarraPesquisa'
import { useContext, useState } from 'react'
import { AltView } from './AltView/AltView'
import { DataContext } from '../../contexts/DataContext'
import { AppBar, Toolbar, IconButton, useTheme, Box, styled } from '@mui/material'

export default function TopBar() {
	const [pesquisa, setPesquisa] = useState('')

	const { nomePag } = useContext(DataContext)

	const theme = useTheme()

	const FlexContent = styled('div')(
		() => ({
			display: 'flex',
			gap: '.5rem',
			alignItems: 'center'
		})
	)

	return (
		<AppBar
			position='static'
			sx={{
				bgcolor: theme.palette.background.default
			}}
		>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				}}
			>
				<FlexContent>
					<IconButton
						size='large'
						edge='start'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<Icone>menu</Icone>
					</IconButton>
					<Titulo5 style={{margin: 0}}>{nomePag}</Titulo5>
				</FlexContent>

				<BarraPesquisa valor={pesquisa} setValor={setPesquisa} />

				<FlexContent>
					<AltView />
				</FlexContent>
			</Toolbar>
		</AppBar>
	)
}
