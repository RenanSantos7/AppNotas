import { SetStateAction } from 'react';
import { useTheme, TextField, InputAdornment } from '@mui/material';
import Icone from '../../Icone';

interface BarraPesquisaProps {
	valor: string;
	setValor: React.Dispatch<SetStateAction<string>>;
}

export function BarraPesquisa({ valor, setValor }: BarraPesquisaProps) {
	const theme = useTheme();

	return (
		<TextField
			value={valor}
			onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
				setValor(event.target.value);
			}}
			variant='standard'
			placeholder='Pesquisa aqui...'
			sx={{
				color: theme.palette.text.primary,
				flexGrow: '1',
				maxWidth: '500px',
			}}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						<Icone style={{ opacity: '0.5' }}>search</Icone>
					</InputAdornment>
				),
			}}
		/>
	);
}
