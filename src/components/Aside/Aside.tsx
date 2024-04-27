import styles from './Aside.module.css'
import ItemMenu from './ItemMenu/ItemMenu'

export default function Aside() {
	return (
		<aside className={styles.aside}>
            <nav>
                <ul>
                    <ItemMenu icone='add' label='Nova nota' />
                    <ItemMenu icone='archive' label='Arquivo' clicked />
                    <ItemMenu icone='delete' label='Lixeira' />
                </ul>
            </nav>
		</aside>
	)
}
