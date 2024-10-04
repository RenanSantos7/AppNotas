import { createTheme } from '@mui/material';
import { medidas } from './medidas';

const paper = '#303134';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#0E6073',
			dark: '#0A4A59',
			light: '#0A4A59',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#21A29A',
			dark: '#196661',
			light: '#196661',
			contrastText: '#ffffff',
		},
		background: {
			default: '#202124',
			paper: paper,
		},
		text: {
			primary: '#e2e2e2',
			secondary: '#ffffff',
			disabled: 'hsla(0, 0%, 66%, 0.38)',
		},
		...medidas,
	},
});
