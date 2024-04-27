import { createContext, useState, useEffect, ReactNode, useMemo, useCallback } from "react"
import { ThemeProvider } from "@mui/material"
import { darkTheme, lightTheme } from '../themes'

interface ThemeData {
    children: ReactNode
}

type ThemeName = 'light' | 'dark'

export const AppThemeContext = createContext({})

export const AppThemeProvider = ({ children }: {children: ReactNode}) => {
     
	const isDarkTheme = useMemo(() => (
		window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
	), [])

	const [themeName, setThemeName] = useState<ThemeName>(() => (
		isDarkTheme && isDarkTheme.matches ? 'dark' : 'light')
	)

	const theme = useMemo(() => {
		if (themeName === 'dark') return darkTheme

		return lightTheme
	}, [themeName])

	function updateTheme() {
		setThemeName(
			isDarkTheme &&
            isDarkTheme.matches ? 'dark' : 'light'
		)
	}

	useEffect(() => {
		updateTheme() 
		
		isDarkTheme?.addEventListener('change', updateTheme)

		return () => {
			isDarkTheme?.removeEventListener('change', updateTheme)
		}
	}, [isDarkTheme])

	return (
		<AppThemeContext.Provider value={{themeName}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
		</AppThemeContext.Provider>
	)
}