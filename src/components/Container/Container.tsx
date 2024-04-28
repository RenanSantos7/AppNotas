import { Box, styled } from "@mui/material"
import { ReactNode } from "react"

export default function Container({children}: {children: ReactNode}) {
    return (
        <Box
            display='flex'
            gap='1.5rem'
            height='calc(100vh - 4rem)'
            overflow='hidden'
        >
            {children}
        </Box>
    )
}
