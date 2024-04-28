import styled from 'styled-components'

interface PillProps {
    children: string
    onClick: () => void
    bgColor?: string
}

interface StyleProps {
    bgColor: string
}

const PillStilo = styled.div<StyleProps>`
    padding: .25rem .5rem;
    border-radius: 8rem;
    color: white;
    cursor: pointer;
    background-color: ${props => props.bgColor || 'var(--cinza4)'}
`

export default function Pill({children, bgColor, onClick}:PillProps) {
    return (
        <PillStilo onClick={onClick} bgColor={bgColor}>
            {children}
        </PillStilo>
    )
}
