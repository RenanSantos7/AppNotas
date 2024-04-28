import { useContext } from 'react'
import styles from './Aside.module.css'
import ItemMenu from './ItemMenu/ItemMenu'
import { DataContext } from '../../contexts/DataContext'
import classNames from 'classnames'

export default function Aside() {
    const { abrirModalEdit, asideAberto } = useContext(DataContext)
    
	return (
        <aside className={classNames(
            styles.aside,
            !asideAberto && styles.colapsado
        )}>
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
