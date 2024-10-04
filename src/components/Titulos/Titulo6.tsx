import { ReactNode } from 'react';
import { styled } from '@mui/material';
import { TituloProps } from './types';

const Titulo = styled('h6')(({ theme }) => ({
	marginBottom: '1rem',
	fontWeight: '500',
	fontSize: '1.35rem',
	color: theme.palette.text.secondary,
}));

export default function Titulo6({ children, style }: TituloProps) {
	return <Titulo style={style}>{children}</Titulo>;
}
