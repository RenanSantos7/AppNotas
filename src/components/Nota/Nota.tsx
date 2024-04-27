import styles from './Nota.module.css'
import { INota } from '../../types/types'
import { Titulo6 } from '../Titulos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import classNames from 'classnames'

interface NotaProps {
	nota: INota
}

export default function Nota({ nota }: NotaProps) {

    const { titulo, conteudo, tags, cor } = nota

	return (
        <article className={styles.nota}>
            <header className={styles.header}>
                <div className={styles.tags}>
                    {tags.map((tag, i) => <span key={i}>{tag}</span>)}
                </div>
                <button type='button' title='Editar' className={styles.btEdit}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
            </header>
            {titulo && <Titulo6>{titulo}</Titulo6>}
            <div className={styles.content}>
                {conteudo}
            </div>
		</article>
	)
}
