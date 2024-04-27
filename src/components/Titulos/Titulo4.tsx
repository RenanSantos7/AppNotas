import { ReactNode } from 'react'
import styled from 'styled-components'

const Titulo = styled.h4`
	margin-bottom: calc(2 * var(--und));
	font-weight: 500;
	font-size: 1.8rem;
	color: var(--color-title);
`

export default function Titulo4({ children }: { children: ReactNode }) {
	return <Titulo>{children}</Titulo>
}
