import BotaoIcon from '../../BotaoIcon/BotaoIcon'
import Icone from '../../Icone/Icone'
import { useContext } from 'react'
import { DataContext } from '../../../contexts/DataContext'

interface Contexto {
	view: 'lista' | 'grade'
	toggleView: () => void
}

export function AltView() {
	const { view, toggleView }: Contexto = useContext(DataContext)

	const icone = view === 'lista' ? 'view_list' : 'view_module'

	return (
		<BotaoIcon onClick={toggleView}>
			<Icone>{icone}</Icone>
		</BotaoIcon>
	)
}
