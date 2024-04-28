import styles from './ItemMenu.module.css'
import classNames from 'classnames'
import Icone from '../../Icone/Icone'
import { useContext } from 'react'
import { DataContext } from '../../../contexts/DataContext'

export default function ItemMenu() {
    
    const {asideAberto, abrirModalEdit} = useContext(DataContext)

	return (
        <button
            type='button'
            className={classNames(
                styles.itemMenu,
                !asideAberto && styles.colapsado
            )}
            onClick={abrirModalEdit}
        >
			<Icone>add</Icone>
			<span>Nova nota</span>
		</button>
	)
}
