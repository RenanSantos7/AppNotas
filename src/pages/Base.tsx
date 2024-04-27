import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Aside, Container, TopBar } from '../components'

export default function Base() {
    return (
        <>
            <TopBar />
            <Container>
                <Aside />
                <main>
                    <Outlet />
                </main>
            </Container>
            <ScrollRestoration />
        </>
    )
}
