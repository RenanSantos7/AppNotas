import { SetStateAction } from 'react'
import styles from './BarraPesquisa.module.css'
import Icone from '../../Icone/Icone'

interface BarraPesquisaProps {
    valor: string
    setValor: React.Dispatch<SetStateAction<string>>
}

export function BarraPesquisa({valor, setValor}:BarraPesquisaProps) {
    return (
        <label className={styles.container}>
            <Icone>search</Icone>

            <input
                type="text"
                value={valor}
                onChange={({ target }) => setValor(target.value)}
                title=''
                placeholder='Pesquise suas notas'
            />
        </label>
    )
}
