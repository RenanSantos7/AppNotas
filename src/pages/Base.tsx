import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Aside, Container, TopBar } from '../components'
import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import ModalEdit from '../components/ModalEdit/ModalEdit'

export default function Base() {

    const {modalEdit} = useContext(DataContext)

    return (
        <>
            <TopBar />
            <Container>
                <Aside />
                <main>
                    <Outlet />
                </main>
            </Container>

            {modalEdit && <ModalEdit />}
            <ScrollRestoration />
        </>
    )
}
