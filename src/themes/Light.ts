import { createTheme } from '@mui/material'
import { medidas } from './medidas'

const paper = '#FFFFFF'

export const lightTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#8BDEF1',
			dark: '#B7EBF7',
			light: '#B7EBF7',
			contrastText: paper
		},
		secondary: {
			main: '#38D6CA',
			dark: '#99E6DF',
			light: '#00BFB3',
			contrastText: paper,
		},
		background: {
			default: '#FAFAFA',
			paper: paper
		},
		text: {
			primary: '#2b2b2b',
			secondary: '#000000',
			disabled: 'hsla(0, 0%, 38%, 0.38)'
		},
		...medidas
	},
})
