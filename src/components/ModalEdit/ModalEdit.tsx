import { useContext, useState } from 'react'
import Icone from '../Icone/Icone'
import { Titulo4 } from '../Titulos'
import styles from './ModalEdit.module.css'
import { DataContext } from '../../contexts/DataContext'
import Botao from '../Botao/Botao'
import { INota, ITag } from '../../types/types'

export default function ModalEdit() {
    const { fecharModalEdit, tags, notas, setNotas } = useContext(DataContext)

    const [titulo, setTitulo] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [tagsDaNota, setTagsDaNota] = useState([])

    function criarNota() {
        let respValida = false

        const novaNota = {
            id: notas.length,
            titulo: titulo && titulo,
            conteudo: conteudo,
            tags: tagsDaNota
        }

        if(conteudo) respValida = true

        if (respValida) {
            setNotas((prev: INota[]) => [...prev, novaNota])
        } else {
            console.log('Não foi possível criar a nota')
        }
    }

    function salvarNota() {
        console.log('salvei')
    }

    function aoSubmeter() {
        
    }

    return (
        <div className={styles.sombra}>
            <form className={styles.modal} onSubmit={aoSubmeter}>
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

                <select title='tags' style={{border: '1px solid'}} required>
                    <option></option>
                    {tags.map((tag:ITag) => <option value={tag.titulo} key={tag.id}>{tag.titulo}</option>)}
                </select>

                <textarea
                    id='edicao'
                    className={styles.campoEdicao}
                    placeholder='Escreva aqui sua nota'
                    autoFocus
                    required
                    spellCheck
                ></textarea>

                <div className={styles.btnContainer}>
                    <Botao type='submit'>Salvar</Botao>
                </div>
            </form>
        </div>
    )
}
