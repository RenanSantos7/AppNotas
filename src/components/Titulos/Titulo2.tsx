import { ReactNode } from 'react'
import styled from 'styled-components'

const Titulo = styled.h2`
    margin-bottom: calc(2 * var(--und));
    font-weight: 300;
    font-size: 3rem;
    color: var(--color-title);
`
export default function Titulo2({ children }: { children: ReactNode }) {
	return <Titulo>{children}</Titulo>
}
