import styles from './TopBar.module.css'
import BotaoIcon from '../BotaoIcon/BotaoIcon'
import Icone from '../Icone/Icone'
import { Titulo5 } from '../Titulos'
import { BarraPesquisa } from './BarraPesquisa/BarraPesquisa'
import { useContext, useState } from 'react'
import { AltView } from './AltView/AltView'
import { DataContext } from '../../contexts/DataContext'

export default function TopBar() {
	const [pesquisa, setPesquisa] = useState('')

	const { nomePag, toggleAside } = useContext(DataContext)

	return (
		<header className={styles.topbar}>
			<div>
				<BotaoIcon onClick={toggleAside}>
					<Icone>menu</Icone>
				</BotaoIcon>

				<Titulo5>{nomePag}</Titulo5>
			</div>

			<BarraPesquisa valor={pesquisa} setValor={setPesquisa} />

			<div>
				<AltView />
			</div>
		</header>
	)
}
