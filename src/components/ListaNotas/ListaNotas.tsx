import { Box } from "@mui/material";
import { ReactNode } from "react";


export default function ListaNotas({children}:{children: ReactNode}) {
    return (
        <Box
            display='flex'
            gap={2}
            p={4}
            sx={{
                flexFlow: 'row wrap'
            }}
        >
            {children}
        </Box>
    )
}
