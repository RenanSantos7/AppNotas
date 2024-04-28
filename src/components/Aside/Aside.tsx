import { useContext } from 'react'
import styles from './Aside.module.css'
import BtNovaNota from './components/BtNovaNota'
import ItemMenu from './components/ItemMenu'
import { DataContext } from '../../contexts/DataContext'
import classNames from 'classnames'

export default function Aside() {
    const { asideAberto } = useContext(DataContext)

    const links = [
        { id: 0, icone: 'label', label: 'Tags', path: '/tags' },
        { id: 1, icone: 'archive', label: 'Arquivo', path: '/arquivo' },
        { id: 2, icone: 'delete', label: 'Lixeira', path: '/lixeira' },
    ]
    
	return (
        <aside className={classNames(
            styles.aside,
            !asideAberto && styles.colapsado
        )}>
            <nav>
                <ul>
                    <li>
                        <BtNovaNota />
                    </li>
                    {links.map(link => (
                        <li key={link.id}>
                            <ItemMenu path={link.path} icone={link.icone} label={link.label} />
                        </li>
                    ))}
                </ul>
            </nav>
		</aside>
	)
}
