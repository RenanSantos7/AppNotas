import { useContext } from 'react'
import styles from './Aside.module.css'
import ItemMenu from './ItemMenu/ItemMenu'
import { DataContext } from '../../contexts/DataContext'

export default function Aside() {
    const { abrirModalEdit } = useContext(DataContext)
    

	return (
		<aside className={styles.aside}>
            <nav>
                <ul>
                    <ItemMenu icone='add' label='Nova nota' onClick={abrirModalEdit} />
                    <ItemMenu icone='archive' label='Arquivo' />
                    <ItemMenu icone='delete' label='Lixeira' />
                </ul>
            </nav>
		</aside>
	)
}
