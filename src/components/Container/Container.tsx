import { ReactNode } from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    height: calc(100vh - 4rem);
    overflow: hidden;

    main {
        overflow: auto;
        flex-grow: 1;
    }
`

export default function Container({children}: {children: ReactNode}) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
