import { ReactNode } from 'react'
import styled from 'styled-components'

const Titulo = styled.h3`
	margin-bottom: calc(2 * var(--und));
	font-weight: 400;
	font-size: 2.25rem;
`

export default function Titulo3({ children }: { children: ReactNode }) {
	return <Titulo>{children}</Titulo>
}
