import styles from './ItemMenu.module.css'
import classNames from 'classnames'
import Icone from '../../Icone/Icone'
import { useContext } from 'react'
import { DataContext } from '../../../contexts/DataContext'

interface ItemMenuProps {
    icone: string
    label: string
    clicked?: boolean
    onClick?: () => void
}

export default function ItemMenu({ icone, label, clicked = false, onClick }: ItemMenuProps) {
    
    const {asideAberto} = useContext(DataContext)

	return (
        <li
            className={classNames(
                styles.itemMenu,
                clicked && styles.clicked,
                !asideAberto && styles.colapsado
            )}
            onClick={onClick}
        >
			<Icone>{icone}</Icone>
			<span>{label}</span>
		</li>
	)
}
