import { useContext } from 'react'
import Icone from '../Icone/Icone'
import { Titulo4 } from '../Titulos'
import styles from './ModalEdit.module.css'
import { DataContext } from '../../contexts/DataContext'
import Botao from '../Botao/Botao'

export default function ModalEdit() {
    const { fecharModalEdit } = useContext(DataContext)
    
    function salvarNota() {
        console.log('salvei')
    }

    return (
        <div className={styles.sombra}>
            <div className={styles.modal}>
                <header>
                    <Titulo4>Nova nota</Titulo4>
                    <button
                        type='button'
                        title='Fechar'
                        onClick={fecharModalEdit}
                    >
                        <Icone>close</Icone>
                    </button>
                </header>

                <label htmlFor='edicao'></label>
                <textarea
                    id='edicao'
                    className={styles.campoEdicao}
                    autoFocus
                    placeholder='Escreva aqui sua nota'
                    required
                    spellCheck
                ></textarea>

                <div className={styles.btnContainer}>
                    <Botao onClick={salvarNota}>Salvar</Botao>
                </div>
            </div>
        </div>
    )
}
