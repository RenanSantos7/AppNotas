import styles from './Nota.module.css'
import { INota } from '../../types/types'
import { Titulo6 } from '../Titulos'
import {Edit} from '@mui/icons-material'
import classNames from 'classnames'
import { Box, Chip, IconButton, Paper } from '@mui/material'

interface NotaProps {
	nota: INota
}

export default function Nota({ nota }: NotaProps) {

    const { titulo, conteudo, tags, cor } = nota

	return (
        <article className={styles.nota}>
            <header className={styles.header}>
                <div className={styles.tags}>
                    {tags.map((tag, i) => (
                        // <Chip key={i}>{tag}</Chip>
                        <Chip key={i} label={tag} onClick={() => console.log(tag)} />
                    ))}
                </div>
                <IconButton className={styles.btEdit}>
                    <Edit />
                </IconButton>
            </header>
            {titulo && <Titulo6>{titulo}</Titulo6>}
            <div className={styles.content}>
                {conteudo}
            </div>
		</article>
	)
}
