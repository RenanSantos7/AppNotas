import { styled } from '@mui/material';
import { TituloProps } from './types';

const Titulo = styled('h2')(({ theme }) => ({
	marginBottom: '1rem',
	fontWeight: '300',
	fontSize: '3rem',
	color: theme.palette.text.secondary,
}));

export default function Titulo2({ children, style }: TituloProps) {
	return <Titulo style={style}>{children}</Titulo>;
}
