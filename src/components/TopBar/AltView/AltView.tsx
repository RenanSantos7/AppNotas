import Icone from '../../Icone';
import { useContext } from 'react';
import { DataContext } from '../../../contexts/DataContext';
import { IconButton } from '@mui/material';

interface Contexto {
	view: 'lista' | 'grade';
	toggleView: () => void;
}

export function AltView() {
	const { view, toggleView }: Contexto = useContext(DataContext);

	const icone = view === 'lista' ? 'view_list' : 'view_module';

	return (
		<IconButton onClick={toggleView}>
			<Icone>{icone}</Icone>
		</IconButton>
	);
}
