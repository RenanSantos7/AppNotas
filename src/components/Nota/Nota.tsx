import styles from './Nota.module.css'
import Icone from '../Icone/Icone'
import { INota } from '../../types/types'
import { Titulo6 } from '../Titulos'
import { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import classNames from 'classnames'

interface NotaProps {
	nota: INota
}

export default function Nota({ nota }: NotaProps) {

    const { titulo, conteudo, tags, cor } = nota

    const { view } = useContext(DataContext)

	return (
        <article className={classNames(
            styles.nota,
            view === 'lista' && styles.listada
        )}>
            <header className={styles.header}>
                <div className={styles.tags}>
                    {tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
                <button type='button' title='Editar' className={styles.btEdit}>
                    <Icone>edit</Icone>
                </button>
            </header>
            {titulo && <Titulo6>{titulo}</Titulo6>}
            <div className={styles.content}>
                {conteudo}
            </div>
		</article>
	)
}
