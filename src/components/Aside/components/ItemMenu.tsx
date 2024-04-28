import styles from './ItemMenu.module.css'
import classNames from 'classnames'
import Icone from '../../Icone/Icone'
import { useContext } from 'react'
import { DataContext } from '../../../contexts/DataContext'
import { NavLink } from 'react-router-dom'

interface ItemMenuProps {
    path: string
    icone: string
    label: string
    clicked?: boolean
    onClick?: () => void
}

export default function ItemMenu({ path, icone, label, clicked = false, onClick }: ItemMenuProps) {
    
    const {asideAberto} = useContext(DataContext)

	return (
        <NavLink
            to={path}
            className={classNames(
                styles.itemMenu,
                ({ isActive }: {isActive: boolean}) => isActive && styles.active,
                !asideAberto && styles.colapsado
            )}
            onClick={onClick}
            end
        >
			<Icone>{icone}</Icone>
			<span>{label}</span>
		</NavLink>
	)
}
