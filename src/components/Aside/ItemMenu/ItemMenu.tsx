import classNames from 'classnames'
import Icone from '../../Icone/Icone'
import styles from './ItemMenu.module.css'

interface ItemMenuProps {
    icone: string
    label: string
    clicked?: boolean
}

export default function ItemMenu({icone, label, clicked = false}:ItemMenuProps) {
	return (
        <li className={classNames(
            styles.itemMenu,
            clicked && styles.clicked
        )}>
			<Icone>{icone}</Icone>
			<span>{label}</span>
		</li>
	)
}
