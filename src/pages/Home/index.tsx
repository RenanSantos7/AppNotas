import { SetStateAction, useContext, useEffect } from 'react';
import { DataContext } from '../../contexts/DataContext';
import { INota } from '../../types/types';
import { Nota, ListaNotas } from '../../components';

interface Contexto {
	notas: INota[];
	setNomePag: React.Dispatch<SetStateAction<string>>;
}

export default function Home() {
	const { notas, setNomePag }: Contexto = useContext(DataContext);

	useEffect(() => {
		setNomePag('Notas');
	}, []);

	return (
		<>
			<ListaNotas>
				{notas.map(nota => (
					<Nota nota={nota} key={nota.id} />
				))}
			</ListaNotas>
		</>
	);
}
