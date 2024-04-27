import { ReactNode } from "react"
import styled from "styled-components"

interface BotaoIconProps {
    title?: string
    type?: 'button' | 'submit'
    children: ReactNode
    onClick: () => void
}

const BotaoStilo = styled.button`
    border-radius: 50%;
    background-color: transparent;
    transition: .3s ease-in-out .3s;
    padding: .5rem;
    /* border: 1px solid gold; */

    &:hover {
        background-color: var(--cinza3)
    }
`

export default function BotaoIcon({title, children, type = 'button', onClick}:BotaoIconProps) {
    return (
        <BotaoStilo
            type={type}
            title={title}
            onClick={onClick}
        >{children}</BotaoStilo>
    )
}
