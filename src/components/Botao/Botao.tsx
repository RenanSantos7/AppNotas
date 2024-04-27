import { ReactNode } from 'react'
import styles from './Botao.module.css'
import classNames from 'classnames'

interface BotaoProps {
    title?: string
    type?: 'button' | 'submit'
    children: ReactNode
    variante?: 'solido' | 'delineado' | 'texto'
    onClick: () => void
}

export default function Botao({
    children,
    type = 'button',
    title,
    variante = 'solido',
    onClick
}: BotaoProps) {
    return (
        <button
            type={type}
            title={title}
            onClick={onClick}
            className={classNames(styles.botao, styles[variante])}
        >{children}</button>
    )
}
