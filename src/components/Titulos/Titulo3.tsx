import { styled } from '@mui/material';
import { TituloProps } from './types';

const Titulo = styled('h3')(({ theme }) => ({
	marginBottom: '1rem',
	fontWeight: '400',
	fontSize: '2.25rem',
	color: theme.palette.text.secondary,
}));

export default function Titulo3({ children, style }: TituloProps) {
	return <Titulo style={style}>{children}</Titulo>;
}
