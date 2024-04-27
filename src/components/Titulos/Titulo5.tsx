import { ReactNode } from 'react'
import styled from 'styled-components'

const Titulo = styled.h5`
    margin-bottom: calc(2 * var(--und));
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--color-title);
`

export default function Titulo5({ children }: { children: ReactNode }) {

	return <Titulo>{children}</Titulo>
}
